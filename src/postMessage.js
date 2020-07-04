import React from "react";
import apiRoot from "./apiRoot";


//{ handleOnChange, handleSubmit}

const postMessage = () => {

  const handleAddNew = () => {
    
    fetch(apiRoot, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        from: document.querySelector(".input-name").value,
        text: document.querySelector(".input-message").value,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Message Added");
      });
  }
  
  return (
        <div>
          <form >
          <p>
            Name____:{" "}
            <input
              className="input-name" type="text" placeholder="Your Name"
         
            />{" "}
            <br />
            Message_:{" "}
            <input
              className="input-message"
              type="text"
              placeholder="The message..."
             
            />
            <br />
          </p>
          <button onClick={() => handleAddNew()} type="submit">
            Send
          </button>
        </form>
      </div>
  );
}

export default postMessage;