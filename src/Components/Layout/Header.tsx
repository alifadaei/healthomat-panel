import Wrapper from "../UI/Wrapper/Wrapper";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import { useAppSelector } from "../../hooks/useSelector";
import Profile from "./Profile";

const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  return (
    <header className="z-10 fixed top-0 w-full bg-white border-b border-b-gray-100">
      <Wrapper className="mx-auto px-6 py-1 flex justify-between items-center flex-row-reverse">
        <Link
          to={"/"}
          className="flex flex-row-reverse justify-center items-center text-primary "
        >
          <img src={Logo} className="w-12 sm:w-13 ms-1" />
          <h1 className="font-cookie text-[2.5rem] ">Healthomat</h1>
        </Link>

        {!isAuth ? <Button className="p-2 px-5">ورود</Button> : <Profile />}
      </Wrapper>
    </header>
  );
};
export default Header;
