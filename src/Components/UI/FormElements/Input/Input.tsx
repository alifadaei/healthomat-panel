import { forwardRef, ReactNode } from "react";
type InputProps = {
  id: string;
  name: string;
  type: string;
  className: string;
  hideLabel?: boolean;
  placeholder?: string;
  onChange?: () => void;
};
export type Ref = HTMLInputElement;
const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { id, name, type, className, hideLabel, placeholder, onChange } = props;
  return (
    <div className="flex flex-col mx-0">
      {!hideLabel && (
        <label className="text-md" htmlFor={id}>
          {name}
        </label>
      )}

      <input
        onChange={onChange}
        ref={ref}
        placeholder={`${placeholder ? placeholder : ""}`}
        id={id}
        type={type}
        className={`border-b border-[rgb(114, 114, 114)] 
        ps-4 transition
        focus-visible:outline-none focus-visible:border-accent
        ${className}`}
      />
    </div>
  );
});
Input.displayName = "Input";
export default Input;
