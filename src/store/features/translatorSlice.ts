import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { getTranslation } from "../../scripts/translateRequest";

interface fetchTranslationReqs {
    text: string,
    targetLanguage: string,
    sourceLanguage: string
}

export const fetchTranslation = createAsyncThunk(
    "Translator/fetchTranslation",
    async ({ text, targetLanguage, sourceLanguage }: fetchTranslationReqs) => {
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
    isLoading: boolean;
    languages: {sourceLang: string, targetLang: string},
    targetPanelPlaceholder: string
}; 

const initialState: TranslatorState  = {
    debouncedText: "",
    translatedText: "",
    isLoading: false,
    languages: {
      sourceLang: "en",
      targetLang: "de",
    },
    targetPanelPlaceholder: "Translation",
  }

  const translatorSlice = createSlice({
    name: "translator",
    initialState,
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
    extraReducers: (builder) => {
      builder.addCase(fetchTranslation.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(fetchTranslation.fulfilled, (state, action) => {
        state.translatedText = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(fetchTranslation.rejected, (state) => {
        console.log("translation fetching failed");
        state.isLoading = false;
        state.translatedText = "translation failed";
      })
    }
  })

  export default translatorSlice.reducer;

  export const {
    setSourceLang,
    setTargetLang,
    setDebouncedText,
    setTranslatedText,
    swapPanelsContent,
  } = translatorSlice.actions;