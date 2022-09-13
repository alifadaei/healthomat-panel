import { useEffect, useState } from "react";
import man from "../../assets/img/man-profile.jpg";
import { useAppSelector } from "../../hooks/useSelector";
import { profile_content } from "../../utils/profile-dropdown";
import Dropdown from "../UI/Dropdown/Dropdown";
import Icon from "../UI/Icon/Icon";
const Profile = () => {
  const userName = useAppSelector((state) => state.auth.name);

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
    <div className="flex flex-col items-center sm:ms-5 md:ms-8">
      <img
        src={man}
        alt="man"
        className="w-14 sm:w-10 rounded-full border border-primary-100 cursor-pointer"
        onClick={handleToggleDropdown}
      />
      <div className="relative text-xs">
        <Dropdown positionRem={-3} show={showDropdown}>
          <div className="text-center">
            <div className="my-2">{userName}</div>
            <hr />
            <div className="w-[6rem]">
              {profile_content.map((item, i) => (
                <div
                  key={i}
                  className="py-2 flex p-2 items-center hover:bg-gray-100"
                >
                  <Icon className="me-2 text-sm" icon={item.icon} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Profile;
