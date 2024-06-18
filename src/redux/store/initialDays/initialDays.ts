import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Vacation,
  VacationsTypes,
} from "../../../types & interfaces/vacations";
import { baseUrl } from "../../../utils/helpers";
import { PickedDaysProps } from "../../../types & interfaces/vacations";

export interface VacationsState {
  avalible: null | number;
  vacations: VacationsTypes[];
  daysPayload: PickedDaysProps[];
  isRefetch: any;
}

const initialState: VacationsState = {
  avalible: null,
  vacations: [],
  daysPayload: [],
  isRefetch: false,
};

export const initialDaysSlice = createSlice({
  name: "vacations",
  initialState,
  reducers: {
    updateDays: (state, action: PayloadAction<number>) => {
      state.avalible = action.payload;
    },
    setAvalibleVacations: (state, action: PayloadAction<VacationsTypes[]>) => {
      state.vacations = action.payload;
    },
    setDaysPayload: (state, action: PayloadAction<PickedDaysProps[]>) => {
      state.daysPayload = action.payload;
    },
    setFetching: (state, action: PayloadAction<any>) => {
      state.isRefetch = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateDays,
  setAvalibleVacations,
  setDaysPayload,
  setFetching,
} = initialDaysSlice.actions;

export default initialDaysSlice.reducer;
