"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ChangeState {
  value: string;
  second: boolean;
}

const initialState: ChangeState = {
  value: "",
  second: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
    booleaner: (state) => {
      state.second = !state.second;
    },
  },
});

export const { change, booleaner } = counterSlice.actions;

export default counterSlice.reducer;
