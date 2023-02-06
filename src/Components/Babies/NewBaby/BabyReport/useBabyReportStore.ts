import { BabyRecordDataStructure } from "./Charts/Tabs";
import { create } from "zustand";

type FormStateType = {
  state: "Edit" | "New" | "Confirm_Delete" | "None";
  editDelID: string | null;
};
export interface BabyReportType {
  name: string | null;
  age: string | null;
  avatar: string | null;
  gender: number;
  babyDataSet: BabyRecordDataStructure[];
  formState: FormStateType;
  addBabyData: (record: BabyRecordDataStructure) => void;
  editBabyData: (record: BabyRecordDataStructure) => void;
  deleteBabyData: () => void;
  startEdit: (id: string) => void;
  startDelete: (id: string) => void;
  startNew: () => void;
  cancelAction: () => void;
}

const useBabyReportStore = create<BabyReportType>((set, get) => ({
  name: null,
  age: null,
  avatar: null,
  gender: 1,
  babyDataSet: [],
  formState: { state: "None", editDelID: null },
  addBabyData: (newRecord) => {
    const newRecords = get().babyDataSet;
    newRecords.push(newRecord);
    const formState = get().formState;
    formState.state = "None";
    set({ babyDataSet: newRecords, formState });
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
}));

export default useBabyReportStore;
