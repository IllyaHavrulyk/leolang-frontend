import React from "react";

import controlsStyles from "./controls.module.css";
import countries from "../../../scripts/countries";

function TranslatorControls({
  sourceLanguage,
  handleSetSourceLanguage,
  targetLanguage,
  handleSetTargetLanguage,
}) {
  function fillLanguageOptions() {
    return Object.keys(countries).map((country_code) => {
      return (
        <option value={country_code} key={country_code}>
          {countries[country_code]}
        </option>
      );
    });
  }

  function swapLanguages(fromLang, toLang) {
    handleSetTargetLanguage(fromLang);
    handleSetSourceLanguage(toLang);
  }

  return (
    <div className={controlsStyles.controls}>
      <div className={controlsStyles.fromGroup}>
        <div className={controlsStyles.icons}>
          <i className={`fas fa-volume-up ${controlsStyles.iconButton}`}></i>
          <i className={`fas fa-copy ${controlsStyles.iconButton}`}></i>
        </div>
        <select
          value={sourceLanguage}
          onChange={(e) => handleSetSourceLanguage(e.target.value)}
        >
          {fillLanguageOptions()}
        </select>
      </div>
      <i
        className={`fas fa-exchange-alt ${controlsStyles.iconButton}`}
        onClick={(e) => swapLanguages(sourceLanguage, targetLanguage)}
      ></i>
      <div className={controlsStyles.toGroup}>
        <select
          value={targetLanguage}
          onChange={(e) => {
            handleSetTargetLanguage(e.target.value);
          }}
        >
          {fillLanguageOptions()}
        </select>
        <div className={controlsStyles.icons}>
          <i className={`fas fa-volume-up ${controlsStyles.iconButton}`}></i>
          <i className={`fas fa-copy ${controlsStyles.iconButton}`}></i>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TranslatorControls);
