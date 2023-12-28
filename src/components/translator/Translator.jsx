import React, { useEffect, useCallback } from "react";
import translatorStyles from "./translator.module.css";

import { useSelector, useDispatch } from "react-redux";

import {
  setDebouncedText,
  setTranslatedText,
  fetchTranslation,
  setSourceLang,
  setTargetLang,
} from "../../state/slices/translatorSlice";

import TextInteractionPanel from "./textInteractionPanel/TextInteractionPanel";
import SwapLanguagesBtn from "../../components/swapLanguagesBtn/SwapLanguagesBtn";

function Translator() {
  const debouncedText = useSelector((state) => state.translator.debouncedText);
  const translatedText = useSelector((state) => state.translator.translatedText);
  const targetPanelPlaceholder = useSelector((state) => state.translator.targetPanelPlaceholder);

  const isLoading = useSelector((state) => state.translator.isLoading);
  const { targetLang, sourceLang } = useSelector((state) => state.translator.languages);

  const dispatch = useDispatch();

  const handleSelectLeft = useCallback((e) => dispatch(setSourceLang(e.target.value)), []);
  const handleSelectRight = useCallback((e) => dispatch(setTargetLang(e.target.value)), []);

  useEffect(() => {
    if (debouncedText) {
      const sourceText = debouncedText.trim();
      console.log("effect fired");
      const timer = setTimeout(
        () => handeTranslationRequest(sourceText, targetLang, sourceLang),
        500
      );

      return () => clearTimeout(timer);
    }
  }, [debouncedText, targetLang, sourceLang]);

  const handeTranslationRequest = (text, targetLanguage, sourceLanguage) => {
    const validText = text !== "" && text.length > 2;
    console.log(`${validText} inside of translation request function`);

    if (validText) {
      dispatch(fetchTranslation({ text, targetLanguage, sourceLanguage }));
    } else {
      dispatch(setTranslatedText("Nothing to translate"));
    }
  };

  return (
    <div className={translatorStyles.translator}>
      <div className={translatorStyles.wrapper}>
        <TextInteractionPanel
          placeholder="Enter text"
          value={debouncedText}
          handleDebouncing={(e) => {
            console.log("text handling function fired");
            dispatch(setDebouncedText(e.target.value));
          }}
          handleSelect={handleSelectLeft}
          isOutput={false}
          language={sourceLang}
        />
        <SwapLanguagesBtn />
        <TextInteractionPanel
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
