import { configureStore } from "@reduxjs/toolkit";
import translatorReducer from "./slices/translatorSlice";

const store = configureStore({
  reducer: {
    translator: translatorReducer,
  },
});

export default store;
