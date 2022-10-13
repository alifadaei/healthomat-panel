import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../UI/Button/Button";
import InputValidation from "../../../UI/InputValidation/InputValidation";

const NewRecord = ({
  onSubmit,
}: {
  onSubmit: (
    weight: number,
    length: number,
    headCircumference: number,
    date: string
  ) => void;
}) => {
  const { t } = useTranslation("babies");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [headCircumference, setHeadCircumference] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = () => {
    if (weight && length && date && headCircumference) {
      onSubmit(Number(weight), Number(length), Number(headCircumference), date);
    }
  };

  return (
    <form
      className=" px-8 pt-6 pb-4 bg-back rounded-2xl mx-auto flex flex-col justify-center items-center"
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
    >
      <div className="flex items-center w-full mb-3">
        <div className="h-[1px] grow bg-gray-400"></div>
        <h3 className="font-bold text-gray-700 mx-3">
          {t("new_record.add_record")}
        </h3>
        <div className="h-[1px] grow bg-gray-400"></div>
      </div>
      <InputValidation
        label={t("new_record.weight.label")}
        placeHolder={t("new_record.weight.placeholder")}
        setData={setWeight}
        type="NUMBER"
      />
      <InputValidation
        label={t("new_record.length.label")}
        placeHolder={t("new_record.length.placeholder")}
        setData={setLength}
        type="NUMBER"
      />
      <InputValidation
        label={t("new_record.circumference.label")}
        placeHolder={t("new_record.circumference.placeholder")}
        setData={setHeadCircumference}
        type="NUMBER"
      />
      <InputValidation
        label={t("new_record.date.label")}
        placeHolder={t("new_record.date.placeholder")}
        setData={setDate}
        type="DATE"
      />

      <div className="mx-auto text-center">
        <Button className="p-2 px-4 text-sm " onClick={handleSubmit}>
          {t("new_record.submit")}
        </Button>
      </div>
    </form>
  );
};
export default NewRecord;
