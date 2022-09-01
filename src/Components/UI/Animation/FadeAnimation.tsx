import { useEffect, useState } from "react";

type FadeAnimationProps = {
  children: React.ReactElement;
  show: boolean;
  duration: number;
};

const FadeAnimation = ({ children, show, duration }: FadeAnimationProps) => {
  const [selfState, setSelfState] = useState(false);
  const [closeTimeout, setCloseTimeout] =
    useState<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    clearTimeout(closeTimeout);
    if (show) setSelfState(true);
    else if (selfState && !show) {
      setCloseTimeout(setTimeout(() => setSelfState(false), duration));
    }
  }, [show]);
  return (
    <div
      className="transition-all"
      style={{ opacity: show ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      {selfState && children}
    </div>
  );
};
export default FadeAnimation;
