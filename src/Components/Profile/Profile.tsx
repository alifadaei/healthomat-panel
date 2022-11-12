import { useTranslation } from "react-i18next";
import Heading from "../UI/Heading/Heading";
import man from "../../assets/img/man-profile.jpg";
import Icon, { IconList } from "../UI/Icon/Icon";
import { ManProfile } from "../../utils/Profile/Profile";
import { useAppSelector } from "../../hooks/useSelector";
import Modal from "../UI/Modal/Modal";
import useModal from "../../hooks/useModal";
import Uploader from "./Uploader";

const Profile = () => {
  const { t } = useTranslation("profile");
  const { email, firstName, lastName, username, avatar } = useAppSelector(
    (state) => state.auth
  );

  const {
    handleCloseModal,
    handleOpenModal: handleOpenUploadModal,
    modalOpen,
  } = useModal();
  const manProfile = { name: firstName + " " + lastName, email, username };
  return (
    <>
      <Heading str={t("profile")} />
      <div className=" border rounded-2xl p-3 sm:p-5 mt-2 xs:max-w-[40rem] text-gray-600 xs:my-5 text-center">
        <div className="relative inline-block">
          <Modal isOpen={modalOpen} onBackdropClick={handleCloseModal}>
            <Uploader finish={handleCloseModal} />
          </Modal>
          <Icon
            onClick={handleOpenUploadModal}
            icon={IconList.Upload}
            className="absolute bottom-2 text-gray-600 transition-all hover:text-primary right-2 hover:shadow-md rounded-full p-2 cursor-pointer text-2xl bg-white border"
          />
          <img
            className="rounded-full object-cover w-[8rem] h-[8rem] xs:w-[11rem] xs:h-[11rem] shadow-sm border mx-auto"
            src={avatar || man}
            alt="baby"
          />
        </div>
        <div className="mt-3 border px-2 py-2 rounded-2xl text-xs flex-col justify-center flex">
          {ManProfile.map((item, key) => (
            <div
              key={key}
              className=" flex flex-col xs:flex-row items-center rounded-lg justify-between odd:bg-gray-100 px-2 sm:px-4 py-3 "
            >
              <div className="rounded-lg font-bold flex mb-2 items-center">
                <Icon className="me-1" icon={item.icon} />
                <span>{t("man_profile." + item.name)}</span>
              </div>
              <div className="">
                {manProfile![item.name as keyof typeof manProfile]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Profile;
