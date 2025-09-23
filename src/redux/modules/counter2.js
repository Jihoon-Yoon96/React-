import { createSlice } from "@reduxjs/toolkit";

const counter2 = createSlice({
  name: "counter2",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => { state.value += action.payload },
    decrement: (state, action) => { state.value -= action.payload },
  },
});

export const { increment, decrement } = counter2.actions; // action creator (컴포넌트에서 dispatch하기 위한 용도)
export default counter2.reducer; // store에 reducer 등록
