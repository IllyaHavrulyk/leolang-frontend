import React from "react";
import { fillLanguageOptions } from "../../../../scripts/countries";

interface LanguagesDropdownProps {
  language: string,
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,

}
function LanguagesDropdown({ language, handleChange }: LanguagesDropdownProps) {
  return (
    <select value={language} onChange={handleChange}>
      {fillLanguageOptions()}
    </select>
  );
}

export default LanguagesDropdown;
