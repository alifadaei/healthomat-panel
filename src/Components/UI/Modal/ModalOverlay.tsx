import { TransitionState } from "../../../hooks/useTransition";
import Card from "../Card/Card";

const ModalOverlay = ({
  children,
  raw,
  state,
}: {
  raw: boolean;
  children: React.ReactElement;
  state: TransitionState;
}) => {
  const classNames = `z-50 ${state === "Enter" ? "opacity-100" : "opacity-0"}`;
  return (
    <Card className={` ${raw ? "" : "bg-white"} ${classNames} `}>
      {children}
    </Card>
  );
};

export default ModalOverlay;
