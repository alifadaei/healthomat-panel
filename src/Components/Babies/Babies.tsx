import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import BabyBoy from "../../assets/img/baby/baby-boy.png";
import BabyGirl from "../../assets/img/baby/baby-girl.png";
import Heading from "../UI/Heading/Heading";

const Babies = () => {
  const { t } = useTranslation("babies");
  return (
    <div>
      <div className="flex items-center">
        <Heading str={t("babies")} />
        <Button className="px-3 py-2 text-sm ms-4" neutral>
          {t("new_baby")}
        </Button>
      </div>
      <div className="mt-2">
        {/* <h2 className="font-medium text-lg text-gray-700">
          <span className="pb-1 border-b-2 border-primary-500">My Babies</span>
        </h2> */}
        <div className="grid grid-cols-1 2xs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-5">
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

export default Babies;
