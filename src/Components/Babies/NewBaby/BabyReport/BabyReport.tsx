import { useTranslation } from "react-i18next";
import Heading from "../../../UI/Heading/Heading";
import { useState } from "react";
import jsonDataSet from "../../../../utils/Babies/GrowthDataSet.json";
import BabyChart, { DataSetType } from "./BabyChart";
import NewRecord from "./NewRecord";
import { Interval } from "luxon";
import _ from "lodash";

const BabyReport = () => {
  const wholeDataSet = Object(jsonDataSet);
  const { t } = useTranslation("babies");
  const graphTypes = [
    { name: "Head-circumference-for-age", x: "Age", y: "Head circumference" },
    { name: "Length-for-age", x: "Age", y: "Length" },
    { name: "Weight-for-age", x: "Age", y: "Weight" },
    { name: "Weight-for-length", x: "Length", y: "Weight" },
  ];
  const [showItem, setItem] = useState(0);
  const childGender = "boys";
  const selectedDataSet = wholeDataSet[childGender][
    graphTypes[showItem].name
  ] as DataSetType;
  const childBirthDate = "2022-06-12";
  let sortedChildOwnDataSet: {
    date: string;
    weight: number;
    length: number;
    headCircumference: number;
  }[] = [
    { date: "2022-10-02", weight: 3.2, length: 21, headCircumference: 41 },
    { date: "2022-11-02", weight: 3.5, length: 23, headCircumference: 42 },
    { date: "2022-12-13", weight: 5.2, length: 28, headCircumference: 43 },
  ];
  const correspondingBabyDataSet =
    showItem === 3
      ? sortedChildOwnDataSet.map((item) => [
          item.weight,
          Math.round(item.length),
        ])
      : showItem === 2
      ? sortedChildOwnDataSet.map((item) => [
          Interval.fromISO(childBirthDate + "/" + item.date).count("months"),
          item.weight,
        ])
      : showItem === 1
      ? sortedChildOwnDataSet.map((item) => [
          Interval.fromISO(childBirthDate + "/" + item.date).count("months"),

          Math.round(item.length),
        ])
      : sortedChildOwnDataSet.map((item) => [
          Interval.fromISO(childBirthDate + "/" + item.date).count("months"),
          item.headCircumference,
        ]);
  return (
    <>
      <Heading str={t("report.heading")} />
      <select className="block mx-auto ltr my-5 text-sm rounded-md p-2 bg-gray-100">
        {graphTypes.map((item, key) => (
          <option onClick={() => setItem(key)}>
            {item.name.replaceAll("-", " ")}
          </option>
        ))}
      </select>
      <BabyChart
        dataSet={selectedDataSet}
        name={graphTypes[showItem]}
        childOwnDataSet={correspondingBabyDataSet}
      />
      <NewRecord />
    </>
  );
};
export default BabyReport;
