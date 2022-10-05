import useValidation from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
type TextInputProps = {
  type: "Number" | "Text";
  setData: (data: string) => void;
};
const TextInput = ({ type, setData }: TextInputProps) => {
  const { error, fieldState, onBlur, ref } = useValidation(
    type === "Number" ? "NUMBER" : "NOT_EMPTY"
  );
  return (
    <form>
      <Input
        type="text"
        onChange={() => {
          setData(ref.current!.value);
        }}
        ref={ref}
        onBlur={onBlur}
        state={fieldState}
        error={error}
        className="rounded-md px-3 py-2 mx-auto max-w-[10rem] mt-6"
      />
    </form>
  );
};
export default TextInput;
