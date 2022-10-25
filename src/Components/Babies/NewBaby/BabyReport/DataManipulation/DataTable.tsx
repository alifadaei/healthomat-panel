import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Button from "../../../../UI/Button/Button";
import { BabyRecordDataStructure } from "../BabyReport";
import { editBabyData, startDelete, startEdit } from "../babyReportSlice";

type DataTableProps = {
  content: BabyRecordDataStructure[];
};
const DataTable = ({ content }: DataTableProps) => {
  // const content = [
  //   [1, 2.4, 24, 20],
  //   [2, 3.63, 24, 20],
  //   [3, 2, 24, 20],
  //   [4, 2.4, 24, 20],
  // ];
  const { t } = useTranslation("babies");
  const dispatch = useDispatch();
  return (
    <div className=" overflow-x-auto w-full my-3">
      <table
        role="table"
        className="mx-auto w-[35rem]  sm:my-0 block text-sm whitespace-nowrap text-center font-dana "
      >
        <thead className="bg-[#1c6684] text-white ">
          <tr>
            <th className="w-20 h-10">{t("table.number")}</th>
            <th className="w-20 h-10">{t("table.date")}</th>
            <th className="w-20 h-10">{t("table.weight")}</th>
            <th className="w-20 h-10">{t("table.length")}</th>
            <th className="w-20 h-10">{t("table.head")}</th>
            <th className="w-44 h-10">{t("table.functions")}</th>
          </tr>
        </thead>
        <tbody className=" ">
          {content.map((item, key) => (
            <tr key={key} className="odd:bg-primary-100 last:rounded-b-2xl">
              <td>{key + 1}</td>
              <td>{item.date}</td>
              <td>{(item.weight / 1000).toFixed(3)}</td>
              <td>{item.length.toFixed(1)}</td>
              <td>{item.headCircumference.toFixed(1)}</td>
              <td>
                <Button
                  className="px-3 py-1 ms-4"
                  onClick={() => dispatch(startEdit(item.id))}
                >
                  {t("table.edit")}
                </Button>
                <Button
                  neutral
                  className="px-3 py-1 me-4"
                  onClick={() => dispatch(startDelete(item.id))}
                >
                  {t("table.delete")}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
