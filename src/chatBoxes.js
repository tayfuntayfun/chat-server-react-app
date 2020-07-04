import React from "react";

const chatBoxes = ({ messages }) => {
  return (
    <div className="chat-boxes"
            style={{ color: "white" }}>
      {messages.map((message) => (
        <div className="chat-boxes">
          <div key={message.id}>
            <h4 className="chat-boxes-name">{message.from}</h4>
            <div className="chat-boxes-text">
              <p className="message-text">{message.text}</p>
            </div>
            <div className="chat-boxes-time"
                style={{ fontSize: "10px" }}>{message.timeSent}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default chatBoxes;
