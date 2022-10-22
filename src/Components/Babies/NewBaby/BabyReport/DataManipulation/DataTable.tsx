import { useTranslation } from "react-i18next";
import Button from "../../../../UI/Button/Button";
import { BabyRecordDataStructure } from "../BabyReport";

type DataTableProps = {
  content: BabyRecordDataStructure[];
  // onDelete: (key: string) => void;
  // onEdit: (key: string) => void;
};
const DataTable = ({ content }: DataTableProps) => {
  // const content = [
  //   [1, 2.4, 24, 20],
  //   [2, 3.63, 24, 20],
  //   [3, 2, 24, 20],
  //   [4, 2.4, 24, 20],
  // ];
  const { t } = useTranslation("babies");
  return (
    <div
      role="table"
      className="mx-auto text-sm text-center font-normal border rounded-2xl"
    >
      <div className="bg-[#1c6684] text-white flex rounded-t-2xl ">
        <div className=" font-dana w-20 h-10 flex justify-center items-center">
          {t("table.number")}
        </div>
        <div className=" font-dana w-20 h-10 flex justify-center items-center">
          {t("table.date")}
        </div>
        <div className=" font-dana w-20 h-10 flex justify-center items-center">
          {t("table.weight")}
        </div>
        <div className=" font-dana w-20 h-10 flex justify-center items-center">
          {t("table.length")}
        </div>
        <div className=" font-dana w-20 h-10 flex justify-center items-center">
          {t("table.head")}
        </div>
        <div className=" font-dana w-44 h-10 flex justify-center items-center">
          {t("table.functions")}
        </div>
      </div>
      {content.map((item, key) => (
        <div key={key} className=" odd:bg-primary-100 flex last:rounded-b-2xl">
          <div className="w-20 h-10 flex justify-center items-center">
            {key + 1}
          </div>
          <div className="w-20 h-10 flex justify-center items-center">
            {item.date}
          </div>
          <div className="w-20 h-10 flex justify-center items-center">
            {item.weight.toFixed(3)}
          </div>
          <div className="w-20 h-10 flex justify-center items-center">
            {item.length.toFixed(1)}
          </div>
          <div className="w-20 h-10 flex justify-center items-center">
            {item.headCircumference.toFixed(1)}
          </div>
          <div className="w-44 h-10 flex justify-center items-center">
            <Button
              className="px-3 py-1 ms-4"
              // onClick={onEdit.bind(null, item.id)}
            >
              {t("table.edit")}
            </Button>
            <Button
              neutral
              className="px-3 py-1 me-4"
              // onClick={onDelete.bind(null, item.id)}
            >
              {t("table.delete")}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DataTable;
