import { useEffect, useRef, useState } from "react";
import useRTL from "../../../hooks/useRTL";

const DrawerContent = ({
  children,
  state,
}: {
  state: "Exit" | "Enter";
  children: React.ReactElement;
}) => {
  const isRTL = useRTL();
  const ref = useRef<HTMLDivElement>(null);
  const [elemWidth, setWidth] = useState(250);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  }, [ref.current]);
  const style = {
    right: isRTL ? (state === "Enter" ? 0 : -elemWidth) : "",
    left: !isRTL ? (state === "Enter" ? 0 : -elemWidth) : "",
  };

  return (
    <div
      style={style}
      className={`z-50 p-4 w-[14rem] bg-white absolute top-0 h-full transition-all duration-400 overflow-auto`}
    >
      {children}
    </div>
  );
};
export default DrawerContent;
