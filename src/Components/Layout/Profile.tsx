import man from "../../assets/img/man-profile.jpg";
import useAuthStore from "../Auth/useAuthStore";

const Profile = () => {
  const firstName = useAuthStore((state) => state.firstName);
  const lastName = useAuthStore((state) => state.lastName);
  const avatar = useAuthStore((state) => state.avatar);

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
