import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IBotsState {
  id: number,
  token: string,
  isDeleted: boolean,
  isActive: boolean,
  botType: string,
  thresholdPrice: string,
  createdAt: number,
}

const initialState = {
  data: [
    {
      id: 1,
      token: "9ceEjz32cv8jBcqsppgjrryiE2tor7PCm7j9mYk8gzTk",
      isDeleted: false,
      isActive: true,
      botType: "trading",
      thresholdPrice: '0.12',
      createdAt: Math.trunc(new Date().getTime() / 1000 - 10000),
    },

  ]
};

export const botsSlice = createSlice({
  name: "bots",
  initialState,
  reducers: {
    setBotsState: (state, action: PayloadAction<IBotsState[]>) => {
      state.data = action.payload;
    }
  },
});

export const { setBotsState } = botsSlice.actions;
export const botsReducer = botsSlice.reducer;