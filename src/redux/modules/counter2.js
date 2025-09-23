import { createSlice } from "@reduxjs/toolkit";

const counter2 = createSlice({
  name: "counter2",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = counter2.actions;
export default counter2.reducer;
