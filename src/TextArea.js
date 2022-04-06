import React, { useState } from "react";

function TextArea(props) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <label>Enter value : </label>
      <textarea disabled value={text} onChange={handleChange} />
    </div>
  );
}

export default TextArea;
