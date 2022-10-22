import { useTranslation } from "react-i18next";
import DataTable from "./DataTable";
import NewRecord from "./NewRecord";
import { useState, useEffect } from "react";
import { BabyRecordDataStructure } from "../BabyReport";
import { useAppSelector } from "../../../../../hooks/useSelector";

const DataManipulation = () => {
  const { i18n } = useTranslation();
  const formState = useAppSelector((state) => state.babyReport.babyDataSet);
  const childDataSet = useAppSelector((state) => state.babyReport.babyDataSet);
  return (
    <div className="flex flex-col sm:flex-row mt-3 items-start">
      <NewRecord />
      <DataTable
        // onEdit={handleStartEdit}
        // onDelete={handleDeleteRecord}
        content={childDataSet.map((item) => ({
          ...item,
          date:
            i18n.language === "fa"
              ? Intl.DateTimeFormat("fa-IR").format(Date.parse(item.date))
              : item.date,
        }))}
      />
    </div>
  );
};

export default DataManipulation;
