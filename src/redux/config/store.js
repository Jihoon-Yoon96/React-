import { configureStore } from "@reduxjs/toolkit";

import counter2 from "../modules/counter2";
import modals from "../modules/modals";

const store = configureStore({
  reducer: {
    counter2,
    modals
  },
});

export default store; 