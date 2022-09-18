import { useEffect, useState } from "react";
export type TransitionState = "Enter" | "Exit";
const useTransition = (duration: number, open: boolean) => {
  const [state, setState] = useState<TransitionState>("Exit");
  const [mount, setMount] = useState(false);
  const [enterTimeout, setEnterTO] = useState<ReturnType<typeof setTimeout>>();
  const [exitTimeout, setExitTO] = useState<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    if (open) {
      setMount(true);
      if (enterTimeout) clearTimeout(enterTimeout);
      setEnterTO(setTimeout(() => setState("Enter"), 50));
    } else {
      setState("Exit");
      if (exitTimeout) clearTimeout(exitTimeout);
      setExitTO(
        setTimeout(() => {
          setMount(false);
        }, duration)
      );
    }
  }, [open]);

  return { state, mount };
};
export default useTransition;
