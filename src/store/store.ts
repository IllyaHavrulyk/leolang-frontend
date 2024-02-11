import translatorReducer from "../store/features/translatorSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    translator: translatorReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;