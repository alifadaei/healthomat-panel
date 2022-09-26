import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation("dashboard");
  return (
    <h1 className=" font-semibold text-gray-700 font-nunito text-2xl border-primary border-s-4 ps-2 ">
      {t("dashboard")}
    </h1>
  );
};

export default Dashboard;
