import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/useSelector";
import { NewBabyQuestions } from "../../../utils/Babies/Babies";
import Icon, { IconList } from "../../UI/Icon/Icon";
import { changeStep } from "./newBabySlice";
export type StepType = "FILL" | "OK" | "NOT_VALIDATED" | "ERROR";

const Step = () => {
  const steps = NewBabyQuestions.length;
  const [stepsDone, setDoneSteps] = useState(Array<StepType>);
  const answers = useAppSelector((state) => state.newBaby.answers);
  const [lastStep, setLastStep] = useState(0);
  const step = useAppSelector((state) => state.newBaby.step);
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(Array(NewBabyQuestions.length).fill(false));
  const edit = useAppSelector((state) => state.newBaby.type);
  useEffect(() => {
    setDoneSteps(
      answers.map((answer, stepIndex) => {
        if (step === stepIndex) {
          return "FILL";
        } else if (answer.state === "OK") {
          return "OK";
        } else if (!seen[stepIndex]) {
          return "NOT_VALIDATED";
        } else if (NewBabyQuestions[stepIndex].required) {
          return "ERROR";
        } else return "NOT_VALIDATED";
      })
    );
  }, [step, seen, edit]);
  useEffect(() => {
    if (lastStep !== step)
      setSeen((seen) => {
        const newSeen = [...seen];
        newSeen[lastStep] = true;
        setLastStep(step);

        return newSeen;
      });
  }, [step]);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-x-3 text-2xl text-primary">
      {[...Array(steps)].map((item, key) => (
        <Icon
          onClick={() => dispatch(changeStep(key))}
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
