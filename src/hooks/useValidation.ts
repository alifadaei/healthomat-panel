import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

export type FieldState = "OK" | "ERROR" | "NOT_VALIDATED";
export type FieldType =
  | "EMAIL"
  | "NOT_EMPTY"
  | "PASS"
  | "NAME"
  | "DATE"
  | "NUMBER";
const Validators = {
  NOT_EMPTY: (s: string) => Boolean(s),
  EMAIL: (email: string) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.toLowerCase()
    ),
  NAME: (name: string) =>
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
      name
    ),
  PASS: (pass: string) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pass),
  DATE: (date: string) =>
    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(date),
  NUMBER: (number: string) => /^[0-9]+([.][0-9]+)?$/.test(number),
};

const useValidation = (
  validator: FieldType,
  forceValidate?: boolean,
  reset?: boolean
) => {
  const { t } = useTranslation("common");
  const validatorFunction = Validators[validator];
  const error = t(`validators.${validator.toLowerCase()}`);
  const [fieldState, setState] = useState<FieldState>("NOT_VALIDATED");
  const [visited, setVisited] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const validate = () => {
    if (ref.current!.value && validatorFunction(ref.current!.value)) {
      setState("OK");
    } else {
      setState("ERROR");
    }
  };
  useEffect(() => {
    if (forceValidate) {
      validate();
    }
  }, [forceValidate]);
  useEffect(() => {
    if (reset) {
      setState("NOT_VALIDATED");
    }
  }, [reset]);
  const onBlur = () => {
    validate();
    setVisited(true);
  };
  const onChange = () => {
    if (visited) validate();
  };
  return { onBlur, fieldState, ref, error, onChange };
};
export default useValidation;
