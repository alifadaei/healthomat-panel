import Wrapper from "../UI/Wrapper/Wrapper";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import { useAppSelector } from "../../hooks/useSelector";
import { openDrawerSidebar } from "./sidebarSlice";
import { useDispatch } from "react-redux";
import Icon, { IconList } from "../UI/Icon/Icon";
import LanguageSelect from "./Language";

const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  const isMobile = !useAppSelector(
    (state) => state.sidebar.physicalSidebarOpen
  );
  const dispatch = useDispatch();
  return (
    <header className="z-10 fixed top-0 w-full bg-white border-b border-b-gray-100">
      <Wrapper className="mx-auto px-6 py-1 flex justify-between items-center flex-row">
        <Link
          to={"/"}
          className="flex flex-row gap-x-2 justify-center items-center text-primary "
        >
          <img src={Logo} className=" w-7 sm:w-10" />
          <h1 className="font-cookie text-[1.8rem] sm:text-[2.5rem] ">
            Healthomat
          </h1>
        </Link>

        <div className="flex items-center">
          <LanguageSelect />
          {!isAuth ? (
            <Button className="p-2 px-5">ورود</Button>
          ) : (
            <Button
              className="px-4 py-2 ms-3 text-lg cursor-pointer"
              onClick={() => dispatch(openDrawerSidebar())}
            >
              <Icon icon={IconList.Hamburger} />
            </Button>
          )}
        </div>
      </Wrapper>
    </header>
  );
};
export default Header;
