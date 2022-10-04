import { useTranslation } from "react-i18next";
import { Link, Routes } from "react-router-dom";
import Button from "../UI/Button/Button";
import BabyBoy from "../../assets/img/baby/baby-boy.png";
import BabyGirl from "../../assets/img/baby/baby-girl.png";
import Heading from "../UI/Heading/Heading";
import { RouteNames } from "../../utils/Routes";

const MyBabies = () => {
  const { t } = useTranslation("babies");
  return (
    <div>
      <div className="flex items-center">
        <Heading str={t("babies")} />
        <Link to={RouteNames.my_babies.new_baby}>
          <Button className="px-3 py-2 text-sm ms-4" neutral>
            {t("new_baby")}
          </Button>
        </Link>
      </div>
      <div className="mt-2">
        <div className="grid grid-cols-1 2xs:grid-cols-2  sm:grid-cols-3 md:grid-cols-5 gap-4 mt-5">
          <Link to="/">
            <div className="rounded border cursor-pointer hover:shadow-md transition text-center">
              <img src={BabyBoy} alt="baby-boy" />
              <Button neutral className="font-medium px-3 py-2">
                <span>Steve</span>
              </Button>
            </div>
          </Link>
          <Link to="/">
            <div className="overflow-hidden rounded border cursor-pointer hover:shadow-md transition text-center">
              <img src={BabyGirl} alt="baby-boy" />
              <Button
                neutral
                className="font-medium px-3 py-2 border-accent hover:bg-accent-100"
              >
                <span>Ariya</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyBabies;
