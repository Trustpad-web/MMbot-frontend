import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ISettingsState {
  id: number,
  tradeAmount: string,
  limitOrders: string,
  sellProfit: string,
  stopLossAt: string,
  wallet: string
}

const initialState = {
  data: {
    id: 1,
    tradeAmount: "1",
    limitOrders: "1",
    sellProfit: "1",
    stopLossAt: "-15",
    wallet: ''
  }
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettingsState: (state, action: PayloadAction<ISettingsState>) => {
      state.data = action.payload;
    },
  },
});

export const { setSettingsState } = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;