import { useTranslation } from "react-i18next";
import Heading from "../../../UI/Heading/Heading";
import React from "react";
import dataset from "../../../../utils/Babies/GrowthDataSet.json";
import BabyChart from "./BabyChart";

const BabyReport = () => {
  const { t } = useTranslation("babies");
  const graph_list = [
    "Boys-Length-for-age",
    "Boys-Head-Circumference-for-age",
    "Boys-Weight-for-age",
    "Boys-Weight-for-length",
    "Girls-Head-Circumference-for-age",
    "Girls-Length-for-age",
    "Girls-Weight-for-age",
    "Girls-Weight-for-length",
  ];
  return (
    <>
      <Heading str={t("report.heading")} />
      {graph_list.map((item) => (
        <BabyChart
          originalDS={Array.from(
            { length: dataset[item as keyof typeof dataset].length },
            () => Math.floor(Math.random() * item.length)
          )}
          name={item}
          dataSet={dataset[item as keyof typeof dataset]}
        />
      ))}
    </>
  );
};
export default BabyReport;
