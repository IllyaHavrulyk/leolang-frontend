import React from "react";
import styles from "./textarea.module.css";


interface TextAreaProps {
  isOutput: boolean,
  [key: string]: any
}

function Textarea({ isOutput, ...props }: TextAreaProps) {
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
