import React from "react";
import controlsStyles from "./textPanel.module.css";
import TranslatorBtns from "../../translatorBtns/TranslatorBtns";
import LanguagesDropdown from "../../languagesDropdown/LanguagesDropdown";

import Textarea from "../textarea/Textarea";
import Spinner from "../spinner/Spinner";

function TextInteractionPanel({
  placeholder,
  isOutput,
  value,
  language,
  handleSelect,
  handleDebouncing,
  isLoading = false,
}) {
  return (
    <div className={controlsStyles.controlsContainer}>
      <div className={controlsStyles.controls}>
        <TranslatorBtns text={value} language={language} />
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
export default React.memo(TextInteractionPanel);
