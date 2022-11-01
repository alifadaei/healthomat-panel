import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import babyBoy from "../../assets/img/baby/boy-baby.jpg";
import babyGirl from "../../assets/img/baby/girl-baby.png";
import Heading from "../UI/Heading/Heading";
import { RouteNames } from "../../utils/Routes";
import { useState, useEffect } from "react";
import useHTTP from "../../hooks/useHTTP";
import { API_ROUTES } from "../../utils/API_Routes";
import Loading from "../UI/Loading/Loading";
import Preloader from "../UI/Preloader/Preloader";

const MyBabies = () => {
  const { t } = useTranslation("babies");
  const { errors, loading, send, setError } = useHTTP();
  const [babies, setBabies] = useState<BabyData[] | "Loading">("Loading");
  // const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    send(
      API_ROUTES.PatientChild.GetChildsByPateintId + "?id=23",
      "GET",
      null
    ).then((res: responseType) => {
      if (res.data) {
        //data exists
        setBabies(res.data);
      } else {
        //no baby found
      }
    });
  }, []);
  if (babies !== "Loading")
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
        {/* babies */}
        <div className="mt-2">
          <div className="grid grid-cols-1 2xs:grid-cols-2  sm:grid-cols-3 md:grid-cols-5 gap-4 mt-5">
            {babies!.length === 0 ? (
              <p>{t("no_baby")}</p>
            ) : (
              babies!.map((item, key) => (
                <Link
                  key={key}
                  to={RouteNames.my_babies.baby.replace(
                    ":id",
                    item.id.toString()
                  )}
                >
                  <div className="rounded-2xl overflow-hidden border cursor-pointer hover:shadow-md transition text-center">
                    <img
                      src={item.gender === 1 ? babyBoy : babyGirl}
                      alt="baby-boy"
                    />
                    <Button neutral className="font-medium px-3 py-1">
                      <span>{item.name}</span>
                    </Button>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    );
  else {
    return <Preloader isOpen={true} />;
  }
};

export default MyBabies;

type responseType = {
  data: BabyData[];
};

type BabyData = {
  name: string;
  gender: number;
  birthDay: string;
  id: number;
};
