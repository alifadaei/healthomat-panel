import Heading from "../../../UI/Heading/Heading";

import DataManipulation from "./AddMeasurement/DataManipulation";
import BabyProfile from "./BabyProfile/BabyProfile";
import AddMeasurment from "./AddMeasurement/AddMeasurment";
import Tabs from "./Charts/Tabs";
import { useTranslation } from "react-i18next";

export type BabyRecordDataStructure = {
  id: string;
  date: string;
  weight: number;
  length: number;
  headCircumference: number;
};

const BabyReport = () => {
  const { t } = useTranslation("babies");
  return (
    <>
      <Heading str={t("report.heading")} />
      <div className="flex">
        <div className="w-full">
          {/* <Tabs /> */}

          <DataManipulation />
        </div>
        <div className="w-[15rem] bg-blue-300">
          <BabyProfile />
          <AddMeasurment />
        </div>
      </div>
    </>
  );
};
export default BabyReport;
