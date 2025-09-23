import { configureStore } from "@reduxjs/toolkit";

import counter2 from "../modules/counter2";

const store = configureStore({
  reducer: {
    counter2
  },
});

export default store; 