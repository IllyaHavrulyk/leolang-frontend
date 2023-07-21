import React, { useEffect } from "react";
import { translateText } from "../functions";
import translatorStyles from "../styles/translator.module.css";
import Controls from "./Controls";

function Translator() {
  const [providedText, setProvidedText] = React.useState("");
  const [debouncedText, setDebouncedText] = React.useState("");
  const [fromLanguage, setFromlanguage] = React.useState("en-GB");
  const [toLanguage, setToLanguage] = React.useState("en-GB");

  function handleSetFromLanguage(fromLanguage) {
    setFromlanguage(fromLanguage);
  }
  function handleSetToLanguage(toLanguage) {
    setToLanguage(toLanguage);
  }

  useEffect(() => {
    const timer = setTimeout(() => setProvidedText(debouncedText), 1000);
    console.log(providedText);
    return () => clearTimeout(timer);
  }, [debouncedText]);

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
          ></textarea>
        </div>
        <Controls
          fromLanguage={fromLanguage}
          handleSetFromLanguage={handleSetFromLanguage}
          toLanguage={toLanguage}
          handleSetToLanguage={handleSetToLanguage}
        />
      </div>
      <button onClick={translateText}>Translate Text</button>
    </div>
  );
}

export default Translator;
