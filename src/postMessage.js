import React, { useState } from "react";
import apiRoot from "./apiRoot";
import { v4 as uuidv4 } from "uuid";

const PostMessage = ({ updateChatHistory }) => {
  const [newChat, setNewChat] = useState({
    id: uuidv4(),
    from: "",
    text: "",
    time: Date.now(),
  });

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newChat),
  };

  const handleSubmit = () => {
    fetch(apiRoot, options)
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .then(() => updateChatHistory());
  };

  const handleChange = (e) => {
    setNewChat({ ...newChat, [e.target.name]: e.target.value });
    console.log(newChat);
  };

  return (
    <div>
      <form>
        <input
          name="from"
          className="input-name"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <br />
        <input
          name="text"
          className="input-message"
          type="text"
          placeholder="Chat here..."
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default PostMessage;
