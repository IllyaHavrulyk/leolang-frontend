import React from "react";
import actionStyles from "./actions.module.css";
import { copyToClipboard, sayText } from "../../scripts/actionBtnFunctions";

function TranslatorBtns({ text, language }) {
  return (
    <div className={actionStyles.icons}>
      <i
        className={`fas fa-volume-up ${actionStyles.iconButton}`}
        onClick={() => sayText(text, language)}
      ></i>
      <i
        className={`fas fa-copy ${actionStyles.iconButton}`}
        onClick={() => {
          copyToClipboard(text);
        }}
      ></i>
    </div>
  );
}

export default React.memo(TranslatorBtns);
