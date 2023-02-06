import { useTranslation } from "react-i18next";
import Heading from "../UI/Heading/Heading";
import { useState, useEffect } from "react";
import babyGirl from "../../assets/img/baby/girl-baby.png";
import babyBoy from "../../assets/img/baby/boy-baby.jpg";
import Icon, { IconList } from "../UI/Icon/Icon";
import { BabyProfile } from "./_BabyProfile";
import Button from "../UI/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../utils/Routes";
import Modal from "../UI/Modal/Modal";
import { API_ROUTES } from "../../utils/API_Routes";
import Preloader from "../UI/Preloader/Preloader";
import useModal from "../../hooks/useModal";
import BabyAvatarUploader from "./NewBaby/BabyAvatarUploader";
import useAPI from "../../hooks/useAPI";
const Baby = () => {
  const { t } = useTranslation("babies");
  const { loading, client, setLoading } = useAPI();
  const navigate = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [babyData, setBabyData] = useState<BabyType | "Loading">("Loading");
  const [ID, setID] = useState<string | null>(null);
  const {
    handleCloseModal: handleCloseUploadModal,
    handleOpenModal: handleOpenUploadmodal,
    modalOpen: UploadModalOpen,
  } = useModal();
  useEffect(() => {
    setLoading(true);
    const URL = window.location.href;
    const id = URL.substring(URL.lastIndexOf("/") + 1);
    setID(id);
    client
      .get(API_ROUTES.PatientChild.GetChildsByID + "?id=" + id)
      .then((res) => {
        const data = res.data as ResponseType;
        setBabyData(data.data);
      })
      .catch(() => alert("something went wrong!"))
      .then(() => setLoading(false));
  }, []);
  if (babyData !== "Loading")
    return (
      <>
        <Modal
          middle
          isOpen={deleteModalOpen}
          onBackdropClick={() => setDeleteModalOpen(false)}
        >
          <div className="p-5 flex flex-col items-center">
            <p className="mt-2"> {t("confirm_delete.msg")}</p>
            <div className="flex w-full">
              <Button
                loading={loading}
                onClick={() => {
                  client
                    .post(API_ROUTES.PatientChild.Delete + "?id=" + ID)
                    .then(() => {
                      navigate(RouteNames.my_babies.root);
                    })
                    .catch(() => {
                      alert("something went wrong!");
                    });
                }}
                className="w-full px-3 py-2"
              >
                {t("confirm_delete.yes")}
              </Button>
              <Button
                onClick={() => {
                  setDeleteModalOpen(false);
                }}
                neutral
                className="w-full text-center px-3 py-2"
              >
                {t("confirm_delete.no")}
              </Button>
            </div>
          </div>
        </Modal>
        <Heading str={t("baby_profile.profile")} />
        <div className="  border rounded-2xl p-3 sm:p-5 mt-2 xs:max-w-[40rem] text-gray-600 xs:my-5 text-center">
          {/* baby image */}
          <div className="relative inline-block">
            <Modal
              isOpen={UploadModalOpen}
              onBackdropClick={handleCloseUploadModal}
            >
              <BabyAvatarUploader
                onBabyAvatarChange={(avatar: string) => {
                  setBabyData({ ...babyData, avatar });
                }}
                name={babyData.name}
                babyID={ID}
                finish={handleCloseUploadModal}
              />
            </Modal>
            <Icon
              onClick={handleOpenUploadmodal}
              icon={IconList.Upload}
              className="absolute bottom-2 text-gray-600 transition-all hover:text-primary right-2 hover:shadow-md rounded-full p-2 cursor-pointer text-2xl bg-white border"
            />
            <img
              className="rounded-full object-cover w-[8rem] h-[8rem] xs:w-[11rem] xs:h-[11rem] shadow-sm border mx-auto"
              src={
                babyData.avatar || babyData.gender === 1 ? babyBoy : babyGirl
              }
              alt="baby"
            />
          </div>
          <div className="mt-3 border px-2 pt-2 rounded-2xl text-xs flex-col justify-center flex">
            {BabyProfile.map((item, key) => (
              <div
                key={key}
                className=" flex  items-center rounded-lg justify-between odd:bg-gray-100 px-4 py-3 "
              >
                <div className="rounded-lg font-bold flex items-center">
                  <Icon className="me-1" icon={item.icon} />
                  <span>{t("baby_data." + item.name)}</span>
                </div>
                <div className="">
                  {babyData![item.name as keyof typeof babyData]
                    ? babyData![item.name as keyof typeof babyData] +
                      " " +
                      t("baby_data." + item.suffix)
                    : t("baby_data.no_data")}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex sm:items-center flex-col gap-2  sm:flex-row text-xs">
            <Button
              onClick={() => setDeleteModalOpen(true)}
              neutral
              className="flex items-center justify-center p-2 m-0"
            >
              {t("baby_profile.delete")}
            </Button>
            <Button className="flex items-center justify-center p-2 m-0">
              <Link to={RouteNames.my_babies.edit.replace(":id", ID!)}>
                {t("baby_profile.edit")}
              </Link>
            </Button>
            <Button className="flex items-center justify-center p-2 m-0">
              <Link
                to={RouteNames.my_babies.baby_report.replace(":id", ID || "")}
              >
                {t("baby_profile.plot")}
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  else return <Preloader isOpen={true} />;
};
export default Baby;

type BabyType = {
  name: string;
  avatar: null | string;
  age: number;
  height: string;
  weight: string;
  gender: number;
};

type ResponseType = { data: BabyType; succeeded: boolean };
