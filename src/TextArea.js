import React, { useState } from "react";
import axios from "./axios";
import requests from "./requests";
function TextArea(props) {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  async function doRequest() {
    const request = await axios.post(requests.clientId);
    console.log(request);
  }
  return (
    <div>
      {props.itsme ? (
        <div>
          <label>Enter value : </label>
          <textarea value={text} onChange={handleChange} />
        </div>
      ) : (
        <p>go</p>
      )}
    </div>
  );
}

export default TextArea;
