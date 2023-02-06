import { useTranslation } from "react-i18next";
import DataTable from "../Table/DataTable";
import NewRecord from "./NewRecord";
import { useAppSelector } from "../../../../../hooks/useSelector";
import Modal from "../../../../UI/Modal/Modal";
import { useDispatch } from "react-redux";
import { cancelAction } from "../babyReportSlice";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const DataManipulation = () => {
  const { i18n } = useTranslation();
  const childDataSet = useAppSelector((state) => state.babyReport.babyDataSet);
  const formState = useAppSelector((state) => state.babyReport.formState);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-3 sm:flex-row mt-3 items-start">
      <Modal
        isOpen={formState.state !== "None"}
        onBackdropClick={() => dispatch(cancelAction())}
      >
        {formState.state === "Edit" || formState.state === "New" ? (
          <NewRecord />
        ) : (
          <ConfirmDeleteModal />
        )}
      </Modal>
      <DataTable
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
