import React, { useCallback } from "react";
import controlsStyles from "./controls.module.css";
import { useSelector, useDispatch } from "react-redux";
import TranslatorActions from "../../translatorActions/TranslatorActions";
import LanguagesDropdown from "../../languagesDropdown/LanguagesDropdown";
import SwapLanguagesBtn from "../../swapLanguagesBtn/SwapLanguagesBtn";
import {
  setSourceLang,
  setTargetLang,
} from "../../../state/slices/translatorSlice";

function TranslatorControls() {
  const languages = useSelector((state) => state.translator.languages);
  const sourceText = useSelector((state) => state.translator.debouncedText);
  const translatedText = useSelector(
    (state) => state.translator.translatedText
  );

  const dispatch = useDispatch();

  const handleSelectLeft = useCallback(
    (e) => dispatch(setSourceLang(e.target.value)),
    []
  );

  const handleSelectRight = useCallback(
    (e) => dispatch(setTargetLang(e.target.value)),
    []
  );

  return (
    <div className={controlsStyles.controls}>
      <div className={controlsStyles.fromGroup}>
        <TranslatorActions text={sourceText} language={languages.sourceLang} />
        <LanguagesDropdown
          language={languages.sourceLang}
          handleChange={handleSelectLeft}
        />
      </div>
      <SwapLanguagesBtn translatedText={translatedText} />
      <div className={controlsStyles.toGroup}>
        <LanguagesDropdown
          language={languages.targetLang}
          handleChange={handleSelectRight}
        />
        <TranslatorActions
          text={translatedText}
          language={languages.targetLang}
        />
      </div>
    </div>
  );
}
export default React.memo(TranslatorControls);
