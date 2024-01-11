import React from "react";
import styles from "./textPanel.module.css";
import TranslatorBtns from "./translatorBtns/TranslatorBtns";
import LanguagesDropdown from "./languagesDropdown/LanguagesDropdown";

import Textarea from "../textarea/Textarea";
import Spinner from "../spinner/Spinner";

type eventHandler = (e: React.ChangeEvent<HTMLSelectElement>) => void;

interface TranslatorSideProps{
  placeholder: string,
  isOutput: boolean,
  value: string,
  language: string,
  handleSelect: eventHandler,
  handleDebouncing?: eventHandler,
  isLoading?: boolean,
}

function TranslatorSide({
  placeholder,
  isOutput,
  value,
  language,
  handleSelect,
  handleDebouncing,
  isLoading = false,
}: TranslatorSideProps) {
  return (
    <div className={styles.controlsContainer}>
      <div className={styles.controls}>
        <TranslatorBtns text={value} language={language} isOutput={isOutput}/>
        <LanguagesDropdown language={language} handleChange={handleSelect} />
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Textarea
          value={value}
          isOutput={isOutput}
          placeholder={placeholder}
          onChange={handleDebouncing}
        />
      )}
    </div>
  );
}
export default React.memo(TranslatorSide);