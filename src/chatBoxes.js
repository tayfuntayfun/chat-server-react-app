import React from "react";

const chatBoxes = ({ messages }) => {
  return (
    <div style={{ color: "white" }}>
      {messages.map((message) => (
        <div>
          <div key={message.id}>
            <h5>{message.from}</h5>
            <div>
              <p>{message.text}</p>
            </div>
            <div>{message.timeSent}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default chatBoxes;
