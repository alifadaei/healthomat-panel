import { forwardRef, KeyboardEvent } from "react";
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
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  state?: "OK" | "NOT_VALIDATED" | "ERROR";
  error?: string;
};
export type Ref = HTMLInputElement;
const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const {
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
      {label && <label className="text-xs text-gray-600">{label}</label>}

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
        }
        ps-4 transition outline-none 
         focus-visible:border-primary
        ${className}`}
      />
      {state === "ERROR" && (
        <span className="text-xs pt-1 text-red-500">{error}</span>
      )}
    </div>
  );
});
Input.displayName = "Input";
export default Input;
