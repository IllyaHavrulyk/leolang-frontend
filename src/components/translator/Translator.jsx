import React, { useEffect } from "react";
import { getTranslation } from "../../scripts/translateRequest";
import translatorStyles from "./translator.module.css";

import Textarea from "./textarea/Textarea";
import Controls from "./controls/Controls";
import Spinner from "./spinner/Spinner";

function Translator() {
  const [debouncedText, setDebouncedText] = React.useState("");
  const [translatedText, setTranslatedText] = React.useState("");

  const isLoading = React.useRef(false);
  const isMounted = React.useRef(false);

  const [sourceLanguage, setSourceLanguage] = React.useState("en");
  const [targetLanguage, setTargetLanguage] = React.useState("de");

  useEffect(() => {
    const newProvidedText = debouncedText.trim();

    if (newProvidedText !== "") {
      isLoading.current = true;
    }

    const timer = setTimeout(() => {
      if (isMounted.current) {
        getTranslation(newProvidedText, targetLanguage)
          .then((response) => {
            isLoading.current = false;
            setTranslatedText(response);
          })
          .catch((err) => {
            isLoading.current = false;
            console.error(err);
            if (newProvidedText === "") {
              setTranslatedText("nothing to translate");
            } else {
              setTranslatedText("Error in translation");
            }
          });
      } else {
        isMounted.current = true;
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [debouncedText, targetLanguage]);

  return (
    <div className={translatorStyles.translator}>
      <div className={translatorStyles.wrapper}>
        <div className={translatorStyles.textinput}>
          <Textarea
            className={`${translatorStyles.textarea} ${translatorStyles.areaLeft}`}
            placeholder="Enter text"
            value={debouncedText}
            onChange={(e) => setDebouncedText(e.target.value)}
          ></Textarea>
          {isLoading.current ? (
            <Spinner />
          ) : (
            <Textarea
              className={`${translatorStyles.textarea} ${translatorStyles.areaRight}`}
              placeholder="Translation"
              readOnly={true}
              disabled={true}
              value={translatedText}
            ></Textarea>
          )}
        </div>
        <Controls
          sourceLanguage={sourceLanguage}
          handleSetSourceLanguage={setSourceLanguage}
          targetLanguage={targetLanguage}
          handleSetTargetLanguage={setTargetLanguage}
        />
      </div>
    </div>
  );
}

export default Translator;
