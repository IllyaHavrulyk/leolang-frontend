import React from "react";
import actionStyles from "./actions.module.css";
import { copyToClipboard, sayText } from "../../../../scripts/actionBtnFunctions.js";

interface TranslatorBtnsProps {
  text: string,
  language: string
  isOutput: boolean
}

function TranslatorBtns({ text, language, isOutput }: TranslatorBtnsProps) {
  const btnsPlacement = isOutput ? undefined : actionStyles.leftSide;

  return (
    <div className={`${actionStyles.icons} ${btnsPlacement}`}>
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