import { TransitionState } from "../../../hooks/useTransition";
import Card from "../Card/Card";

const ModalOverlay = ({
  children,
  state,
  modalSize = "MINI",
}: {
  children: React.ReactElement;
  state: TransitionState;
  modalSize: "LARGE" | "MINI";
}) => {
  return (
    <Card
      className={` ${
        modalSize === "MINI" ? "w-[25rem]" : "w-[50rem] h-[30rem]"
      } bg-white p-4 `}
    >
      {children}
    </Card>
  );
};

export default ModalOverlay;
