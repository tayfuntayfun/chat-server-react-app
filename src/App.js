import React, { useState, useEffect } from "react";
import apiRoot from "./apiRoot";
import "./App.css";
import PostMessage from "./PostMessage";
import ChatBoxes from "./ChatBoxes";

function App() {
  const [messages, setMessages] = useState({});

  const updateChatHistory = () => {
    fetch(apiRoot)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        console.log(data);
      });
  };

  useEffect(() => {
    updateChatHistory();
  }, []);

  return (
    <div className="App">
      <h1>
        <i>Chatter</i>
      </h1>
      <PostMessage updateChatHistory={updateChatHistory} />
      <ChatBoxes messages={messages} />
    </div>
  );
}

export default App;
