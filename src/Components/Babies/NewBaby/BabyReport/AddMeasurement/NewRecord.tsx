import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import useFormat from "../../../../../hooks/useFormat";
import { useAppSelector } from "../../../../../hooks/useSelector";
import useValidation from "../../../../../hooks/useValidation";
import Button from "../../../../UI/Button/Button";
import Input from "../../../../UI/FormElements/Input/Input";
import { addBabyData, editBabyData } from "../babyReportSlice";

const NewRecord = () => {
  const { t } = useTranslation("babies");
  const dispatch = useDispatch();
  const babyDataSet = useAppSelector((state) => state.babyReport.babyDataSet);
  const formState = useAppSelector((state) => state.babyReport.formState);
  const [forceValidateFlag, setForceValidateFlag] = useState(false);
  useEffect(() => {
    if (formState.state === "Edit") {
      setForceValidateFlag(true);
      const babyDataObj = babyDataSet.find(
        (item) => item.id === formState.editDelID
      )!;
      weightRef.current!.value = babyDataObj.weight.toString();
      headCircumferenceRef.current!.value =
        babyDataObj.headCircumference.toString();
      lengthRef.current!.value = babyDataObj.length.toString();
      dateRef.current!.value = babyDataObj.date;
    }
  }, []);
  const handleSubmit = () => {
    if (
      weightState === "OK" &&
      lengthState === "OK" &&
      headCircumferenceState === "OK" &&
      dateState === "OK"
    ) {
      switch (formState.state) {
        case "Edit":
          dispatch(
            editBabyData({
              date: dateRef.current!.value,
              headCircumference: Number(headCircumferenceRef.current!.value),
              id: "",
              length: Number(lengthRef.current!.value),
              weight: Number(weightRef.current!.value),
            })
          );
          break;
        case "New":
          dispatch(
            addBabyData({
              date: weightRef.current!.value,
              headCircumference: Number(headCircumferenceRef.current!.value),
              id: Math.random().toString(),
              length: Number(lengthRef.current!.value),
              weight: Number(weightRef.current!.value),
            })
          );
          break;
      }
    }
  };

  const {
    error: weightError,
    fieldState: weightState,
    onBlur: onWeightBlur,
    onChange: onWeightChange,
    ref: weightRef,
  } = useValidation("NUMBER", forceValidateFlag);
  const {
    error: lengthError,
    fieldState: lengthState,
    onBlur: onLengthBlur,
    onChange: onLengthChange,
    ref: lengthRef,
  } = useValidation("NUMBER", forceValidateFlag);
  const {
    error: headCircumferenceError,
    fieldState: headCircumferenceState,
    onBlur: onHeadCircumferenceBlur,
    onChange: onHeadCircumferenceChange,
    ref: headCircumferenceRef,
  } = useValidation("NUMBER", forceValidateFlag);
  const {
    error: dateError,
    fieldState: dateState,
    onBlur: onDateBlur,
    onChange: onDateChange,
    ref: dateRef,
  } = useValidation("DATE", forceValidateFlag);
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
