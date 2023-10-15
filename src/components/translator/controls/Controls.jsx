import React from "react";
import controlsStyles from "./controls.module.css";
import countries from "../../../scripts/countries";
import { useSelector, useDispatch } from "react-redux";
import {
  setSourceLang,
  setTargetLang,
  setDebouncedText,
  setTranslatedText,
} from "../../../state/slices/translatorSlice";

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error(err);
  }
}

function sayText(text, lang) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  speechSynthesis.speak(utterance);
}

function TranslatorControls() {
  const languages = useSelector((state) => state.translator.languages);
  const sourceText = useSelector((state) => state.translator.debouncedText);
  const translatedText = useSelector(
    (state) => state.translator.translatedText
  );

  const dispatch = useDispatch();

  function fillLanguageOptions() {
    return Object.keys(countries).map((country_code) => {
      return (
        <option value={country_code} key={country_code}>
          {countries[country_code]}
        </option>
      );
    });
  }

  function swapLanguages(languages) {
    dispatch(setTargetLang(languages.sourceLang));
    dispatch(setSourceLang(languages.targetLang));
    const newDebouncedText = translatedText;
    dispatch(setTranslatedText(""));
    dispatch(setDebouncedText(newDebouncedText));
  }

  return (
    <div className={controlsStyles.controls}>
      <div className={controlsStyles.fromGroup}>
        <div className={controlsStyles.icons}>
          <i
            className={`fas fa-volume-up ${controlsStyles.iconButton}`}
            onClick={() => sayText(sourceText, languages.sourceLang)}
          ></i>
          <i
            className={`fas fa-copy ${controlsStyles.iconButton}`}
            onClick={() => {
              copyToClipboard(sourceText);
            }}
          ></i>
        </div>
        <select
          value={languages.sourceLang}
          onChange={(e) => dispatch(setSourceLang(e.target.value))}
        >
          {fillLanguageOptions()}
        </select>
      </div>
      <i
        className={`fas fa-exchange-alt ${controlsStyles.iconButton}`}
        onClick={(e) => swapLanguages(languages)}
      ></i>
      <div className={controlsStyles.toGroup}>
        <select
          value={languages.targetLang}
          onChange={(e) => dispatch(setTargetLang(e.target.value))}
        >
          {fillLanguageOptions()}
        </select>
        <div className={controlsStyles.icons}>
          <i
            className={`fas fa-volume-up ${controlsStyles.iconButton}`}
            onClick={() => sayText(translatedText, languages.targetLang)}
          ></i>
          <i
            className={`fas fa-copy ${controlsStyles.iconButton}`}
            onClick={() => copyToClipboard(translatedText)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TranslatorControls);
