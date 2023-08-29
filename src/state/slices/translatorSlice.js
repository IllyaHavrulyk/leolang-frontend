import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchTranslation = createAsyncThunk("Translator/fetchTranslation");

const options = {
  name: "Translator",
  initialState: {
    debouncedText: "",
    translatedText: "",
    isLoading: false,
    sourceLang: "en",
    targetLang: "de",
  },
  reducers: {
    setSourceLang: (state, action) => {
      state.sourceLang = action.payload;
    },
    setTargetLang: (state, action) => {
      state.targetLang = action.payload;
    },
  },
};
