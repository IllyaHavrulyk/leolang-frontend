import React, { useEffect } from "react";
import translatorStyles from "./translator.module.css";

import { useSelector, useDispatch } from "react-redux";
import {
  toggleLoading,
  setDebouncedText,
  setTranslatedText,
} from "../../state/slices/translatorSlice";
import { fetchTranslation } from "../../state/slices/translatorSlice";

import Textarea from "./textarea/Textarea";
import Controls from "./controls/Controls";
import Spinner from "./spinner/Spinner";

function Translator() {
  const debouncedText = useSelector((state) => state.translator.debouncedText);
  const translatedText = useSelector(
    (state) => state.translator.translatedText
  );
  const isLoading = useSelector((state) => state.translator.isLoading);
  const { targetLang } = useSelector((state) => state.translator.languages);

  const isMounted = React.useRef(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const sourceText = debouncedText.trim();

    const validText = sourceText !== "" && sourceText.length > 2;

    const timer = setTimeout(() => {
      if (isMounted.current && validText) {
        dispatch(fetchTranslation({ sourceText, targetLang }));
      } else {
        isMounted.current = true;
        dispatch(setTranslatedText("Nothing to translate"));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [debouncedText, targetLang]);

  return (
    <div className={translatorStyles.translator}>
      <div className={translatorStyles.wrapper}>
        <div className={translatorStyles.textinput}>
          <Textarea
            className={`${translatorStyles.textarea} ${translatorStyles.areaLeft}`}
            placeholder="Enter text"
            value={debouncedText}
            onChange={(e) => {
              dispatch(setDebouncedText(e.target.value));
              dispatch(toggleLoading(true));
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
        <Controls />
      </div>
    </div>
  );
}

export default Translator;
