import { Qtype } from "../../Components/Babies/NewBaby/NewBaby";
import boy from "../../assets/img/baby/boy.png";
import girl from "../../assets/img/baby/girl.png";
import mother_milk from "../../assets/img/baby/mother-milk.png";
import milk_powder from "../../assets/img/baby/milk-powder.png";
import fe from "../../assets/img/baby/fe.png";
import ad from "../../assets/img/baby/ad.png";
export type IconType = {
  src: string;
  name: string;
  id: number;
};
export type NewbabyQuestionFormat = {
  title: string;
  question: string;
  type: Qtype;
  label?: string;
  icons?: IconType[];
  required?: boolean;
};
export const NewBabyQuestions: NewbabyQuestionFormat[] = [
  {
    title: "gender",
    question: "baby_questions.gender",
    type: "RadioIcons",
    icons: [
      { src: boy, name: "gender.boy", id: 1 },
      { src: girl, name: "gender.girl", id: 2 },
    ],
    required: true,
  },
  {
    title: "name",
    question: "baby_questions.name",
    type: "Text",
    label: "labels.name",
    required: true,
  },
  {
    title: "birthday",
    question: "baby_questions.birthday",
    type: "Date",
    label: "labels.birthday",
    required: true,
  },
  {
    title: "born_weight",
    question: "baby_questions.weight",
    label: "labels.weight",
    type: "Number",
    required: true,
  },
  {
    title: "feed",
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
    title: "suplement",
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
    title: "suplement_when",
    question: "baby_questions.suplement_when",
    label: "labels.suplement_when",
    type: "Number",
  },
  {
    title: "cut_off_milk",
    question: "baby_questions.cut_off_milk",
    label: "labels.cut_off_milk",
    type: "Number",
    required: true,
  },
  {
    title: "birth_interval",
    question: "baby_questions.birth_interval",
    label: "labels.birth_interval",
    type: "Number",
  },
  {
    title: "family_dimention",
    question: "baby_questions.family_dimention",
    label: "labels.family_dimention",
    type: "Number",
  },
  {
    title: "mothers_education",
    question: "baby_questions.mothers_education",
    label: "labels.mothers_education",
    type: "Text",
  },
  {
    title: "fathers_education",
    question: "baby_questions.mothers_career",
    label: "labels.mothers_career",
    type: "Text",
  },
  {
    title: "special_diet",
    question: "baby_questions.special_diet",
    label: "labels.special_diet",
    type: "Text",
  },
  {
    title: "fathers_height",
    question: "baby_questions.fathers_height",
    label: "labels.fathers_height",
    type: "Number",
  },
  {
    title: "mothers_height",
    question: "baby_questions.mothers_height",
    label: "labels.mothers_height",
    type: "Number",
  },
];
