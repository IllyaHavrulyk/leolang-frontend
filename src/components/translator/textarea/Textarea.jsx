import React from "react";
import styles from "./textarea.module.css";

function Textarea({ isOutput, ...props }) {
  return (
    <textarea
      className={`${styles.textarea}`}
      readOnly={isOutput}
      disabled={isOutput}
      {...props}
    ></textarea>
  );
}

export default React.memo(Textarea);
