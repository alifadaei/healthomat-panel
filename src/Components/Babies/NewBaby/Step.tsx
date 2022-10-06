import { useEffect, useRef, useState } from "react";
import Icon, { IconList } from "../../UI/Icon/Icon";
export type StepType = "FILL" | "OK" | "NOT_VALIDATED" | "ERROR";
type StepProps = {
  steps: number;
  onSetStep: (step: number) => void;
  stepsDone: Array<StepType>;
};
const Step = ({ steps, onSetStep, stepsDone }: StepProps) => {
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
      className="absolute -bottom-1 sm:-bottom-2 flex flex-wrap justify-center gap-x-3 mt-4 text-2xl text-primary"
    >
      {[...Array(steps)].map((item, key) => (
        <Icon
          onClick={onSetStep.bind(null, key)}
          key={key}
          icon={
            stepsDone[key] === "OK"
              ? IconList.CloudDone
              : stepsDone[key] === "NOT_VALIDATED"
              ? IconList.Cloud
              : stepsDone[key] === "FILL"
              ? IconList.CloudFilled
              : IconList.CloudError
          }
          className={`cursor-pointer ${
            stepsDone[key] === "OK"
              ? "text-green-400"
              : stepsDone[key] === "NOT_VALIDATED"
              ? "text-gray-500"
              : stepsDone[key] === "FILL"
              ? "text-primary"
              : "text-accent"
          }`}
        />
      ))}
    </div>
  );
};
export default Step;
