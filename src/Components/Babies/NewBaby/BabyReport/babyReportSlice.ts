import { FieldState } from "./../../../../hooks/useValidation";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BabyRecordDataStructure } from "./BabyReport";

type FormStateType = {
  state: "Edit" | "New" | "Confirm_Delete" | "None";
  editDelID: string | null;
};
type FormFieldState = { value: string; state: FieldState };
export interface BabyReportType {
  name: string | null;
  age: string | null;
  avatar: string | null;
  gender: number;
  babyDataSet: BabyRecordDataStructure[];
  formState: FormStateType;
}

const initialState: BabyReportType = {
  name: null,
  age: null,
  avatar: null,
  gender: 1,
  babyDataSet: [
    {
      date: "2022-10-02",
      weight: 3200,
      length: 50,
      headCircumference: 41,
      id: "1",
    },
    {
      date: "2022-11-02",
      weight: 3500,
      length: 52,
      headCircumference: 42,
      id: "2",
    },
    {
      date: "2022-12-13",
      weight: 5200,
      length: 54,
      headCircumference: 43,
      id: "3",
    },
    {
      date: "2022-12-13",
      weight: 5200,
      length: 54,
      headCircumference: 43,
      id: "4",
    },
  ],
  formState: { state: "None", editDelID: null },
};

export const babyReportSlice = createSlice({
  name: "babyReport",
  initialState,
  reducers: {
    addBabyData: (state, action: PayloadAction<BabyRecordDataStructure>) => {
      const data = state.babyDataSet;
      data.push(action.payload);
      state.formState.state = "None";
    },
    editBabyData: (state, action: PayloadAction<BabyRecordDataStructure>) => {
      const index = state.babyDataSet.findIndex(
        (item) => item.id === state.formState.editDelID!
      )!;
      state.babyDataSet[index] = action.payload;
      state.formState.state = "None";
    },
    deleteBabyData: (state) => {
      state.babyDataSet = state.babyDataSet.filter(
        (item) => item.id !== state.formState.editDelID
      );
      state.formState.state = "None";
    },
    startEdit: (state, action: PayloadAction<string>) => {
      state.formState.state = "Edit";
      state.formState.editDelID = action.payload;
    },
    startDelete: (state, action: PayloadAction<string>) => {
      state.formState.state = "Confirm_Delete";
      state.formState.editDelID = action.payload;
    },
    startNew: (state) => {
      state.formState.state = "New";
    },
    cancelAction: (state) => {
      state.formState.state = "None";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBabyData,
  deleteBabyData,
  editBabyData,
  startDelete,
  startEdit,
  cancelAction,
  startNew,
} = babyReportSlice.actions;

export default babyReportSlice.reducer;
