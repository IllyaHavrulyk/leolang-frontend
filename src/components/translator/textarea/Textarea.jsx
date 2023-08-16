import React from "react";

function Textarea({ ...props }) {
  return <textarea {...props}></textarea>;
}

export default React.memo(Textarea);
