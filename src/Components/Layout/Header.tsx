import Wrapper from "../UI/Wrapper/Wrapper";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import { useAppSelector } from "../../hooks/useSelector";
import { openDrawerSidebar } from "./sidebarSlice";
import { useDispatch } from "react-redux";
import Icon, { IconList } from "../UI/Icon/Icon";
import LanguageSelect from "./Language";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const lng = i18n.language;
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <header className="z-10 fixed top-0 w-full bg-white border-b border-b-gray-100">
      <Wrapper className="mx-auto px-3 sm:px-6 py-1 flex justify-between items-center">
        {!isAuth ? (
          <Button className="p-2 px-5 me-2">{t("header.enter")}</Button>
        ) : (
          <Button
            className="px-4 py-2 text-lg cursor-pointer"
            onClick={() => dispatch(openDrawerSidebar())}
          >
            <Icon icon={IconList.Hamburger} />
          </Button>
        )}
        <Link
          to={"/"}
          className="flex flex-row gap-x-2 justify-center items-center text-primary "
        >
          <img src={Logo} className=" w-7 sm:w-10" alt="logo" />
          <h1
            className={`sm:ps-2 ${
              lng === "fa"
                ? "font-dana font-bold text-[.9rem] xs:text-[1.3rem] "
                : "font-cookie text-[1.6rem] sm:text-[2rem] font-medium"
            } `}
          >
            {t("header.name")}
          </h1>
        </Link>
        <LanguageSelect />
      </Wrapper>
    </header>
  );
};
export default Header;
