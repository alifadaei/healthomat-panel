import RadioIcons from "./RadioIcons";
import Input from "../../UI/FormElements/Input/Input";
import useValidation from "../../../hooks/useValidation";
import Button from "../../UI/Button/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export type QType = "RadioIcons" | "Text" | "Date";
type QuestionProps = {
  nextStep: (data: string) => void;
  type: QType;
  question: string;
  icons?: { name: string; src: string }[];
  finish: boolean;
};
const Question = ({
  nextStep,
  type,
  question,
  icons,
  finish,
}: QuestionProps) => {
  const { error, fieldState, onBlur, ref } = useValidation(
    type === "Date" ? "DATE" : "NOT_EMPTY"
  );
  const [data, setData] = useState("");
  const { t } = useTranslation("babies");

  const handleNextButtonClick = () => {
    if (type === "Text" && fieldState === "OK") {
      ref.current!.value = "";
      nextStep(data);
    } else if (type === "RadioIcons" && data) {
      nextStep(data);
    }
  };
  return (
    <>
      <span className="bg-[rgba(255,255,255,0.7)] p-3 rounded-t-2xl border-b-2 border-primary-500 shadow-md">
        {question}
      </span>
      {type === "RadioIcons" ? (
        <RadioIcons
          onClickIcon={(text) => {
            setData(text);
          }}
          icons={icons!}
        />
      ) : (
        <Input
          onChange={() => {
            setData(ref.current!.value);
          }}
          className="rounded-md px-3 py-2 mx-auto max-w-[10rem]"
          error={error}
          ref={ref}
          onBlur={onBlur}
          state={fieldState}
          containerClasses="mt-10"
          type="text"
        />
      )}
      <Button
        neutral
        className="px-4 py-2 mb-5 xs:mb-4 sm:mb-3 "
        onClick={handleNextButtonClick}
      >
        {!finish ? t("next") : t("finish")}
      </Button>
    </>
  );
};
export default Question;
