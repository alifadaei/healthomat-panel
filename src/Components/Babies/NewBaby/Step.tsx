import { useEffect, useRef, useState } from "react";
import Icon, { IconList } from "../../UI/Icon/Icon";

type StepProps = {
  currentStep: number;
  steps: number;
  onSetStep: (step: number) => void;
};
const Step = ({ steps, currentStep, onSetStep }: StepProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  }, []);
  return (
    <div
      style={{ left: `calc(50%-${width}px)` }}
      className="absolute bottom-1 xs:-bottom-0 sm:-bottom-2 flex justify-center gap-x-3 mt-4 text-2xl text-primary"
    >
      {[...Array(steps)].map((item, key) => (
        <Icon
          onClick={onSetStep.bind(null, key)}
          key={key}
          icon={key <= currentStep ? IconList.CloudFilled : IconList.Cloud}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
};
export default Step;
