import useValidation from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
import { useEffect } from "react";
type TextInputProps = {
  type: "Number" | "Text";
  setData: (data: string) => void;
  active: boolean;
  label: string;
};
const TextInput = ({ type, setData, active, label }: TextInputProps) => {
  const { error, fieldState, onBlur, ref, onChange } = useValidation(
    type === "Number" ? "NUMBER" : "NOT_EMPTY",
    setData
  );

  useEffect(() => {
    if (active) ref.current!.focus();
  }, [active]);
  return (
    <Input
      label={label}
      type={type === "Number" ? "number" : "text"}
      inputMode={type === "Number" ? "numeric" : "text"}
      pattern={type === "Number" ? "[0-9]*" : "text"}
      onChange={onChange}
      ref={ref}
      onBlur={onBlur}
      state={fieldState}
      error={error}
      className="rounded-md py-1 mx-auto max-w-[10rem]"
      containerClasses="mt-3"
    />
  );
};
export default TextInput;
