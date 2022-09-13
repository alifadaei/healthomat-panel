import { useEffect, useState } from "react";
import man from "../../assets/img/man-profile.jpg";
import { useAppSelector } from "../../hooks/useSelector";
import { profile_content } from "../../utils/profile-dropdown";
import Dropdown from "../UI/Dropdown/Dropdown";
import Icon from "../UI/Icon/Icon";
const Profile = () => {
  const userName = useAppSelector((state) => state.auth.name);

  return (
    <div className="flex flex-col items-center py-3">
      <img
        src={man}
        alt="man"
        className="w-14 rounded-full border border-primary-100 cursor-pointer"
      />
      <div className="relative text-xs">
        <div className="text-center">
          <div className="my-2 font-bold">{userName}</div>
          <div className="w-[6rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
