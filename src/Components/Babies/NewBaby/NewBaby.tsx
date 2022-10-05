import { useTranslation } from "react-i18next";
import Heading from "../../UI/Heading/Heading";
import cloudy from "../../../assets/img/baby/cloudy.svg";
import { useState } from "react";
import Icon, { IconList } from "../../UI/Icon/Icon";
import Step from "./Step";
import { NewBabyQuestions as NBQ } from "../../../utils/Babies";
import Button from "../../UI/Button/Button";
import MultipleIcons from "./Forms/MultipleIcons";
import RadioIcons from "./Forms/RadioIcons";
import TextInput from "./Forms/TextInput";

export type Qtype = "Number" | "Text" | "RadioIcons" | "MultipleIcons" | "Date";

const NewBaby = () => {
  const [answers, setAnswers] = useState(Array(NBQ.length));
  const { t } = useTranslation("babies");
  const NewBabyQuestions = NBQ.map((item) => ({
    ...item,
    question: t(item.question, { name: answers[1] }),
    icons: item.icons?.map((icon) => ({ ...icon, name: t(icon.name) })),
  }));
  const [step, setStep] = useState(0);
  const filledUntilStep = (step: number) => {
    for (let i = 0; i <= step; i++) {
      if (!answers[i]) {
        return false;
      }
    }
    return true;
  };
  const goNextStep = () => {
    filledUntilStep(step) &&
      setStep(step < NewBabyQuestions.length - 1 ? step + 1 : step);
  };
  const goToStep = (step: number) => {
    if (
      step >= 0 &&
      step < NewBabyQuestions.length &&
      filledUntilStep(step - 1)
    )
      setStep(step);
  };
  const goPrevStep = () => {
    const returnStep = step > 0 ? step - 1 : step;
    setStep(returnStep);
  };
  console.log(answers);
  const setData = (data: string) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = data;
      return newAnswers;
    });
  };

  return (
    <>
      <Heading str={t("new_baby")} />
      {/* ====== cloudy container ====== */}
      <div
        style={{
          backgroundImage: `url(${cloudy})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className="h-[18rem] xs:h-[22rem] sm:h-[24rem] w-full flex flex-col justify-center items-center text-center relative text-gray-700 text-sm xs:text-base"
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
            <span className="bg-[rgba(255,255,255,0.7)] p-3 rounded-t-2xl border-b-2 border-primary-500 shadow-md">
              {item.question}
            </span>
            {item.type === "RadioIcons" ? (
              <RadioIcons setData={setData} icons={item.icons!} />
            ) : item.type === "MultipleIcons" ? (
              <MultipleIcons setData={setData} icons={item.icons!} />
            ) : item.type === "Number" || item.type === "Text" ? (
              <TextInput type={item.type} setData={setData} />
            ) : // type === "Text" ? <TextInput/> : type==="Date" ? <DateInput/>
            null}
          </div>
        ))}
        <Button
          neutral
          className="px-4 py-2 mb-5 xs:mb-4 sm:mb-3 "
          onClick={goNextStep}
        >
          {step === NewBabyQuestions.length - 1 ? t("finish") : t("next")}
        </Button>

        {/* ========= step ======== */}
        <Step
          onSetStep={goToStep}
          currentStep={step}
          steps={NewBabyQuestions.length}
        />
      </div>
    </>
  );
};
export default NewBaby;
