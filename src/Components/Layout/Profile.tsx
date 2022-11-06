import man from "../../assets/img/man-profile.jpg";
import { useAppSelector } from "../../hooks/useSelector";

const Profile = () => {
  const { firstName, lastName } = useAppSelector((state) => state.auth);
  const avatar = useAppSelector((state) => state.auth.avatar);

  return (
    <div className="flex flex-col items-center py-3">
      <img
        src={avatar || man}
        alt="man"
        className="w-14 h-14 object-cover rounded-full border border-primary-100 cursor-pointer"
      />
      <div className="relative text-xs">
        <div className="text-center">
          <div className="my-2 font-bold">{firstName + " " + lastName}</div>
          <div className="w-[6rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
