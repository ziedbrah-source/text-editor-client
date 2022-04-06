import "./App.css";
import React, { useState, useEffect } from "react";
import TextArea from "./TextArea";
import axios from "./axios";
import requests from "./requests";
function App() {
  const [TextAreaNumber, setTextAreaNumber] = useState(0);
  const [ClientId, setClientId] = useState(-1);
  useEffect(() => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      async function fetchData() {
        const request = await axios.delete(requests.numberOfTextAreas);

        setTextAreaNumber(request.data.number);
        return request;
      }
      fetchData();
      return (ev.returnValue = "test");
    });
  });

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.numberOfTextAreas);

      setTextAreaNumber(request.data.number);
      return request;
    }
    fetchData();
  }, []);
  const list = [];
  let textAreavar = TextAreaNumber;
  while (textAreavar) {
    list.push(<TextArea></TextArea>);
    textAreavar--;
  }

  return <div className="App">{list}</div>;
}

export default App;
