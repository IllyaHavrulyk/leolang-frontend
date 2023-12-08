import React, { useCallback } from "react";
import controlsStyles from "./controls.module.css";
import { useSelector, useDispatch } from "react-redux";
import ControlBtns from "./controlBtns/ControlBtns";
import LanguagesDropdown from "./languagesDropdown/LanguagesDropdown";
import SwapLanguagesBtn from "./swapLanguagesBtn/SwapLanguagesBtn";
import {
  setSourceLang,
  setTargetLang,
  setDebouncedText,
  setTranslatedText,
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
        <ControlBtns text={sourceText} language={languages.sourceLang} />
        <LanguagesDropdown
          language={languages.sourceLang}
          handleChange={handleSelectLeft}
        />
      </div>
      <SwapLanguagesBtn languages={languages} translatedText={translatedText} />
      <div className={controlsStyles.toGroup}>
        <LanguagesDropdown
          language={languages.targetLang}
          handleChange={handleSelectRight}
        />
        <ControlBtns text={translatedText} language={languages.targetLang} />
      </div>
    </div>
  );
}
export default React.memo(TranslatorControls);
