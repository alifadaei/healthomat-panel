import { useEffect } from "react";
import { Transition } from "react-transition-group";
import Tooltip from "../Tooltip/Tooltip";
import ModalBackdrop from "./ModalBackdrop";
import ModalOverlay from "./ModalOverlay";
/**
 * this module is resposible for creating a portal element when
 * isOpen is true and also render the children in it and also get the handler of
 * backdrop click to propagate the closing message to it's parent
 */

type ModalProps = {
  modalSize?: "MINI" | "LARGE";
  children: JSX.Element;
  isOpen: boolean;
  onBackdropClick: () => void;
};
const Modal = ({
  children,
  isOpen,
  onBackdropClick,
  modalSize = "MINI",
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
  // console.log(children);
  return (
    <Tooltip selector="#overlays">
      <Transition timeout={300} in={isOpen} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <div
              className={`fixed top-0 end-0 w-full h-full flex justify-center items-start z-20 overflow-auto px-2 pt-10`}
            >
              <ModalOverlay modalSize={modalSize} state={state}>
                {children}
              </ModalOverlay>
              <ModalBackdrop state={state} onClose={onBackdropClick} />
            </div>
          );
        }}
      </Transition>
    </Tooltip>
  );
};

export default Modal;
