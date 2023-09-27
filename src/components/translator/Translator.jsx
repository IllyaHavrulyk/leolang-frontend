import React, { useEffect } from "react";
import { getTranslation } from "../../scripts/translateRequest";
import translatorStyles from "./translator.module.css";

import Textarea from "./textarea/Textarea";
import Controls from "./controls/Controls";
import Spinner from "./spinner/Spinner";

function Translator() {
  const [debouncedText, setDebouncedText] = React.useState("");
  const [translatedText, setTranslatedText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const isMounted = React.useRef(false);

  const [sourceLanguage, setSourceLanguage] = React.useState("en");
  const [targetLanguage, setTargetLanguage] = React.useState("de");

  useEffect(() => {
    const newProvidedText = debouncedText.trim();

    const timer = setTimeout(() => {
      if (isMounted.current) {
        getTranslation(newProvidedText, targetLanguage)
          .then((response) => {
            setTranslatedText(response);
          })
          .catch((err) => {
            console.error(err);
            if (newProvidedText === "") {
              setTranslatedText("nothing to translate");
            } else {
              setTranslatedText("Error in translation");
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        isMounted.current = true;
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [debouncedText, targetLanguage, isLoading]);

  return (
    <div className={translatorStyles.translator}>
      <div className={translatorStyles.wrapper}>
        <div className={translatorStyles.textinput}>
          <Textarea
            className={`${translatorStyles.textarea} ${translatorStyles.areaLeft}`}
            placeholder="Enter text"
            value={debouncedText}
            onChange={(e) => {
              setIsLoading(true);
              setDebouncedText(e.target.value);
            }}
          ></Textarea>
          {isLoading ? (
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
