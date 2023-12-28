import React from "react";
import { fillLanguageOptions } from "../../scripts/countries";

function LanguagesDropdown({ language, handleChange }) {
  return (
    <select value={language} onChange={handleChange}>
      {fillLanguageOptions()}
    </select>
  );
}

export default LanguagesDropdown;
