import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/useSelector";
import {
  bottom_icons,
  sidebarContentPatient,
} from "../../../utils/sidebar-content";
import Profile from "../Profile";
import { closeDrawerSidebar } from "./sidebarSlice";
import Icon, { IconList } from "../../UI/Icon/Icon";
import { Link, useLocation } from "react-router-dom";
import Accordion from "../../UI/Accordion/Accordion";
import SidebarContentTitle from "./SidebarContentTitle";
const SidebarContent = () => {
  const physicalSidebarOpen = useAppSelector(
    (state) => state.sidebar.physicalSidebarOpen
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className=" text-gray-800 relative">
      <>
        {!physicalSidebarOpen && (
          <Icon
            icon={IconList.Close}
            className="absolute top-0 end-0 cursor-pointer text-lg p-3 -translate-x-3 -translate-y-3"
            onClick={() => dispatch(closeDrawerSidebar())}
          />
        )}
        <Profile />
        <hr />
        {sidebarContentPatient.map((item, key) =>
          item.menu ? (
            <Accordion
              defaultOpen={item.path === location.pathname}
              className="text-gray-600"
              key={key}
              titleName={
                <SidebarContentTitle
                  accrodion
                  icon={item.icon}
                  text={t(item.name)}
                />
              }
            >
              <div className="flex flex-col ">
                {item.menu.map((item, key) => (
                  <Link key={key} to={item.path || "/"}>
                    <div
                      className={`text-gray-600 hover:bg-slate-50 transition px-4 py-2 text-xs ps-9 ${
                        item.path === location.pathname
                          ? "border-s-4 border-primary-500"
                          : ""
                      }`}
                    >
                      {t(item.name)}
                    </div>
                  </Link>
                ))}
              </div>
            </Accordion>
          ) : (
            <Link key={key} to={item.path || "/"}>
              <SidebarContentTitle
                selected={item.path === location.pathname}
                icon={item.icon}
                text={t(item.name)}
              />
            </Link>
          )
        )}
        <hr />
        <div className="flex mx-auto justify-center gap-x-4 text-lg my-4">
          {bottom_icons.map((item, key) => (
            <Link to={item.path} key={key}>
              <Icon
                icon={item.icon}
                className=" hover:border-gray-100 border-2 border-white p-2 transition cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </>
    </div>
  );
};
export default SidebarContent;
