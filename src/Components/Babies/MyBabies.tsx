import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import baby from "../../assets/img/baby/baby-profile.jpg";
import Heading from "../UI/Heading/Heading";
import { RouteNames } from "../../utils/Routes";
import { useAppSelector } from "../../hooks/useSelector";

const MyBabies = () => {
  const id = useAppSelector((state) => state.auth.id);
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
          <Link to={RouteNames.my_babies.baby.replace(":id", id)}>
            <div className="rounded-2xl overflow-hidden border cursor-pointer hover:shadow-md transition text-center">
              <img src={baby} alt="baby-boy" />
              <Button neutral className="font-medium px-3 py-1">
                <span>علی</span>
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyBabies;
