import useRTL from "../../../hooks/useRTL";

const DrawerContent = ({
  children,
  state,
}: {
  state: "Exit" | "Enter";
  children: React.ReactElement;
}) => {
  const isRTL = useRTL();
  const style = {
    right: isRTL ? (state === "Enter" ? 0 : -200) : "",
    left: !isRTL ? (state === "Enter" ? 0 : -200) : "",
  };

  return (
    <div
      style={style}
      className={`z-50 p-4 bg-white absolute top-0 h-full transition-all duration-400 overflow-auto`}
    >
      {children}
    </div>
  );
};
export default DrawerContent;
