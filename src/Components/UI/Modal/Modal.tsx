import { useEffect } from "react";
import useTransition from "../../../hooks/useTransition";
import Tooltip from "../Tooltip/Tooltip";
import ModalBackdrop from "./ModalBackdrop";
import ModalOverlay from "./ModalOverlay";
/**
 * this module is resposible for creating a portal element when
 * isOpen is true and also render the children in it and also get the handler of
 * backdrop click to propagate the closing message to it's parent
 */

type ModalProps = {
  modalSize?: "MINI" | "LARGE" | "SUPER MINI";
  children: JSX.Element;
  isOpen: boolean;
  onBackdropClick: () => void;
  raw?: boolean;
};
const Modal = ({
  raw = false,
  children,
  isOpen,
  onBackdropClick,
  modalSize = "MINI",
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  const { mount } = useTransition(300, isOpen);
  if (mount)
    return (
      <Tooltip selector="#overlays">
        <div
          className={`fixed top-0 end-0 w-full h-full flex justify-center  ${
            raw ? "items-center" : "items-start"
          } z-20 overflow-auto px-2 pt-10`}
        >
          <ModalOverlay raw={raw} modalSize={modalSize} state="Enter">
            {children}
          </ModalOverlay>
          <ModalBackdrop state="Enter" onClose={onBackdropClick} />
        </div>
      </Tooltip>
    );
  else {
    return null;
  }
};

export default Modal;
