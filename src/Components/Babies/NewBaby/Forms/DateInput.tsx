import { useEffect } from "react";
import useFormat from "../../../../hooks/useFormat";
import useValidation from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
type DateInputProps = {
  setData: (data: string) => void;
  active: boolean;
  label: string;
};
const DateInput = ({ setData, active, label }: DateInputProps) => {
  const {
    error,
    fieldState,
    onBlur,
    ref,
    onChange: validationChange,
  } = useValidation("DATE", setData);
  const onChange = useFormat();
  useEffect(() => {
    if (active) ref.current!.focus();
  }, [active]);
  return (
    <div className="flex justify-center">
      <Input
        label={label}
        inputMode="text"
        type="text"
        ref={ref}
        onBlur={onBlur}
        iconName="date"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
          validationChange();
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
