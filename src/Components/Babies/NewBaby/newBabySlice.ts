import { FieldState } from "./../../../hooks/useValidation";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NewBabyQuestions } from "../../../utils/Babies/Babies";

export interface newBabyDataType {
  type: "Edit" | "New";
  answers: { value: string; state: FieldState }[];
  step: number;
}

const initialState: newBabyDataType = {
  type: "New",
  answers: Array(NewBabyQuestions.length).fill({
    value: "",
    state: "NOT_VALIDATED",
  }),
  step: 0,
};

export const newBabySlice = createSlice({
  name: "newBaby",
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<number>) => {
      //usCed by Step Component generally
      const step = action.payload;
      if (step >= 0 && step < NewBabyQuestions.length)
        state.step = action.payload;
    },
    goNextStep: (state) => {
      state.step =
        state.step < NewBabyQuestions.length - 1 ? state.step + 1 : state.step;
    },
    goPrevStep: (state) => {
      state.step = state.step > 0 ? state.step - 1 : state.step;
    },
    userEnteredData: (
      state,
      action: PayloadAction<{ state: FieldState; value: string }>
    ) => {
      state.answers[state.step] = action.payload;
    },
    presetEditData: (
      state,
      action: PayloadAction<{ value: string; state: FieldState }[]>
    ) => {
      state.answers = action.payload;
    },
    editOn: (state) => {
      state.type = "Edit";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeStep,
  goNextStep,
  goPrevStep,
  userEnteredData,
  presetEditData,
  editOn,
} = newBabySlice.actions;

export default newBabySlice.reducer;
