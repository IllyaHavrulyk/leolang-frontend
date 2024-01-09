import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getTranslation, TranslationReqProps } from '../../scripts/translateRequest';

export const fetchTranslation = createAsyncThunk(
    "Translator/fetchTranslation",
    async ({ text, targetLanguage, sourceLanguage }: TranslationReqProps, thunkAPI) => {
      let response = "";
      try {
        response = await getTranslation(text, targetLanguage, sourceLanguage);
      } catch (error) {
        console.log(error);
      }
      return response;
    }
  );

  interface TranslatorState {
    debouncedText: string,
    translatedText: string,
    isLoading: boolean,
    languages: {sourceLang: string, targetLang: string},
    targetPanelPlaceholder: string
  }

  const initialState: TranslatorState = {
    debouncedText: "",
    translatedText: "",
    isLoading: false,
    languages: {
      sourceLang: "en",
      targetLang: "de",
    },
    targetPanelPlaceholder: "Translation",
  }

  const options = {
    name: "translator",
    initialState,
    reducers: {
      setDebouncedText: (state, action: PayloadAction<string>) => {
        state.debouncedText = action.payload;
        if (action.payload === "") {
          state.isLoading = false;
          state.targetPanelPlaceholder = "Nothing to translate";
        } else {
          state.isLoading = true;
        }
      },
      setTranslatedText: (state, action: PayloadAction<string>) => {
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