import { useTranslation } from "react-i18next";
import Heading from "../UI/Heading/Heading";
import baby from "../../assets/img/baby/baby-profile.jpg";
import Icon, { IconList } from "../UI/Icon/Icon";
import { BabyProfile } from "./_BabyProfile";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { RouteNames, Routes } from "../../utils/Routes";
const Baby = () => {
  const { t } = useTranslation("babies");
  return (
    <>
      <Heading str={t("baby_profile")} />
      <div className=" border rounded-2xl p-5 mt-2 xs:max-w-[40rem] text-gray-600 xs:my-5">
        <img
          className="rounded-full w-[8rem] xs:w-[11rem] shadow-sm mx-auto"
          src={baby}
          alt="baby"
        />
        <div className="mt-3 border px-2 pt-2 rounded-2xl text-xs flex-col justify-center flex">
          {BabyProfile.map((item, key) => (
            <div
              key={key}
              className=" flex  items-center rounded-lg justify-between odd:bg-gray-100 px-4 py-3 "
            >
              <div className="rounded-lg font-bold flex items-center">
                <Icon className="me-1" icon={item.icon} />
                <span>{item.name}</span>
              </div>
              <div className="">{item.val}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-col gap-2  sm:flex-row text-xs">
          <Button
            neutral
            className=" border-red-400 hover:bg-none p-2 text-center m-0 justify-center flex items-center"
          >
            حذف کودک
          </Button>
          <Button className="flex items-center justify-center p-2 m-0 bg-slate-400">
            ویرایش کودک
          </Button>
          <Link to={RouteNames.my_babies.baby_report.replace(":id", "3")}>
            <Button className="flex items-center justify-center p-2 m-0">
              مشاهده نمودار رشد
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Baby;
