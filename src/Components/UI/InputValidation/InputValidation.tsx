import React from "react";
import useFormat from "../../../hooks/useFormat";
import useValidation, { FieldType } from "../../../hooks/useValidation";
import Input from "../FormElements/Input/Input";

type InputValidationProps = {
  type: FieldType;
  placeHolder: string;
  label: string;
  setData: (text: string) => void;
};
const InputValidation = ({
  type,
  setData,
  label,
  placeHolder,
}: InputValidationProps) => {
  const { error, fieldState, onBlur, onChange, ref } = useValidation(
    type,
    setData
  );
  const formatter = useFormat();
  const totalOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange();
    type === "DATE" && formatter!(e);
  };
  return (
    <Input
      label={label}
      error={error}
      onChange={totalOnChange}
      onBlur={onBlur}
      ref={ref}
      state={fieldState}
      placeholder={placeHolder}
      iconName={
        type === "DATE" ? "date" : type === "NUMBER" ? "number" : "text"
      }
      className={`text-sm py-1 `}
      inputMode={type === "NUMBER" ? "numeric" : "text"}
      type={type === "NUMBER" ? "numeric" : "text"}
    />
  );
};
export default InputValidation;
