import { useEffect, useState } from "react";
import man from "../../assets/img/man-profile.jpg";
import { profile_content } from "../../utils/profile-dropdown";
import Dropdown from "../UI/Dropdown/Dropdown";
import Icon from "../UI/Icon/Icon";
const Profile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      setShowDropdown(false);
    });
  }, []);
  const handleToggleDropdown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setShowDropdown((state) => !state);
  };
  return (
    <div className="flex flex-col items-center ms-10">
      <img
        src={man}
        alt="man"
        className="w-10 rounded-full"
        onClick={handleToggleDropdown}
      />
      <div className="relative">
        <Dropdown positionRem={-3} show={showDropdown}>
          <div className="w-[6rem] text-sm">
            {profile_content.map((item, i) => (
              <div
                key={i}
                className="py-2 flex p-2 items-center hover:bg-gray-100"
              >
                <Icon className="me-2" icon={item.icon} />
                {item.name}
              </div>
            ))}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Profile;
