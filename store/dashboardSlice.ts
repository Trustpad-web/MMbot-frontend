import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IDashboardState {
  id: number,
  address: string,
  balance: number,
  incomeState: {
    current: number,
    previous: number
  }
}

const initialState = {
  data: {
    id: 0,
    address: '',
    balance: 0,
    incomeState: {
      current: 0,
      previous: 0
    }
  }
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardState: (state, action: PayloadAction<IDashboardState>) => {
      state.data = action.payload;
    },
  },
});

export const { setDashboardState } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;