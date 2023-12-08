import React from "react";
import countries from "../../../../scripts/countries";

function fillLanguageOptions() {
  return Object.keys(countries).map((country_code) => {
    return (
      <option value={country_code} key={country_code}>
        {countries[country_code]}
      </option>
    );
  });
}

function LanguagesDropdown({ language, handleChange }) {
  console.log(language);
  return (
    <select value={language} onChange={handleChange}>
      {fillLanguageOptions()}
    </select>
  );
}

export default LanguagesDropdown;
