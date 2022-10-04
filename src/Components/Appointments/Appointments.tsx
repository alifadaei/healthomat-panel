import { useTranslation } from "react-i18next";
import Heading from "../UI/Heading/Heading";

const Appointments = () => {
  const { t } = useTranslation("appointments");
  return <Heading str={t("appointments")} />;
};

export default Appointments;
