import { Qtype } from "../Components/Babies/NewBaby/NewBaby";
import boy from "../assets/img/baby/boy.png";
import girl from "../assets/img/baby/girl.png";
import mother_milk from "../assets/img/baby/mother-milk.png";
import milk_powder from "../assets/img/baby/milk-powder.png";
import fe from "../assets/img/baby/fe.png";
import ad from "../assets/img/baby/ad.png";
import { IconList } from "../Components/UI/Icon/Icon";
export type IconType = {
  src: string;
  name: string;
  id: number;
};
export type NewbabyQuestionFormat = {
  id: number;
  question: string;
  type: Qtype;
  label?: string;
  icons?: IconType[];
  required?: boolean;
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
    required: true,
  },
  {
    id: 2,
    question: "baby_questions.name",
    type: "Text",
    label: "labels.name",
    required: true,
  },
  {
    id: 3,
    question: "baby_questions.weight",
    label: "labels.weight",
    type: "Number",
    required: true,
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
    required: true,
  },
  {
    id: 5,
    question: "baby_questions.suplement",
    type: "MultipleIcons",
    icons: [
      {
        src: fe,
        name: "suplement.fe",
        id: 1,
      },
      {
        src: ad,
        name: "suplement.ad",
        id: 2,
      },
    ],
  },
  {
    id: 6,
    question: "baby_questions.suplement_when",
    label: "labels.suplement_when",
    type: "Date",
  },
  {
    id: 7,
    question: "baby_questions.cut_off_milk",
    label: "labels.cut_off_milk",
    type: "Date",
    required: true,
  },
  {
    id: 8,
    question: "baby_questions.birth_interval",
    label: "labels.birth_interval",
    type: "Number",
  },
  {
    id: 9,
    question: "baby_questions.family_dimention",
    label: "labels.family_dimention",
    type: "Number",
  },
  {
    id: 10,
    question: "baby_questions.mothers_education",
    label: "labels.mothers_education",
    type: "Text",
  },
  {
    id: 11,
    question: "baby_questions.mothers_career",
    label: "labels.mothers_career",
    type: "Text",
  },
  {
    id: 12,
    question: "baby_questions.special_diet",
    label: "labels.special_diet",
    type: "Text",
  },
  {
    id: 13,
    question: "baby_questions.fathers_height",
    label: "labels.fathers_height",
    type: "Number",
  },
  {
    id: 14,
    question: "baby_questions.mothers_height",
    label: "labels.mothers_height",
    type: "Number",
  },
];
