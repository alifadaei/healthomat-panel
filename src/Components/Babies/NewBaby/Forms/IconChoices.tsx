import { IconType } from "../../../../utils/Babies/Babies";
import { useState } from "react";
import { FieldState } from "../../../../hooks/useValidation";

type IconChoicesProps = {
  type: "MultipleIcons" | "RadioIcons";
  icons: IconType[];
  setData: (newData: { value: string; state: FieldState }) => void;
};
const IconChoices = ({ icons, setData, type }: IconChoicesProps) => {
  const [selected, setSelected] = useState(
    type === "MultipleIcons" ? Array<boolean>(icons.length).fill(false) : -1
  );

  const handleClickIcon = (key: number) => {
    if (Array.isArray(selected)) {
      //multiple choices
      const newSelected = [...selected];
      newSelected[key] = !newSelected[key];
      setSelected(newSelected);
      setData({ value: newSelected.join(","), state: "OK" });
    } else {
      setSelected(key);
      setData({ value: key.toString(), state: "OK" });
    }
  };
  return (
    <form className="mt-3 xs:mt-3 gap-x-3 sm:gap-x-5 px-[2rem] xs:px-[3rem] sm:px-[4rem] flex justify-center">
      {icons.map((item, key) => (
        <div key={key} className="cursor-pointer ">
          <span className={`bg-white rounded-full shadow-md`}>
            <img
              onClick={handleClickIcon.bind(null, key)}
              className={`shadow-lg w-[5rem] xs:w-[7rem] rounded-full ${
                (Array.isArray(selected) && selected[key]) || key === selected
                  ? "border-primary border-2"
                  : ""
              }`}
              src={item.src}
              alt={item.name}
            />
          </span>
          <span className="drop-shadow-lg text-xs sm:text-sm ">
            {item.name}
          </span>
        </div>
      ))}
    </form>
  );
};
export default IconChoices;
