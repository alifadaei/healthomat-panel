import useValidation, { FieldState } from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
import { useEffect } from "react";
import { IconList } from "../../../UI/Icon/Icon";
type TextInputProps = {
  type: "Number" | "Text";
  setData: (newData: { value: string; state: FieldState }) => void;
  active: boolean;
  label: string;
};
const TextInput = ({ type, setData, active, label }: TextInputProps) => {
  const { error, fieldState, onBlur, ref, onChange } = useValidation(
    type === "Number" ? "NUMBER" : "NOT_EMPTY"
  );
  useEffect(() => {
    setData({ state: fieldState, value: ref.current!.value });
  }, [fieldState]);
  const totalOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange();
    setData({ state: fieldState, value: e.target.value });
  };
  useEffect(() => {
    if (active) ref.current!.focus();
  }, [active]);
  return (
    <div className="flex justify-center">
      <Input
        label={label}
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
