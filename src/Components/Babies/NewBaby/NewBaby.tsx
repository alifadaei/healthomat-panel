import { useTranslation } from "react-i18next";
import Heading from "../../UI/Heading/Heading";
import cloudy from "../../../assets/img/baby/cloudy.svg";
import { useState, useEffect } from "react";
import Icon, { IconList } from "../../UI/Icon/Icon";
import Step from "./Step";
import { NewBabyQuestions } from "../../../utils/Babies/Babies";
import Button from "../../UI/Button/Button";
import IconChoices from "./Forms/IconChoices";
import TextInput from "./Forms/TextInput";
import DateInput from "./Forms/DateInput";
import useHTTP from "../../../hooks/useHTTP";
import { API_ROUTES } from "../../../utils/API_Routes";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../utils/Routes";
import Preloader from "../../UI/Preloader/Preloader";
import { useAppSelector } from "../../../hooks/useSelector";
import { useDispatch } from "react-redux";
import { editOn, goNextStep, goPrevStep, presetEditData } from "./newBabySlice";
import { FieldState } from "../../../hooks/useValidation";

export type Qtype = "Number" | "Text" | "RadioIcons" | "MultipleIcons" | "Date";

const NewBaby = ({ edit }: { edit?: boolean }) => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(false);
  const { t } = useTranslation("babies");
  const answers = useAppSelector((state) => state.newBaby.answers);
  const patientID = useAppSelector((state) => state.auth.id);
  const [childID, setChildID] = useState("");
  useEffect(() => {
    if (edit) {
      setPageLoading(true);
      const URL = window.location.href;
      const childId = URL.substring(URL.lastIndexOf("/") + 1);
      setChildID(childId);
      send(API_ROUTES.PatientChild.GetById + "?id=" + childId, "GET").then(
        (res: resType) => {
          setPageLoading(false);
          if (res.succeeded) {
            const data = res.data.patientChild;
            const editData = [
              data.gender,
              data.name,
              data.birthDay,
              data.weighAfterBorn,
              data.feed,
              data.suplement,
              data.suplementWhen,
              data.cutOfMilk,
              data.birthInterval,
              data.familyDimention,
              data.motherEducation,
              data.motherCareer,
              data.fatherEducation,
              data.specialDie,
              data.motherHeight,
              data.fatherHeight,
            ].map(
              (item) =>
                ({ value: item, state: item ? "OK" : "NOT_VALIDATED" } as {
                  value: string;
                  state: FieldState;
                })
            );
            dispatch(presetEditData(editData));
            dispatch(editOn());
          } else {
            window.location.replace("/");
          }
        }
      );
    }
  }, []);
  const step = useAppSelector((state) => state.newBaby.step);
  const { loading, send } = useHTTP();
  const formType = useAppSelector((state) => state.newBaby.type);
  const sendData = () => {
    if (answers.every((item) => item.state === "OK")) {
      send(
        formType === "New"
          ? API_ROUTES.PatientChild.Add
          : API_ROUTES.PatientChild.Edit,
        formType === "New" ? "POST" : "PUT",
        {
          id: Number(childID),
          patientId: Number(patientID),
          gender: Number(answers[0].value),
          name: answers[1].value,
          birthDay: answers[2].value,
          weighAfterBorn: Number(answers[3].value),
          feed: Number(answers[4].value),
          suplement: answers[5].value,
          suplementWhen: Number(answers[6].value),
          cutOfMilk: Number(answers[7].value),
          birthInterval: Number(answers[8].value),
          familyDimention: Number(answers[9].value),
          motherEducation: answers[10].value,
          motherCareer: answers[11].value,
          fatherEducation: answers[12].value,
          specialDie: answers[13].value,
          fatherHeight: Number(answers[14].value),
          motherHeight: Number(answers[15].value),
        }
      ).then((res) => {
        if (res.succeeded) {
          // console.log(res);
          navigate(RouteNames.my_babies.baby.replace(":id", res.data.id));
        } else {
          alert("A problem occured!");
        }
      });
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="">
      <Heading str={!edit ? t("new_baby") : t("edit_baby")} />
      <Preloader isOpen={pageLoading} />
      {/* ====== cloudy container ====== */}
      <div
        style={{
          backgroundImage: `url(${cloudy})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className="h-[16rem] xs:h-[22rem] sm:h-[24rem] w-full flex flex-col justify-center items-center text-center relative text-gray-700 text-sm xs:text-base"
      >
        {/* ========== left right icons =========== */}
        <div className="text-primary">
          <Icon
            onClick={() =>
              document.body.dir === "rtl"
                ? dispatch(goNextStep())
                : dispatch(goPrevStep())
            }
            icon={IconList.ChevronLeft}
            className="absolute left-0 2xs:left-3 md:left-20 top-[50%] text-2xl cursor-pointer"
          />
          <Icon
            onClick={() =>
              document.body.dir === "rtl"
                ? dispatch(goPrevStep())
                : dispatch(goNextStep())
            }
            icon={IconList.ChevronRight}
            className="absolute right-0 2xs:right-3 md:right-20 top-[50%] text-2xl cursor-pointer"
          />
        </div>

        {/* ======= input fields ======== */}
        {NewBabyQuestions.map((item, key) => (
          <div key={key} className={`${key === step ? "" : "hidden"}`}>
            <span className="inline-block bg-[rgba(255,255,255,0.7)] text-start p-3 rounded-t-2xl border-b-2 border-primary-500 shadow-md">
              {t(item.question, { name: answers[1].value })}
            </span>
            {item.type === "RadioIcons" || item.type === "MultipleIcons" ? (
              <IconChoices active={key} type={item.type} icons={item.icons!} />
            ) : item.type === "Number" || item.type === "Text" ? (
              <TextInput active={key} label={item.label!} type={item.type} />
            ) : item.type === "Date" ? (
              <DateInput active={key} label={item.label!} />
            ) : null}
          </div>
        ))}
        <Button
          neutral
          className="mt-1 px-4 py-2 mb-5 xs:mb-4 sm:mb-3 "
          onClick={
            step < NewBabyQuestions.length - 1
              ? () => dispatch(goNextStep())
              : sendData
          }
          loading={loading}
        >
          {step === NewBabyQuestions.length - 1 ? t("finish") : t("next")}
        </Button>
      </div>
      {/* ========= step ======== */}
      <Step />
    </div>
  );
};
export default NewBaby;

type resType = {
  data: {
    patientChild: {
      name: string;
      gender: number;
      birthDay: string;
      feed: number;
      suplement: string;
      weighAfterBorn: number;
      suplementWhen: number;
      cutOfMilk: number;
      birthInterval: number;
      familyDimention: number;
      motherEducation: string;
      fatherEducation: string;
      motherCareer: string;
      specialDie: string;
      fatherHeight: number;
      motherHeight: number;
      // avatar: string;
    };
  };
  succeeded: true;
};
