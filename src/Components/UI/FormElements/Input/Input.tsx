import { forwardRef, KeyboardEvent } from "react";
import Icon, { IconList } from "../../Icon/Icon";
type InputProps = {
  type: string;
  inputMode:
    | "email"
    | "search"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "numeric"
    | "decimal"
    | undefined;
  pattern?: string;
  className: string;
  containerClasses?: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  state?: "OK" | "NOT_VALIDATED" | "ERROR";
  error?: string;
  iconName?: "number" | "date" | "text";
};
export type Ref = HTMLInputElement;
const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const {
    iconName,
    inputMode,
    error,
    state,
    onKeydown,
    type,
    label,
    className,
    placeholder,
    onChange,
    pattern,
    containerClasses,
    onBlur,
    onFocus,
  } = props;
  return (
    <div className={`flex flex-col mx-0 mb-3 ${containerClasses}`}>
      {label && <label className="text-xs text-gray-600 mb-2">{label}</label>}
      <div className="flex items-center mx-auto">
        <Icon
          icon={
            iconName === "date"
              ? IconList.Calendar
              : iconName === "number"
              ? IconList.Numbers
              : IconList.Text
          }
          style={{
            transform: `translateX(${
              document.body.dir === "ltr" ? "" : "-"
            }1.7rem)`,
          }}
          className=" text-gray-600 border-e pe-1"
        />
        <input
          inputMode={inputMode}
          pattern={pattern}
          onKeyDown={onKeydown}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={onChange}
          ref={ref}
          placeholder={`${placeholder ? placeholder : ""}`}
          type={type}
          className={`border ${
            state === "ERROR" ? "border-red-500  " : "border-gray-200"
          } ps-8 transition outline-none focus-visible:border-primary
        ${className}`}
        />
      </div>
      {state === "ERROR" && (
        <span className="text-xs pt-1 text-red-500">{error}</span>
      )}
    </div>
  );
});
Input.displayName = "Input";
export default Input;
