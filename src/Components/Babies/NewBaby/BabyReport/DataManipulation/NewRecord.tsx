import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import useFormat from "../../../../../hooks/useFormat";
import { useAppSelector } from "../../../../../hooks/useSelector";
import useValidation from "../../../../../hooks/useValidation";
import Button from "../../../../UI/Button/Button";
import Input from "../../../../UI/FormElements/Input/Input";
import {
  setFormDataDate,
  setFormDataHead,
  setFormDataLength,
  setFormDataWeight,
} from "../babyReportSlice";

const NewRecord = () => {
  const { t } = useTranslation("babies");
  const [totalError, setTotalError] = useState("");
  const dispatch = useDispatch();
  const weight = useAppSelector((state) => state.babyReport.formData.weight);
  const length = useAppSelector((state) => state.babyReport.formData.weight);
  const head = useAppSelector((state) => state.babyReport.formData.weight);
  const date = useAppSelector((state) => state.babyReport.formData.weight);
  const formState = useAppSelector((state) => state.babyReport.formState);
  const handleSubmit = () => {
    if (
      weight.state === "OK" &&
      length.state === "OK" &&
      head.state === "OK" &&
      date.state === "OK"
    ) {
      setTotalError("");
      // dispatch(set);
    } else {
      setTotalError(t("new_record.error"));
    }
  };

  const {
    error: weightError,
    fieldState: weightState,
    onBlur: onWeightBlur,
    onChange: onWeightChange,
    ref: weightRef,
  } = useValidation("NUMBER");
  const {
    error: lengthError,
    fieldState: lengthState,
    onBlur: onLengthBlur,
    onChange: onLengthChange,
    ref: lengthRef,
  } = useValidation("NUMBER");
  const {
    error: headCircumferenceError,
    fieldState: headCircumferenceState,
    onBlur: onHeadCircumferenceBlur,
    onChange: onHeadCircumferenceChange,
    ref: headCircumferenceRef,
  } = useValidation("NUMBER");
  const {
    error: dateError,
    fieldState: dateState,
    onBlur: onDateBlur,
    onChange: onDateChange,
    ref: dateRef,
  } = useValidation("DATE");
  const formatter = useFormat();
  return (
    <form
      id="NewRecord"
      className={`
      bg-back px-8 pt-6 pb-4 border mx-auto flex flex-col justify-center items-center rounded-2xl`}
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
    >
      <div className="flex items-center w-full mb-3">
        <div className="h-[1px] grow bg-gray-400"></div>
        <h3 className="font-bold text-gray-700 mx-3">
          {t("new_record.add_record")}
        </h3>
        {totalError && <div>{totalError}</div>}
        <div className="h-[1px] grow bg-gray-400"></div>
      </div>
      <Input
        label={t("new_record.weight.label")}
        error={weightError}
        onChange={onWeightChange}
        onBlur={onWeightBlur}
        ref={weightRef}
        state={weightState}
        placeholder={t("new_record.weight.placeholder")}
        iconName="number"
        className={`text-sm py-1`}
        inputMode="numeric"
        type="NUMBER"
      />
      <Input
        label={t("new_record.length.label")}
        error={lengthError}
        onChange={onLengthChange}
        onBlur={onLengthBlur}
        ref={lengthRef}
        state={lengthState}
        placeholder={t("new_record.length.placeholder")}
        iconName="number"
        className={`text-sm py-1`}
        inputMode="numeric"
        type="NUMBER"
      />
      <Input
        label={t("new_record.circumference.label")}
        error={headCircumferenceError}
        onChange={onHeadCircumferenceChange}
        onBlur={onHeadCircumferenceBlur}
        ref={headCircumferenceRef}
        state={headCircumferenceState}
        placeholder={t("new_record.circumference.placeholder")}
        iconName="number"
        className={`text-sm py-1`}
        inputMode="numeric"
        type="number"
      />
      <Input
        label={t("new_record.date.label")}
        error={dateError}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onDateChange();
          formatter(e as React.ChangeEvent<HTMLInputElement>);
        }}
        onBlur={onDateBlur}
        ref={dateRef}
        state={dateState}
        placeholder={t("new_record.date.placeholder")}
        iconName="date"
        className={`text-sm py-1`}
        inputMode="numeric"
        type="text"
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
