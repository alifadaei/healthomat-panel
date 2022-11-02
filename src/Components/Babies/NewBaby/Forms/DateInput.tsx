import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import useFormat from "../../../../hooks/useFormat";
import { useAppSelector } from "../../../../hooks/useSelector";
import useValidation, { FieldState } from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
import { userEnteredData } from "../newBabySlice";
type DateInputProps = {
  active: number;
  label: string;
};
const DateInput = ({ active: active_key, label }: DateInputProps) => {
  const formType = useAppSelector((state) => state.newBaby.type);
  const answers = useAppSelector((state) => state.newBaby.answers);
  const [doValidate, setDoValidate] = useState(false);
  useEffect(() => {
    if (formType === "Edit") {
      const value = answers[active_key].value;
      ref.current!.value = value.substring(0, 10);
      setDoValidate(true);
    }
  }, [formType]);
  const step = useAppSelector((state) => state.newBaby.step);
  const active = active_key === step;
  const dispatch = useDispatch();
  const setData = (data: { state: FieldState; value: string }) => {
    dispatch(userEnteredData(data));
  };
  const { t } = useTranslation("babies");
  const {
    error,
    fieldState,
    onBlur,
    ref,
    onChange: validationChange,
  } = useValidation("DATE", doValidate);
  useEffect(() => {
    setData({ state: fieldState, value: ref.current!.value });
  }, [fieldState]);
  const formatOnChange = useFormat();
  useEffect(() => {
    if (active) ref.current!.focus();
  }, [active]);
  return (
    <div className="flex justify-center">
      <Input
        label={t(label)}
        inputMode="text"
        type="text"
        ref={ref}
        onBlur={onBlur}
        iconName="date"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          formatOnChange(e);
          validationChange();
          setData({ state: fieldState, value: e.target.value });
        }}
        state={fieldState}
        error={error}
        className="rounded-md py-1 max-w-[10rem]"
        containerClasses="mt-3"
      />
    </div>
  );
};
export default DateInput;
