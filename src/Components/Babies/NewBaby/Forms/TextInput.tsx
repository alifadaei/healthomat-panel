import useValidation from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";

type TextInputProps = {
  type: "Number" | "Text";
  setData: (data: string) => void;
};
const TextInput = ({ type, setData }: TextInputProps) => {
  const { error, fieldState, onBlur, ref, onChange } = useValidation(
    type === "Number" ? "NUMBER" : "NOT_EMPTY",
    setData
  );
  return (
    <Input
      type={type === "Number" ? "number" : "text"}
      inputMode={type === "Number" ? "numeric" : "text"}
      pattern={type === "Number" ? "[0-9]*" : "text"}
      onChange={onChange}
      ref={ref}
      onBlur={onBlur}
      state={fieldState}
      error={error}
      className="rounded-md px-3 py-2 mx-auto max-w-[10rem] mt-6"
    />
  );
};
export default TextInput;
