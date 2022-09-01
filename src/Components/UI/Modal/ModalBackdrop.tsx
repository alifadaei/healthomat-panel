const ModalBackdrop = ({
  state,
  onClose,
}: {
  state: string;
  onClose: () => void;
}) => {
  return (
    <div
      onClick={onClose}
      className={`${
        state === "entering" || state === "entered"
          ? "opacity-100"
          : state === "exiting" || state === "exited"
          ? "opacity-0"
          : null
      } 
      transition-all transition-300 fixed top-0 end-0 w-full h-full z-30 bg-[rgba(0,0,0,.5)]`}
    ></div>
  );
};
export default ModalBackdrop;
