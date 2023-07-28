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

  const [initialLanguage, setInitialLanguage] = React.useState("en");
  const [translationLanguage, setTranslationLanguage] = React.useState("de");

  useEffect(() => {
    isLoading.current = true;
    const newProvidedText = debouncedText.trim();
    const timer = setTimeout(() => setProvidedText(newProvidedText), 1000);
    return () => clearTimeout(timer);
  }, [debouncedText]);

  useEffect(() => {
    console.log("request sent", isLoading.current);
    if (providedText !== "" && providedText.length > 2) {
      getTranslation(providedText, translationLanguage)
        .then((response) => {
          isLoading.current = false;
          console.log(response);
          setTranslatedText(response);
        })
        .catch((err) => {
          isLoading.current = false;
          console.log(err);
          setTranslatedText("error");
        });
    } else {
      isMounted.current = true;
    }
  }, [providedText, translationLanguage, isLoading, isMounted]);

  function handleSetInitialLanguage(initialLanguage) {
    setInitialLanguage(initialLanguage);
  }
  function handleSetTranslationLanguage(toLanguage) {
    setTranslationLanguage(toLanguage);
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
          fromLanguage={initialLanguage}
          handleSetFromLanguage={handleSetInitialLanguage}
          toLanguage={translationLanguage}
          handleSetToLanguage={handleSetTranslationLanguage}
        />
      </div>
    </div>
  );
}

export default Translator;
