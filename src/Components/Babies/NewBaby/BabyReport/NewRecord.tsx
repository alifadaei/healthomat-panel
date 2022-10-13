import { useState } from "react";
import { useTranslation } from "react-i18next";
import useValidation from "../../../../hooks/useValidation";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/FormElements/Input/Input";
import InputValidation from "../../../UI/InputValidation/InputValidation";

const NewRecord = () => {
  const { t } = useTranslation("babies");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = () => {
    if (weight && length && date) {
    }
  };

  return (
    <form
      className="mt-3 mx-auto w-[16rem] flex flex-col justify-center items-center border p-3"
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
    >
      <p className="mb-2 text-gray-700">Add Record</p>
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
        setData={setDate}
        type="DATE"
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
