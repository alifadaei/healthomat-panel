import { bottom_icons, sidebarContentPatient } from "../utils/sidebar-content";
import Icon, { IconList } from "./UI/Icon/Icon";
const SidebarContent = () => {
  return (
    <div className=" text-gray-800 text-sm">
      {sidebarContentPatient.map((item) => (
        <div className="flex items-center py-4 px-5 hover:bg-gray-100 cursor-pointer">
          <Icon icon={item.icon} className="text-lg" />
          <span className="ms-2">{item.name}</span>
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
