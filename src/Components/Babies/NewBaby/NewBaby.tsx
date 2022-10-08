import { useTranslation } from "react-i18next";
import Heading from "../../UI/Heading/Heading";
import cloudy from "../../../assets/img/baby/cloudy.svg";
import { useState, useEffect } from "react";
import Icon, { IconList } from "../../UI/Icon/Icon";
import Step, { StepType } from "./Step";
import { NewBabyQuestions as NBQ } from "../../../utils/Babies";
import Button from "../../UI/Button/Button";
import IconChoices from "./Forms/IconChoices";
import TextInput from "./Forms/TextInput";
import DateInput from "./Forms/DateInput";

export type Qtype = "Number" | "Text" | "RadioIcons" | "MultipleIcons" | "Date";

const NewBaby = () => {
  const [answers, setAnswers] = useState(Array(NBQ.length).fill(""));
  const { t, i18n } = useTranslation("babies");
  const [NewBabyQuestions, setNBQ] = useState(NBQ);
  useEffect(() => {
    setNBQ(
      NBQ.map((item) => ({
        ...item,
        label: item.label ? t(item.label) : undefined,
        question: t(item.question, { name: answers[1] }),
        icons: item.icons?.map((icon) => ({ ...icon, name: t(icon.name) })),
      }))
    );
  }, [i18n.language, answers]);
  const [step, setStep] = useState(0);
  const [lastStep, setLastStep] = useState(0);
  const [stepsDone, setDoneSteps] = useState(Array<StepType>);
  const [seen, setSeen] = useState(Array(NBQ.length).fill(false));
  useEffect(() => {
    const newStepsDone = answers.map((answer, stepIndex) => {
      if (step === stepIndex) {
        return "FILL";
      } else if (answer) {
        return "OK";
      } else if (!seen[stepIndex]) {
        return "NOT_VALIDATED";
      } else if (NBQ[stepIndex].required) {
        return "ERROR";
      } else return "OK";
    });
    console.log(answers);
    console.log(seen);
    console.log(newStepsDone);
    setDoneSteps(newStepsDone);
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
  const setData = (data: string) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = data;
      return newAnswers;
    });
  };

  return (
    <div className="">
      <Heading str={t("new_baby")} />
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
          onClick={goNextStep}
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
