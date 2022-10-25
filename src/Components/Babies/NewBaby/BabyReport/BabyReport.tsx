import { useTranslation } from "react-i18next";
import Heading from "../../../UI/Heading/Heading";
import { useState, useMemo } from "react";
import jsonDataSet from "../../../../utils/Babies/GrowthDataSet.json";
import BabyChart, { DataSetType } from "./BabyChart";
import { Interval } from "luxon";
import _ from "lodash";
import Button from "../../../UI/Button/Button";
import DataManipulation from "./DataManipulation/DataManipulation";
import { useAppSelector } from "../../../../hooks/useSelector";
import { useDispatch } from "react-redux";
import { startNew } from "./babyReportSlice";

export type BabyRecordDataStructure = {
  id: string;
  date: string;
  weight: number;
  length: number;
  headCircumference: number;
};

const BabyReport = () => {
  const wholeDataSet = useMemo(() => Object(jsonDataSet), []);
  const { t } = useTranslation("babies");
  const graphTypes = useMemo(
    () => [
      {
        name: "Head-circumference-for-age",
        x: "Age (months)",
        y: "Head circumference (cm)",
      },
      { name: "Length-for-age", x: "Age (months)", y: "Length (cm)" },
      { name: "Weight-for-age", x: "Age (months)", y: "Weight (kg)" },
      { name: "Weight-for-length", x: "Length (cm)", y: "Weight (kg)" },
    ],
    []
  );
  const [showItem, setItem] = useState(0);

  const childOwnDataSet = useAppSelector(
    (state) => state.babyReport.babyDataSet
  );

  const childGender = "boys";
  const selectedDataSet = useMemo(
    () => wholeDataSet[childGender][graphTypes[showItem].name] as DataSetType,
    [showItem]
  );
  const childBirthDate = "2022-06-12";
  const correspondingBabyDataSet = useMemo(
    () =>
      showItem === 3
        ? childOwnDataSet.map((item) => [
            Math.round(item.length),
            Number((item.weight / 1000).toFixed(3)),
          ])
        : showItem === 2
        ? childOwnDataSet.map((item) => [
            Interval.fromISO(childBirthDate + "/" + item.date).count("months"),
            Number((item.weight / 1000).toFixed(3)),
          ])
        : showItem === 1
        ? childOwnDataSet.map((item) => [
            Interval.fromISO(childBirthDate + "/" + item.date).count("months"),

            Math.round(item.length),
          ])
        : childOwnDataSet.map((item) => [
            Interval.fromISO(childBirthDate + "/" + item.date).count("months"),
            item.headCircumference,
          ]),
    [showItem, childOwnDataSet]
  );
  const dispatch = useDispatch();
  return (
    <>
      <Heading str={t("report.heading")} />
      <div className="flex items-center justify-start my-2 text-sm">
        <Button className="px-3 py-2 me-5" onClick={() => dispatch(startNew())}>
          {t("new_record.new_record")}
        </Button>
        <select className="block ltr text-sm rounded-md p-2 bg-gray-100">
          {graphTypes.map((item, key) => (
            <option key={key} onClick={() => setItem(key)}>
              {item.name.replaceAll("-", " ")}
            </option>
          ))}
        </select>
      </div>
      <BabyChart
        dataSet={selectedDataSet}
        name={graphTypes[showItem]}
        childOwnDataSet={correspondingBabyDataSet}
      />
      <DataManipulation />
    </>
  );
};
export default BabyReport;
