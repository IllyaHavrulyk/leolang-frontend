import React from "react";
import controlsStyles from "../controls.module.css";

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error(err);
  }
}

function sayText(text, lang) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  speechSynthesis.speak(utterance);
}

function ControlBtns({ text, language }) {
  console.log(language);
  return (
    <div className={controlsStyles.icons}>
      <i
        className={`fas fa-volume-up ${controlsStyles.iconButton}`}
        onClick={() => sayText(text, language)}
      ></i>
      <i
        className={`fas fa-copy ${controlsStyles.iconButton}`}
        onClick={() => {
          copyToClipboard(text);
        }}
      ></i>
    </div>
  );
}

export default React.memo(ControlBtns);
