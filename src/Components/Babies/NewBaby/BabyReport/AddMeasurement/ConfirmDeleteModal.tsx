import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import Button from "../../../../UI/Button/Button";
import { cancelAction, deleteBabyData } from "../babyReportSlice";

interface ConfirmDeleteModalProps {}

const ConfirmDeleteModal = () => {
  const { t } = useTranslation("babies");
  const dispatch = useDispatch();
  return (
    <div className="p-5 flex flex-col items-center">
      <p className="mt-2"> {t("confirm_delete.msg")}</p>
      <div>
        <Button
          onClick={() => dispatch(deleteBabyData())}
          className="px-3 py-2"
        >
          {t("confirm_delete.yes")}
        </Button>
        <Button
          onClick={() => dispatch(cancelAction())}
          neutral
          className="px-3 py-2"
        >
          {t("confirm_delete.no")}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
