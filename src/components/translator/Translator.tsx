import React, { useEffect, useCallback } from "react";
import translatorStyles from "./translator.module.css";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import {
  setDebouncedText,
  setTranslatedText,
  fetchTranslation,
  setSourceLang,
  setTargetLang,
} from "../../store/features/translatorSlice";

import TranslatorSide from "./translatorSide/TranslatorSide";
import SwapLanguagesBtn from "./translatorSide/swapLanguagesBtn/SwapLanguagesBtn";

function Translator() {
  const debouncedText = useAppSelector((state) => state.translator.debouncedText);
  const translatedText = useAppSelector((state) => state.translator.translatedText);
  const targetPanelPlaceholder = useAppSelector((state) => state.translator.targetPanelPlaceholder);

  const isLoading = useAppSelector((state) => state.translator.isLoading);
  const { targetLang, sourceLang } = useAppSelector((state) => state.translator.languages);

  const dispatch = useAppDispatch();

  const handleSelectLeft = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => dispatch(setSourceLang(e.target.value)), []);
  const handleSelectRight = useCallback((e:  React.ChangeEvent<HTMLSelectElement>) => dispatch(setTargetLang(e.target.value)), []);

  useEffect(() => {
    if (debouncedText) {
      const sourceText = debouncedText.trim();

      const timer = setTimeout(
        () => handeTranslationRequest(sourceText, targetLang, sourceLang),
        500
      );

      return () => clearTimeout(timer);
    }
  }, [debouncedText, targetLang, sourceLang]);

  const handeTranslationRequest = (text: string, targetLanguage: string, sourceLanguage: string) => {
    const validText = text !== "" && text.length > 2;

    if (validText) {
      dispatch(fetchTranslation({ text, targetLanguage, sourceLanguage }));
    } else {
      dispatch(setTranslatedText("Nothing to translate"));
    }
  };

  return (
    <div className={translatorStyles.translator}>
      <div className={translatorStyles.wrapper}>
        <TranslatorSide
          placeholder="Enter text"
          value={debouncedText}
          handleDebouncing={(e) => {
            dispatch(setDebouncedText(e.target.value));
          }}
          handleSelect={handleSelectLeft}
          isOutput={false}
          language={sourceLang}
        />
        <SwapLanguagesBtn />
        <TranslatorSide
          placeholder={targetPanelPlaceholder}
          isOutput={true}
          value={translatedText}
          isLoading={isLoading}
          handleSelect={handleSelectRight}
          language={targetLang}
        />
      </div>
    </div>
  );
}

export default Translator;