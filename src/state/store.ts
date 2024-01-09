import translatorReducer from "./slices/translatorSlice";
import { configureStore } from "../../node_modules/@reduxjs/toolkit/dist/configureStore";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    translator: translatorReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;