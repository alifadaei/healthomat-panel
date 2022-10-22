import { FieldState } from "./../../../../hooks/useValidation";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BabyRecordDataStructure } from "./BabyReport";

type FormStateType = "Edit" | "New" | "Confirm_Delete";
type FormFieldState = { value: string; state: FieldState };
export interface BabyReportType {
  babyDataSet: BabyRecordDataStructure[];
  formData: {
    date: FormFieldState;
    weight: FormFieldState;
    length: FormFieldState;
    headCircumference: FormFieldState;
  };
  formState: FormStateType;
}

const initialState: BabyReportType = {
  babyDataSet: [
    {
      date: "2022-10-02",
      weight: 3.2,
      length: 50,
      headCircumference: 41,
      id: "1",
    },
    {
      date: "2022-11-02",
      weight: 3.5,
      length: 52,
      headCircumference: 42,
      id: "2",
    },
    {
      date: "2022-12-13",
      weight: 5.2,
      length: 54,
      headCircumference: 43,
      id: "3",
    },
    {
      date: "2022-12-13",
      weight: 5.2,
      length: 54,
      headCircumference: 43,
      id: "4",
    },
  ],
  formData: {
    date: { value: "", state: "NOT_VALIDATED" },
    weight: { value: "", state: "NOT_VALIDATED" },
    length: { value: "", state: "NOT_VALIDATED" },
    headCircumference: { value: "", state: "NOT_VALIDATED" },
  },
  formState: "New",
};

export const babyReportSlice = createSlice({
  name: "babyReport",
  initialState,
  reducers: {
    addBabayData: (state, action: PayloadAction<BabyRecordDataStructure>) => {
      const data = state.babyDataSet;
      data.push(action.payload);
    },
    editBabyData: (state, action: PayloadAction<BabyRecordDataStructure>) => {
      state.babyDataSet.forEach((item) => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
      });
    },
    deleteBabyData: (state, action: PayloadAction<string>) => {
      state.babyDataSet = state.babyDataSet.filter(
        (item) => item.id !== action.payload
      );
    },
    setFormDataDate: (state, action: PayloadAction<FormFieldState>) => {
      state.formData.date = action.payload;
    },
    setFormDataHead: (state, action: PayloadAction<FormFieldState>) => {
      state.formData.headCircumference = action.payload;
    },
    setFormDataLength: (state, action: PayloadAction<FormFieldState>) => {
      state.formData.length = action.payload;
    },
    setFormDataWeight: (state, action: PayloadAction<FormFieldState>) => {
      state.formData.weight = action.payload;
    },
    resetFormData: (state) => {
      state.formData.date = { value: "", state: "NOT_VALIDATED" };
      state.formData.headCircumference = { value: "", state: "NOT_VALIDATED" };
      state.formData.weight = { value: "", state: "NOT_VALIDATED" };
      state.formData.length = { value: "", state: "NOT_VALIDATED" };
    },
    setFormState: (state, action: PayloadAction<FormStateType>) => {
      state.formState = action.payload;
    },
    tryEdit: (state) => {
      state.formState = "Edit";
    },
    tryDelete: (state) => {
      state.formState = "Confirm_Delete";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addBabayData,
  deleteBabyData,
  editBabyData,
  setFormDataDate,
  setFormDataHead,
  setFormDataLength,
  setFormDataWeight,
  setFormState,
} = babyReportSlice.actions;

export default babyReportSlice.reducer;
