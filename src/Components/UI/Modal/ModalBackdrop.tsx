import { TransitionState } from "../../../hooks/useTransition";

const ModalBackdrop = ({
  state,
  onClose,
}: {
  state: TransitionState;
  onClose: () => void;
}) => {
  return (
    <div
      onClick={onClose}
      className={`${state === "Enter" ? "opacity-100" : "opacity-0"} 
      transition-all transition-300 fixed top-0 end-0 w-full h-full z-30 bg-[rgba(255,255,255,.5)]`}
    ></div>
  );
};
export default ModalBackdrop;
