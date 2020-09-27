import React from "react";
import Moment from "react-moment";

const ChatBoxes = ({ messages }) => {
  return messages.length ? (
    <div className="chat-boxes">
      {messages.map((message) => (
        <div className="chat-boxes" key={message.id}>
          <div>
            <h4 className="chat-boxes-name">{message.from}</h4>
            <div className="chat-boxes-text">
              <p className="message-text">{message.text}</p>
            </div>
            <div className="chat-boxes-time" style={{ fontSize: "12px" }}>
              <Moment fromNow>{message.timeSent}</Moment>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};
export default ChatBoxes;
