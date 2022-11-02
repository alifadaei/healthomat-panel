import { IconType } from "../../../../utils/Babies/Babies";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userEnteredData } from "../newBabySlice";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../hooks/useSelector";

type IconChoicesProps = {
  type: "MultipleIcons" | "RadioIcons";
  icons: IconType[];
  active: number;
};
const IconChoices = ({ icons, type, active }: IconChoicesProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("babies");
  const [selected, setSelected] = useState(
    type === "MultipleIcons" ? Array<boolean>(icons.length).fill(false) : -1
  );
  const formType = useAppSelector((state) => state.newBaby.type);
  const answers = useAppSelector((state) => state.newBaby.answers);
  useEffect(() => {
    if (formType === "Edit") {
      const value = answers[active].value;
      if (type === "RadioIcons") {
        setSelected(Number(value) - 1);
      } else {
        setSelected(
          value.split(",").map((item) => item.toLowerCase() === "true")
        );
      }
    }
  }, [formType]);
  const handleClickIcon = (key: number) => {
    if (Array.isArray(selected)) {
      //multiple choices
      const newSelected = [...selected];
      newSelected[key] = !newSelected[key];
      setSelected(newSelected);
      dispatch(userEnteredData({ value: newSelected.join(","), state: "OK" }));
    } else {
      //one choice
      setSelected(key);
      dispatch(userEnteredData({ value: (key + 1).toString(), state: "OK" }));
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
              alt={t(item.name)}
            />
          </span>
          <span className="drop-shadow-lg text-xs sm:text-sm ">
            {t(item.name)}
          </span>
        </div>
      ))}
    </form>
  );
};
export default IconChoices;
