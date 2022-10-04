import { useState } from "react";
type RadioIconsProps = {
  icons: { src: string; name: string }[];
  onClickIcon: (text: string) => void;
};
const RadioIcons = ({ icons, onClickIcon }: RadioIconsProps) => {
  const [selected, setSelected] = useState(-1);
  const handleClickIcon = (key: number, text: string) => {
    setSelected(key);
    onClickIcon(text);
  };
  return (
    <form className="mt-5 xs:mt-10 flex gap-x-3 sm:gap-x-6 justify-center">
      {icons.map((item, key) => (
        <div key={key} className="p-3 cursor-pointer ">
          <span className={`bg-white rounded-full shadow-md`}>
            <img
              onClick={handleClickIcon.bind(null, key, item.name)}
              className={`shadow-lg w-[5rem] xs:w-[7rem] rounded-full ${
                selected === key ? "border-primary border-2" : ""
              }`}
              src={item.src}
              alt={item.name}
            />
          </span>
          <span className="drop-shadow-lg">{item.name}</span>
        </div>
      ))}
    </form>
  );
};
export default RadioIcons;
