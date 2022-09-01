import { useState } from "react";

const OnOff = ({
  on,
  checkItem,
}: {
  on: boolean;
  checkItem: { name: string; id: string };
}) => {
  const [active, setActive] = useState(on);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex justify-between my-3 px-2">
      <span className="font-iransans font-light">{checkItem.name}</span>
      <div
        onClick={handleClick}
        className={`transition-all ${
          active ? "bg-primary" : "bg-gray-300"
        } duration-300 rounded-full w-[2.2rem] h-[1.2rem] flex items-center px-[.2rem]`}
      >
        <div
          className="w-[.8rem] h-[.8rem] bg-white rounded-full transition-all"
          style={{ transform: active ? "translateX(-1rem)" : "" }}
        ></div>
      </div>
    </div>
  );
};

export default OnOff;
