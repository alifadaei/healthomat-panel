import { QType } from "./../Components/Babies/NewBaby/Question";
import boy from "../assets/img/baby/boy.png";
import girl from "../assets/img/baby/girl.png";
import mother_milk from "../assets/img/baby/mother-milk.png";
import milk_powder from "../assets/img/baby/milk-powder.png";
import nutritional_supplements from "../assets/img/baby/milk-powder.png";

type NewbabyQuestionFormat = {
  question: string;
  type: QType;
  icons?: { src: string; name: string }[];
  setName?: boolean;
  multipleChoices?: boolean;
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
    question: "baby_questions.weight",
    type: "Number",
  },
  {
    question: "baby_questions.feed",
    type: "RadioIcons",
    multipleChoices: true,
    icons: [
      { src: mother_milk, name: "feed.mother_milk" },
      { src: milk_powder, name: "feed.milk_powder" },
    ],
  },
  {
    question: "baby_questions.complement",
    type: "RadioIcons",
    multipleChoices: true,
    icons: [
      { src: mother_milk, name: "feed.mother_milk" },
      { src: milk_powder, name: "feed.milk_powder" },
    ],
  },
  {
    question: "baby_questions.old",
    type: "Number",
  },
  {
    question: "baby_questions.cut_off_milk",
    type: "Date",
  },
];
