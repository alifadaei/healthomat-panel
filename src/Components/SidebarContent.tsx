import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/useSelector";
import { bottom_icons, sidebarContentPatient } from "../utils/sidebar-content";
import Profile from "./Layout/Profile";
import { closeModalSidebar } from "./Layout/sidebarSlice";
import Icon, { IconList } from "./UI/Icon/Icon";
const SidebarContent = () => {
  const physicalSidebarOpen = useAppSelector(
    (state) => state.sidebar.physicalSidebarOpen
  );
  const dispatch = useDispatch();
  return (
    <div className=" text-gray-800 relative">
      {!physicalSidebarOpen && (
        <Icon
          icon={IconList.Close}
          className="absolute top-0 end-2 cursor-pointer text-lg p-3"
          onClick={() => dispatch(closeModalSidebar())}
        />
      )}
      <Profile />
      <hr />
      {sidebarContentPatient.map((item) => (
        <div className="flex items-center py-[.9rem] ps-7  hover:bg-gray-100 cursor-pointer">
          <Icon icon={item.icon} className="text-2xl" />
          <span className="ms-4 text-sm">{item.name}</span>
        </div>
      ))}
      <hr />
      <div className="flex mx-auto justify-center gap-x-4 text-lg my-4">
        {bottom_icons.map((item, i) => (
          <Icon
            key={i}
            icon={item.icon}
            className="hover:border-gray-100 border-2 border-white p-2 transition cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};
export default SidebarContent;
