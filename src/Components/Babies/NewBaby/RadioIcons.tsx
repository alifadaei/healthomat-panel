import { useState } from "react";
type RadioIconsProps = {
  multipleChoices?: boolean;
  icons: { src: string; name: string }[];
  onClickIcon: (text: string) => void;
};
const RadioIcons = ({
  icons,
  onClickIcon,
  multipleChoices,
}: RadioIconsProps) => {
  const [selected, setSelected] = useState(Array(icons.length).fill(false));
  const handleClickIcon = (key: number) => {
    const newSelected = [...selected];
    if (!multipleChoices) {
      newSelected.fill(false);
      newSelected[key] = true;
      onClickIcon(newSelected.indexOf(true)!.toString());
    } else {
      newSelected[key] = !newSelected[key];
      onClickIcon(JSON.stringify(newSelected));
    }
    setSelected(newSelected);
  };
  return (
    <form className="mt-5 xs:mt-10 flex gap-x-3 sm:gap-x-6 justify-center">
      {icons.map((item, key) => (
        <div key={key} className="p-3 cursor-pointer ">
          <span className={`bg-white rounded-full shadow-md`}>
            <img
              onClick={handleClickIcon.bind(null, key)}
              className={`shadow-lg w-[5rem] xs:w-[7rem] rounded-full ${
                selected[key] ? "border-primary border-2" : ""
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
