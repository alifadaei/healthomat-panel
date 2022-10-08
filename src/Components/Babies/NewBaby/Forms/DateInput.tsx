import { useEffect } from "react";
import useFormat from "../../../../hooks/useFormat";
import useValidation from "../../../../hooks/useValidation";
import Input from "../../../UI/FormElements/Input/Input";
import { IconList } from "../../../UI/Icon/Icon";
type DateInputProps = {
  setData: (data: string) => void;
  active: boolean;
};
const DateInput = ({ setData, active }: DateInputProps) => {
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
    <Input
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
  );
};
export default DateInput;
