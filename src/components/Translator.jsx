import React, { useEffect, useMemo } from "react";
import { getTranslation } from "./scripts/functions";
import translatorStyles from "../styles/translator.module.css";
import Controls from "./Controls";

function Translator() {
  const [providedText, setProvidedText] = React.useState("");
  const [debouncedText, setDebouncedText] = React.useState("");
  const [translatedText, setTranslatedText] = React.useState("");

  useEffect(() => {
    const newProvidedText = debouncedText.trim();
    const timer = setTimeout(() => setProvidedText(newProvidedText), 1000);

    return () => clearTimeout(timer);
  }, [debouncedText]);

  const [fromLanguage, setFromlanguage] = React.useState("en");
  const [toLanguage, setToLanguage] = React.useState("de");

  const translation = useMemo(() => {
    getTranslation(providedText, toLanguage);
  }, [providedText, toLanguage]);

  useEffect(() => {
    setTranslatedText(translation);
  }, [translation]);

  function handleSetFromLanguage(fromLanguage) {
    setFromlanguage(fromLanguage);
  }
  function handleSetToLanguage(toLanguage) {
    setToLanguage(toLanguage);
  }

  return (
    <div className={translatorStyles.translator}>
      <div className={translatorStyles.wrapper}>
        <div className={translatorStyles.textinput}>
          <textarea
            className={`${translatorStyles.textarea} ${translatorStyles.areaLeft}`}
            placeholder="Enter text"
            value={debouncedText}
            onChange={(e) => setDebouncedText(e.target.value)}
          ></textarea>
          <textarea
            className={`${translatorStyles.textarea} ${translatorStyles.areaRight}`}
            placeholder="Translation"
            readOnly={true}
            disabled={true}
            value={translatedText}
          ></textarea>
        </div>
        <Controls
          fromLanguage={fromLanguage}
          handleSetFromLanguage={handleSetFromLanguage}
          toLanguage={toLanguage}
          handleSetToLanguage={handleSetToLanguage}
        />
      </div>
    </div>
  );
}

export default Translator;
