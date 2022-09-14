import { useEffect, useRef, useState } from "react";
import useTransition from "../../../hooks/useTransition";
import ModalBackdrop from "../Modal/ModalBackdrop";
import Tooltip from "../Tooltip/Tooltip";
import DrawerContent from "./DrawerContent";
/**
 * this module is resposible for creating a portal element when
 * isOpen is true and also render the children in it and also get the handler of
 * backdrop click to propagate the closing message to it's parent
 */

type DrawerProps = {
  children: JSX.Element;
  isOpen: boolean;
  onBackdropClick: () => void;
};
const Drawer = ({ children, isOpen, onBackdropClick }: DrawerProps) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  const { state, mount } = useTransition(400, isOpen);
  // console.log(children);
  if (mount)
    return (
      <Tooltip selector="#overlays">
        <div className={`absolute top-0 end-0 w-full h-full z-20`}>
          <DrawerContent state={state}>{children}</DrawerContent>
          <ModalBackdrop state={state} onClose={onBackdropClick} />
        </div>
      </Tooltip>
    );
  else return null;
};

export default Drawer;
