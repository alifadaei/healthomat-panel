import useValidation, { FieldState } from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
import { useEffect, useState } from "react";
import { IconList } from "../../../UI/Icon/Icon";
import { useDispatch } from "react-redux";
import { userEnteredData } from "../newBabySlice";
import { useAppSelector } from "../../../../hooks/useSelector";
import { useTranslation } from "react-i18next";
type TextInputProps = {
  type: "Number" | "Text";
  label: string;
  active: number;
};
const TextInput = ({ type, label, active: active_key }: TextInputProps) => {
  const step = useAppSelector((state) => state.newBaby.step);
  const active = active_key === step;
  const formType = useAppSelector((state) => state.newBaby.type);
  const answers = useAppSelector((state) => state.newBaby.answers);
  useEffect(() => {
    if (formType === "Edit") {
      const value = answers[active_key].value;
      ref.current!.value = value;
      setDoValidate(true);
    }
  }, [formType]);
  const [doValidate, setDoValidate] = useState(false);
  const { error, fieldState, onBlur, ref, onChange } = useValidation(
    type === "Number" ? "NUMBER" : "NOT_EMPTY",
    doValidate
  );
  const { t } = useTranslation("babies");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userEnteredData({ state: fieldState, value: ref.current!.value }));
  }, [fieldState]);

  const totalOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange();
    dispatch(userEnteredData({ state: fieldState, value: e.target.value }));
  };
  useEffect(() => {
    if (active) ref.current!.focus();
  }, [active]);
  return (
    <div className="flex justify-center">
      <Input
        label={t(label)}
        iconName={type === "Number" ? "number" : "text"}
        type={type === "Number" ? "number" : "text"}
        inputMode={type === "Number" ? "numeric" : "text"}
        pattern={type === "Number" ? "[0-9]*" : "text"}
        onChange={totalOnChange}
        ref={ref}
        onBlur={onBlur}
        state={fieldState}
        error={error}
        className="rounded-md py-1 max-w-[10rem]"
        containerClasses="mt-3"
      />
    </div>
  );
};
export default TextInput;
