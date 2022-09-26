import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useSelector";
import {
  bottom_icons,
  sidebarContentPatient,
} from "../../utils/sidebar-content";
import Profile from "./Profile";
import { closeDrawerSidebar } from "./sidebarSlice";
import Icon, { IconList } from "../UI/Icon/Icon";
import { Link } from "react-router-dom";
const SidebarContent = () => {
  const physicalSidebarOpen = useAppSelector(
    (state) => state.sidebar.physicalSidebarOpen
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className=" text-gray-800 relative">
      {!physicalSidebarOpen && (
        <Icon
          icon={IconList.Close}
          className="absolute top-0 end-0 cursor-pointer text-lg p-3 -translate-x-3 -translate-y-3"
          onClick={() => dispatch(closeDrawerSidebar())}
        />
      )}
      <Profile />
      <hr />
      {sidebarContentPatient.map((item, key) => (
        <Link key={key} to={item.path || "/"}>
          <div className="flex items-center py-[.9rem] ps-1 sm:ps-5  hover:bg-gray-100 cursor-pointer">
            <Icon icon={item.icon} className="text-2xl" />
            <span className="ms-2 sm:ms-4 text-sm">{t(item.name)}</span>
          </div>
        </Link>
      ))}
      <hr />
      <div className="flex mx-auto justify-center gap-x-4 text-lg my-4">
        {bottom_icons.map((item, key) => (
          <Link to={item.path} key={key}>
            <Icon
              icon={item.icon}
              className="hover:border-gray-100 border-2 border-white p-2 transition cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SidebarContent;
