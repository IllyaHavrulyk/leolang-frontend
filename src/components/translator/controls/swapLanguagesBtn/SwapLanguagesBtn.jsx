import React from "react";
import controlsStyles from "../controls.module.css";

import {
  setSourceLang,
  setTargetLang,
  setDebouncedText,
  setTranslatedText,
} from "../../../../state/slices/translatorSlice";
import { useDispatch } from "react-redux";

function SwapLanguagesBtn({ languages, translatedText }) {
  const dispatch = useDispatch();
  function swapLanguages(languages) {
    dispatch(setTargetLang(languages.sourceLang));
    dispatch(setSourceLang(languages.targetLang));
    dispatch(setTranslatedText(""));
    dispatch(setDebouncedText(translatedText));
  }

  return (
    <i
      className={`fas fa-exchange-alt ${controlsStyles.iconButton}`}
      onClick={(e) => swapLanguages(languages)}
    ></i>
  );
}

export default SwapLanguagesBtn;
