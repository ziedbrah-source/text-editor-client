import "./App.css";
import React, { useState, useEffect } from "react";
import TextArea from "./TextArea";
import axios from "./axios";
import requests from "./requests";
function App() {
  const [TextAreaNumber, setTextAreaNumber] = useState(0);
  const [ClientId, setClientId] = useState(-1);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.clientId);
      console.log(request.data.number);
      setClientId(request.data.number);
      return request;
    }
    fetchData();
  }, []);
  const list = [];
  let textAreavar = TextAreaNumber;
  while (textAreavar) {
    if (ClientId == textAreavar) {
      list.push(<TextArea itsme={true}></TextArea>);
    } else {
      list.push(<TextArea></TextArea>);
    }

    textAreavar--;
  }

  return (
    <div className="App">
      <TextArea></TextArea>
    </div>
  );
}

export default App;
