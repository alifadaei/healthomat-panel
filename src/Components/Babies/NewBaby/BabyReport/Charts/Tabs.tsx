import { useMemo, useState } from "react";
import BabyChart from "./BabyChart";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../../hooks/useSelector";

export type BabyRecordDataStructure = {
  id: string;
  date: string;
  weight: number;
  length: number;
  headCircumference: number;
};

const Tab = () => {
  const { t } = useTranslation("babies");
  const graphTypes = useMemo(
    () => [
      {
        id: "1",
        name: "Head circumference for age",
        x: "Age (months)",
        y: "Head circumference (cm)",
      },
      { id: "2", name: "Length for age", x: "Age (months)", y: "Length (cm)" },
      // { name: "Weight for age", x: "Age (months)", y: "Weight (kg)" },
      // { name: "Weight for length", x: "Length (cm)", y: "Weight (kg)" },
    ],
    []
  );
  const [showItem, setItem] = useState(0);

  const childOwnDataSet = useAppSelector(
    (state) => state.babyReport.babyDataSet
  );

  const childGender = "boys";

  const childBirthDate = "2022-06-12";

  return (
    <div>
      <ul className="flex text-center">
        {graphTypes.map((item, key) => (
          <li
            key={key}
            onClick={() => setItem(key)}
            className={`${
              showItem === key ? "bg-red-400" : ""
            } w-full py-5 cursor-pointer`}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div>
        {/* <BabyChart
          dataSet={selectedDataset}
          name={graphTypes[showItem]}
          childOwnDataSet={correspondingBabyDataSet}
        /> */}
      </div>
    </div>
  );
};
export default Tab;
