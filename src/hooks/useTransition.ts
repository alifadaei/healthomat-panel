import { useEffect, useState } from "react";
export type TransitionState = "Enter" | "Exit";
const useTransition = (duration: number, open: boolean) => {
  const [state, setState] = useState<TransitionState>("Exit");
  const [mount, setMount] = useState(false);
  useEffect(() => {
    if (open) {
      setMount(true);
      setTimeout(() => setState("Enter"), 50);
    } else {
      setState("Exit");
      setTimeout(() => {
        setMount(false);
      }, duration);
    }
  }, [open]);

  return { state, mount };
};
export default useTransition;
