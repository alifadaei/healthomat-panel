import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../../../hooks/useSelector";
import babyGirl from "../../../../assets/img/baby/girl-baby.png";
import babyBoy from "../../../../assets/img/baby/boy-baby.jpg";
import Icon from "../../../../UI/Icon/Icon";
import { BabyProfileItems } from "../BabyProfile/BabyProfileItems";

const BabyProfile = () => {
  const { t } = useTranslation("babies");
  const name = useAppSelector((state) => state.babyReport.name);
  const gender = useAppSelector((state) => state.babyReport.gender);
  const avatar = useAppSelector((state) => state.babyReport.avatar);
  const age = useAppSelector((state) => state.babyReport.age);
  const babyData = { name, gender, age };
  return (
    <div className="  border rounded-2xl p-3 w-[15rem] mt-2 xs:max-w-[40rem] text-gray-600 xs:my-5 text-center">
      {/* baby image */}
      <div className="relative inline-block">
        <img
          className="rounded-full object-cover w-[8rem] h-[8rem]  shadow-sm border mx-auto"
          src={avatar || gender === 1 ? babyBoy : babyGirl}
          alt="baby"
        />
      </div>
      <div className="mt-3 border px-2 py-2 rounded-2xl text-xs flex-col justify-center flex">
        {BabyProfileItems.map((item, key) => (
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
    </div>
  );
};
export default BabyProfile;
