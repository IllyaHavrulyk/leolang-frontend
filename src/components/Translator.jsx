import React, { useEffect } from "react";
import { getTranslation } from "./scripts/translateRequest";
import translatorStyles from "../styles/translator.module.css";
import Controls from "./Controls";
import Spinner from "./Spinner";

function Translator() {
  const [providedText, setProvidedText] = React.useState("");
  const [debouncedText, setDebouncedText] = React.useState("");
  const [translatedText, setTranslatedText] = React.useState("");

  const isLoading = React.useRef(false);

  const isMounted = React.useRef(false);

  const [sourceLanguage, setSourceLanguage] = React.useState("en");
  const [targetLanguage, setTargetLanguage] = React.useState("de");

  useEffect(() => {
    const newProvidedText = debouncedText.trim();
    if (!!newProvidedText) {
      isLoading.current = true;
    }
    const timer = setTimeout(() => setProvidedText(newProvidedText), 500);
    return () => clearTimeout(timer);
  }, [debouncedText]);

  useEffect(() => {
    if (providedText !== "" && providedText.length > 2) {
      getTranslation(providedText, targetLanguage)
        .then((response) => {
          isLoading.current = false;
          console.log(response);
          setTranslatedText(response);
        })
        .catch((err) => {
          isLoading.current = false;
          setTranslatedText("error");
        });
    } else {
      isMounted.current = true;
    }
  }, [providedText, targetLanguage]);

  function handleSetSourceLanguage(sourceLanguage) {
    setSourceLanguage(sourceLanguage);
  }
  function handleSetTargetLanguage(targetLanguage) {
    setTargetLanguage(targetLanguage);
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
          {isLoading.current ? (
            <Spinner />
          ) : (
            <textarea
              className={`${translatorStyles.textarea} ${translatorStyles.areaRight}`}
              placeholder="Translation"
              readOnly={true}
              disabled={true}
              value={translatedText}
            ></textarea>
          )}
        </div>
        <Controls
          sourceLanguage={sourceLanguage}
          handleSetSourceLanguage={handleSetSourceLanguage}
          targetLanguage={targetLanguage}
          handleSetTargetLanguage={handleSetTargetLanguage}
        />
      </div>
    </div>
  );
}

export default Translator;
