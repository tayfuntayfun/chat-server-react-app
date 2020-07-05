import React from "react";
import apiRoot from "./apiRoot";


//{ handleOnChange, handleSubmit}

const postMessage = () => {

  const handleAddNew = () => {
    
    fetch(apiRoot, {
      method: "POST",
      mode: "cors",
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
            <input
              className="input-name" type="text" placeholder="Your Name"
            />
            <br />
            <input
              className="input-message"
              type="text"
              placeholder="Chat here..."
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