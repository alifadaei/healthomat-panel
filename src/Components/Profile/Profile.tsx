import { useTranslation } from "react-i18next";
import Heading from "../UI/Heading/Heading";

const Profile = () => {
  const { t } = useTranslation("profile");
  return <Heading str={t("profile")} />;
};

export default Profile;
