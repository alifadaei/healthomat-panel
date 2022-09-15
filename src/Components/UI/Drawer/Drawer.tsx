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
  targetSelector: string;
  children: JSX.Element;
  isOpen: boolean;
  onBackdropClick: () => void;
};
const Drawer = ({
  targetSelector,
  children,
  isOpen,
  onBackdropClick,
}: DrawerProps) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  const { state } = useTransition(400, isOpen);
  return (
    <Tooltip selector={targetSelector}>
      <div
        className={`absolute top-0 start-0 w-full h-full ${
          isOpen ? "z-20" : ""
        }`}
      >
        <DrawerContent state={state}>{children}</DrawerContent>
        {isOpen && <ModalBackdrop state={state} onClose={onBackdropClick} />}
      </div>
    </Tooltip>
  );
};

export default Drawer;
