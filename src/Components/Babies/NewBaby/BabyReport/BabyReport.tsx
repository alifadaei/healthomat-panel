import { useTranslation } from "react-i18next";
import Heading from "../../../UI/Heading/Heading";
import { useState, useMemo } from "react";
import jsonDataSet from "../../../../utils/Babies/GrowthDataSet.json";
import BabyChart, { DataSetType } from "./BabyChart";
import NewRecord from "./NewRecord";
import { Interval } from "luxon";
import _ from "lodash";
import Modal from "../../../UI/Modal/Modal";
import useModal from "../../../../hooks/useModal";
import Button from "../../../UI/Button/Button";

const BabyReport = () => {
  const { handleCloseModal, handleOpenModal, modalOpen } = useModal();
  const wholeDataSet = useMemo(() => Object(jsonDataSet), []);
  const { t } = useTranslation("babies");
  const graphTypes = useMemo(
    () => [
      { name: "Head-circumference-for-age", x: "Age", y: "Head circumference" },
      { name: "Length-for-age", x: "Age", y: "Length" },
      { name: "Weight-for-age", x: "Age", y: "Weight" },
      { name: "Weight-for-length", x: "Length", y: "Weight" },
    ],
    []
  );
  const [showItem, setItem] = useState(0);
  const childGender = "boys";
  const selectedDataSet = useMemo(
    () => wholeDataSet[childGender][graphTypes[showItem].name] as DataSetType,
    [showItem]
  );
  const childBirthDate = "2022-06-12";
  const [childOwnDataSet, setChildOwnDataSet] = useState<
    {
      date: string;
      weight: number;
      length: number;
      headCircumference: number;
    }[]
  >([
    { date: "2022-10-02", weight: 3.2, length: 50, headCircumference: 41 },
    { date: "2022-11-02", weight: 3.5, length: 52, headCircumference: 42 },
    { date: "2022-12-13", weight: 5.2, length: 54, headCircumference: 43 },
  ]);
  const correspondingBabyDataSet = useMemo(
    () =>
      showItem === 3
        ? childOwnDataSet.map((item) => [Math.round(item.length), item.weight])
        : showItem === 2
        ? childOwnDataSet.map((item) => [
            Interval.fromISO(childBirthDate + "/" + item.date).count("months"),
            item.weight,
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
  const handleAddData = (
    weight: number,
    length: number,
    headCircumference: number,
    date: string
  ) => {
    handleCloseModal();
    const newList = [...childOwnDataSet];
    newList.push({
      date: date,
      weight: weight,
      length: length,
      headCircumference: headCircumference,
    });
    setChildOwnDataSet(newList);
  };
  return (
    <>
      <Modal isOpen={modalOpen} onBackdropClick={handleCloseModal}>
        <NewRecord onSubmit={handleAddData} />
      </Modal>
      <Heading str={t("report.heading")} />
      <div className="flex items-center justify-start my-2">
        <Button className="px-3 py-2" onClick={handleOpenModal}>
          {t("new_record.new_record")}
        </Button>
        <select className="block ltr text-sm rounded-md p-2 bg-gray-100">
          {graphTypes.map((item, key) => (
            <option onClick={() => setItem(key)}>
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
    </>
  );
};
export default BabyReport;
