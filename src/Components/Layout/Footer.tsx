import { useTranslation } from "react-i18next";
import Wrapper from "../UI/Wrapper/Wrapper";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="bg-white">
      <Wrapper className="mx-auto flex justify-center items-center font-poppins py-3">
        <p className="font-dana text-sm text-bold text-gray-500">
          {t("footer.right")}
        </p>
      </Wrapper>
    </footer>
  );
};

export default Footer;
