import Icon, { IconList } from "../../UI/Icon/Icon";

interface SidebarContentTitleProps {
  icon: IconList;
  text: string;
  accrodion?: boolean;
}

const SidebarContentTitle = ({
  icon,
  text,
  accrodion,
}: SidebarContentTitleProps) => {
  return (
    <div
      className={`text-gray-600 flex items-center py-[.9rem] ps-1 sm:ps-5  cursor-pointer ${
        !accrodion ? "hover:bg-gray-100" : ""
      } `}
    >
      <Icon icon={icon} className="text-2xl" />
      <span className="ms-2 sm:ms-4 text-sm">{text}</span>
    </div>
  );
};

export default SidebarContentTitle;
