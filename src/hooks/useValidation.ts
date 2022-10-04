import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";

type FieldState = "OK" | "ERROR" | "NOT_VALIDATED";
type FieldType = "EMAIL" | "NOT_EMPTY" | "PASS" | "NAME" | "DATE";
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
};

const useValidation = (validator: FieldType) => {
  const { t } = useTranslation("common");
  const validatorFunction = Validators[validator];
  const error = t(`validators.${validator.toLowerCase()}`);
  const [fieldState, setState] = useState<FieldState>("NOT_VALIDATED");
  const ref = useRef<HTMLInputElement>(null);
  const clearValidation = () => {
    setState("NOT_VALIDATED");
  };
  const onBlur = () => {
    if (validatorFunction(ref.current!.value)) setState("OK");
    else setState("ERROR");
  };
  return { onBlur, fieldState, ref, error, clearValidation };
};
export default useValidation;
