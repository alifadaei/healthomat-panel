import { useEffect } from "react";
import useValidation from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
type DateInputProps = {
  setData: (data: string) => void;
  active: boolean;
};
const DateInput = ({ setData, active }: DateInputProps) => {
  const { error, fieldState, onBlur, ref } = useValidation("NUMBER", setData);
  useEffect(() => {
    if (active) ref.current!.focus();
  }, [active]);
  return (
    <Input
      inputMode="numeric"
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
