import { useTranslation } from "react-i18next";
import Heading from "../../UI/Heading/Heading";
import cloudy from "../../../assets/img/baby/cloudy.svg";
import { useState } from "react";
import Icon, { IconList } from "../../UI/Icon/Icon";
import Question from "./Question";
import Step from "./Step";
import { NewBabyQuestions } from "../../../utils/Babies";
const NewBaby = () => {
  const { t } = useTranslation("babies");
  const [step, setStep] = useState(0);
  console.log(step);
  const [name, setName] = useState("");
  const [data, setData] = useState(Array(NewBabyQuestions.length).fill(""));
  const currentContext = NewBabyQuestions[step];
  const nextStep = () => {
    setStep(step < NewBabyQuestions.length - 1 ? step + 1 : step);
    if (step === NewBabyQuestions.length - 1) {
      console.log(data);
    }
  };
  const prevStep = () => setStep(step > 0 ? step - 1 : step);
  const handleDataInput = (text: string) => {
    if (currentContext.setName) setName(text);
    const newData = [...data];
    newData[step] = text;
    setData(newData);
    nextStep();
  };
  return (
    <>
      <Heading str={t("new_baby")} />
      <div
        style={{
          backgroundImage: `url(${cloudy})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className="h-[18rem] xs:h-[22rem] sm:h-[24rem] w-full flex flex-col justify-center items-center text-center relative text-gray-700 text-sm xs:text-base"
      >
        {/* ========== question and answers =========== */}
        <div className="text-primary">
          <Icon
            onClick={document.body.dir === "rtl" ? nextStep : prevStep}
            icon={IconList.ChevronLeft}
            className="absolute left-0 2xs:left-3 md:left-20 top-[50%] text-2xl cursor-pointer"
          />
          <Icon
            onClick={document.body.dir === "rtl" ? prevStep : nextStep}
            icon={IconList.ChevronRight}
            className="absolute right-0 2xs:right-3 md:right-20 top-[50%] text-2xl cursor-pointer"
          />
        </div>
        {
          <Question
            finish={step === NewBabyQuestions.length - 1}
            nextStep={handleDataInput}
            question={t(currentContext.question, { name })}
            type={currentContext.type}
            icons={currentContext.icons?.map((item) => ({
              ...item,
              name: t(item.name),
            }))}
          />
        }

        {/* ========= step ======== */}
        <Step
          onSetStep={(step) => setStep(step)}
          currentStep={step}
          steps={NewBabyQuestions.length}
        />
      </div>
    </>
  );
};
export default NewBaby;
