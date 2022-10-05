import { useState } from "react";
const useFormat = () => {
  const [step, setStep] = useState(1);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (!val) setStep(1);
    if (step === 1) {
      if (val.length === 4) {
        e.currentTarget.value = val + "/";
        setStep(2);
      }
    } else if (step === 2) {
      if (val.length === 7) {
        e.currentTarget.value = val + "/";
        setStep(3);
      }
    }
  };
  return onChange;
};
export default useFormat;
