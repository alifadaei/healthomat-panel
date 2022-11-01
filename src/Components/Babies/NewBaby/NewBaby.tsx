import { useTranslation } from "react-i18next";
import Heading from "../../UI/Heading/Heading";
import cloudy from "../../../assets/img/baby/cloudy.svg";
import { useState, useEffect } from "react";
import Icon, { IconList } from "../../UI/Icon/Icon";
import Step, { StepType } from "./Step";
import { NewBabyQuestions as NBQ } from "../../../utils/Babies/Babies";
import Button from "../../UI/Button/Button";
import IconChoices from "./Forms/IconChoices";
import TextInput from "./Forms/TextInput";
import DateInput from "./Forms/DateInput";
import { FieldState } from "../../../hooks/useValidation";
import useHTTP from "../../../hooks/useHTTP";
import { API_ROUTES } from "../../../utils/API_Routes";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../utils/Routes";
import Preloader from "../../UI/Preloader/Preloader";

export type Qtype = "Number" | "Text" | "RadioIcons" | "MultipleIcons" | "Date";

const NewBaby = ({ edit }: { edit?: boolean }) => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(false);
  const [ID, setID] = useState("");
  const [answers, setAnswers] = useState<
    { value: string; state: FieldState }[]
  >(Array(NBQ.length).fill({ value: "", state: "NOT_VALIDATED" }));
  const { t, i18n } = useTranslation("babies");
  const [NewBabyQuestions, setNBQ] = useState(NBQ);
  useEffect(() => {
    if (edit) {
      setPageLoading(true);
      const URL = window.location.href;
      const id = URL.substring(URL.lastIndexOf("/") + 1);
      setID(id);
      send(API_ROUTES.PatientChild.GetById + "?id=" + ID, "GET").then(
        (res: resType) => {
          setPageLoading(false);
          if (res.succeeded) {
            setAnswers();
          } else {
            alert("SOMETHING BAD HAPPEND!");
          }
        }
      );
    }
  }, []);
  useEffect(() => {
    setNBQ(
      NBQ.map((item) => ({
        ...item,
        label: item.label ? t(item.label) : undefined,
        question: t(item.question, { name: answers[1].value }),
        icons: item.icons?.map((icon) => ({ ...icon, name: t(icon.name) })),
      }))
    );
  }, [i18n.language, answers]);
  const [step, setStep] = useState(0);
  const [lastStep, setLastStep] = useState(0);
  const [stepsDone, setDoneSteps] = useState(Array<StepType>);
  const [seen, setSeen] = useState(Array(NBQ.length).fill(false));
  const { loading, send } = useHTTP();

  const sendData = () => {
    if (answers.every((item) => item.state === "OK")) {
      send(API_ROUTES.PatientChild.Add, "POST", {
        patientId: 23,
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
        fatherEducation: answers[11].value,
        specialDie: answers[12].value,
        fatherHeight: Number(answers[13].value),
        motherHeight: Number(answers[14].value),
      }).then((res) => {
        if (res.succeeded) {
          // console.log(res);
          navigate(RouteNames.my_babies.baby.replace(":id", res.data.id));
        } else {
          alert("A problem occured!");
        }
      });
    }
  };

  useEffect(() => {
    setDoneSteps(
      answers.map((answer, stepIndex) => {
        if (step === stepIndex) {
          return "FILL";
        } else if (answer.state === "OK") {
          return "OK";
        } else if (!seen[stepIndex]) {
          return "NOT_VALIDATED";
        } else if (NBQ[stepIndex].required) {
          return "ERROR";
        } else return "NOT_VALIDATED";
      })
    );
  }, [step, seen]);

  useEffect(() => {
    if (lastStep !== step)
      setSeen((seen) => {
        const newSeen = [...seen];
        newSeen[lastStep] = true;
        setLastStep(step);
        return newSeen;
      });
  }, [step]);
  const filledUntilStep = (step: number) => {
    for (let i = 0; i <= step; i++) {
      if (!answers[i] && NBQ[i].required) {
        return false;
      }
    }
    return true;
  };
  const goNextStep = () => {
    setStep(step < NewBabyQuestions.length - 1 ? step + 1 : step);
  };
  const goToStep = (step: number) => {
    if (step >= 0 && step < NewBabyQuestions.length) setStep(step);
  };
  const goPrevStep = () => {
    const returnStep = step > 0 ? step - 1 : step;
    setStep(returnStep);
  };
  const setData = (newData: { value: string; state: FieldState }) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newData;
      return newAnswers;
    });
  };

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
            onClick={document.body.dir === "rtl" ? goNextStep : goPrevStep}
            icon={IconList.ChevronLeft}
            className="absolute left-0 2xs:left-3 md:left-20 top-[50%] text-2xl cursor-pointer"
          />
          <Icon
            onClick={document.body.dir === "rtl" ? goPrevStep : goNextStep}
            icon={IconList.ChevronRight}
            className="absolute right-0 2xs:right-3 md:right-20 top-[50%] text-2xl cursor-pointer"
          />
        </div>

        {/* ======= input fields ======== */}
        {NewBabyQuestions.map((item, key) => (
          <div key={key} className={`${key === step ? "" : "hidden"}`}>
            <span className="inline-block bg-[rgba(255,255,255,0.7)] text-start p-3 rounded-t-2xl border-b-2 border-primary-500 shadow-md">
              {item.question}
            </span>
            {item.type === "RadioIcons" || item.type === "MultipleIcons" ? (
              <IconChoices
                type={item.type}
                setData={setData}
                icons={item.icons!}
              />
            ) : item.type === "Number" || item.type === "Text" ? (
              <TextInput
                label={item.label!}
                active={step === key}
                type={item.type}
                setData={setData}
              />
            ) : item.type === "Date" ? (
              <DateInput
                label={item.label!}
                active={step === key}
                setData={setData}
              />
            ) : null}
          </div>
        ))}
        <Button
          neutral
          className="mt-1 px-4 py-2 mb-5 xs:mb-4 sm:mb-3 "
          onClick={step < NewBabyQuestions.length - 1 ? goNextStep : sendData}
          loading={loading}
        >
          {step === NewBabyQuestions.length - 1 ? t("finish") : t("next")}
        </Button>
      </div>
      {/* ========= step ======== */}
      <Step
        stepsDone={stepsDone}
        onSetStep={goToStep}
        steps={NewBabyQuestions.length}
      />
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
      specialDie: string;
      fatherHeight: number;
      motherHeight: number;
      // avatar: string;
    };
  };
  succeeded: true;
};
