import useValidation from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
type DateInputProps = {};
const DateInput = () => {
  const { error, fieldState, onBlur, ref } = useValidation("NUMBER");
  return (
    <Input
      pattern="\d*"
      ref={ref}
      onBlur={onBlur}
      state={fieldState}
      error={error}
      className="rounded-md px-3 py-2 mx-auto max-w-[10rem] mt-6"
      type="number"
    />
  );
};
export default DateInput;
