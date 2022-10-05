import boy from "../assets/img/baby/boy.png";
import girl from "../assets/img/baby/girl.png";
import mother_milk from "../assets/img/baby/mother-milk.png";
import milk_powder from "../assets/img/baby/milk-powder.png";
import nutritional_supplements from "../assets/img/baby/milk-powder.png";
import { Qtype } from "../Components/Babies/NewBaby/NewBaby";
export type IconType = {
  src: string;
  name: string;
  id: number;
};
export type NewbabyQuestionFormat = {
  id: number;
  question: string;
  type: Qtype;
  icons?: IconType[];
};
export const NewBabyQuestions: NewbabyQuestionFormat[] = [
  {
    id: 1,
    question: "baby_questions.gender",
    type: "RadioIcons",
    icons: [
      { src: boy, name: "gender.boy", id: 1 },
      { src: girl, name: "gender.girl", id: 2 },
    ],
  },
  {
    id: 2,
    question: "baby_questions.name",
    type: "Text",
  },
  {
    id: 3,
    question: "baby_questions.weight",
    type: "Number",
  },
  {
    id: 4,
    question: "baby_questions.feed",
    type: "RadioIcons",
    icons: [
      {
        src: mother_milk,
        name: "feed.mother_milk",
        id: 1,
      },
      {
        src: milk_powder,
        name: "feed.milk_powder",
        id: 2,
      },
    ],
  },
  {
    id: 5,
    question: "baby_questions.complement",
    type: "MultipleIcons",
    icons: [
      {
        src: mother_milk,
        name: "feed.mother_milk",
        id: 1,
      },
      {
        src: milk_powder,
        name: "feed.milk_powder",
        id: 2,
      },
    ],
  },
  // {
  //   id:
  //   question: "baby_questions.old",
  //   type: "Number",
  // },
  // {
  //   question: "baby_questions.cut_off_milk",
  //   type: "Date",
  // },
];
