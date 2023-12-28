import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTranslation } from "../../scripts/translateRequest";

export const fetchTranslation = createAsyncThunk(
  "Translator/fetchTranslation",
  async ({ text, targetLanguage, sourceLanguage }, thunkAPI) => {
    let response = "";
    try {
      response = await getTranslation(text, targetLanguage, sourceLanguage);
    } catch (error) {
      console.log(error);
    }
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
    targetPanelPlaceholder: "Translation",
  },
  reducers: {
    setDebouncedText: (state, action) => {
      state.debouncedText = action.payload;
      if (action.payload === "") {
        state.isLoading = false;
        state.targetPanelPlaceholder = "Nothing to translate";
      } else {
        state.isLoading = true;
      }
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
    swapPanelsContent: (state, action) => {
      const tempLang = state.languages.sourceLang;
      state.languages.sourceLang = state.languages.targetLang;
      state.languages.targetLang = tempLang;

      state.debouncedText = action.payload;
    },
    setTargetPanelPlaceholder: (state, action) => {
      state.targetPanelPlaceholder = action.payload;
    },
  },
  extraReducers: {
    [fetchTranslation.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchTranslation.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.translatedText = action.payload;
      state.isLoading = false;
    },
    [fetchTranslation.rejected]: (state, action) => {
      console.log("translation fetching failed");
      state.isLoading = false;
      state.translatedText = "translation failed";
    },
  },
};

const translatorSlice = createSlice(options);

export default translatorSlice.reducer;

export const {
  setSourceLang,
  setTargetLang,
  setDebouncedText,
  setTranslatedText,
  swapPanelsContent,
} = translatorSlice.actions;
