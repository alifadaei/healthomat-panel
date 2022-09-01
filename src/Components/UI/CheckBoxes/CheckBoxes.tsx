import { useState } from "react";
import CheckBox from "../FormElements/CheckBox/CheckBox";

type CheckItem = {
  name: string;
  id: string;
  checked?: boolean;
};
const CheckBoxes = ({ inputList }: { inputList: CheckItem[] }) => {
  const [itemsList, setItemsList] = useState(
    inputList.map((item) => ({ ...item, checked: false }))
  );

  const handleClick = (id: string) => {
    setItemsList((itemsList) =>
      itemsList.map((obj) =>
        obj.id === id ? { ...obj, checked: !obj.checked } : obj
      )
    );
  };

  return (
    <div className="max-h-[10rem] overflow-y-scroll ">
      <ul className="px-2 flex-col mt-2">
        {itemsList.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer pb-3"
            onClick={handleClick.bind(null, item.id)}
          >
            <CheckBox className="" title={item.name} checked={item.checked} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckBoxes;
