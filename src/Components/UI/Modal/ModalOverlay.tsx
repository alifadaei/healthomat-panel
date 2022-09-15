import Card from "../Card/Card";

const ModalOverlay = ({
  children,
  raw,
  state,
  modalSize = "MINI",
}: {
  raw: boolean;
  children: React.ReactElement;
  state: string;
  modalSize: "LARGE" | "MINI" | "SUPER MINI";
}) => {
  const classNames = `z-50 ${
    state === "entering" || state === "entered"
      ? "opacity-100"
      : state === "exiting" || state === "exited"
      ? "opacity-0"
      : ""
  }`;
  return (
    <Card
      className={` ${
        modalSize === "MINI"
          ? "w-[25rem] xs:w-[45rem]"
          : modalSize === "SUPER MINI"
          ? "w-[25rem]"
          : "w-[50rem] h-[30rem]"
      } ${raw ? "" : "bg-white"} p-4 ${classNames} `}
    >
      {children}
    </Card>
  );
};

export default ModalOverlay;
