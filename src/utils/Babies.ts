import { QType } from "./../Components/Babies/NewBaby/Question";
import boy from "../assets/img/baby/boy.png";
import girl from "../assets/img/baby/girl.png";
type NewbabyQuestionFormat = {
  question: string;
  type: QType;
  icons?: { src: string; name: string }[];
  setName?: boolean;
};
export const NewBabyQuestions: NewbabyQuestionFormat[] = [
  {
    question: "baby_questions.gender",
    type: "RadioIcons",
    icons: [
      { src: boy, name: "gender.boy" },
      { src: girl, name: "gender.girl" },
    ],
  },
  {
    question: "baby_questions.name",
    type: "Text",
    setName: true,
  },
  {
    question: "baby_questions.old",
    type: "Number",
  },
  {
    question: "baby_questions.weight",
    type: "Number",
  },
  {
    question: "baby_questions.cut_off_milk",
    type: "Date",
  },
];
