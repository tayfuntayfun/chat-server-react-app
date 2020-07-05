import React, { useState, useEffect} from "react";
import apiRoot from "./apiRoot";
import "./App.css";
import PostMessage from "./postMessage";
import ChatBoxes from "./chatBoxes" 


function App() {

  const [messages, setMessages] = useState ([{
    "from":
    "text"
  }])

  useEffect(() => {
    fetch(apiRoot)
      .then((res) => res.json())
      .then((data) => {setMessages(data); console.log(data)});
  }, []);

  return (
    <div className="App">
      <h1><i>Chatter</i></h1>
      <PostMessage apiRoot = {apiRoot} />
      <ChatBoxes messages={messages}  />
    </div>
  )
}

export default App;
