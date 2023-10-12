import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTranslation } from "../../scripts/translateRequest";

export const fetchTranslation = createAsyncThunk(
  "Translator/fetchTranslation",
  async ({ sourceText, targetLang }, thunkAPI) => {
    const response = await getTranslation(sourceText, targetLang);
    return response;
  }
);

const options = {
  name: "translator",
  initialState: {
    debouncedText: "",
    translatedText: "",
    isLoading: false,
    languages: {
      sourceLang: "en",
      targetLang: "de",
    },
  },
  reducers: {
    setDebouncedText: (state, action) => {
      state.debouncedText = action.payload;
    },
    setTranslatedText: (state, action) => {
      state.isLoading = false;
      state.translatedText = action.payload;
    },
    setSourceLang: (state, action) => {
      state.languages.sourceLang = action.payload;
    },
    setTargetLang: (state, action) => {
      state.languages.targetLang = action.payload;
    },
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [fetchTranslation.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchTranslation.fulfilled]: (state, action) => {
      state.translatedText = action.payload;
      state.isLoading = false;
    },
    [fetchTranslation.rejected]: (state, action) => {
      state.isLoading = false;
      state.translatedText = "";
    },
  },
};

const translatorSlice = createSlice(options);

export default translatorSlice.reducer;

export const {
  setSourceLang,
  setTargetLang,
  toggleLoading,
  setDebouncedText,
  setTranslatedText,
} = translatorSlice.actions;
