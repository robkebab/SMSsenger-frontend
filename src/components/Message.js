import React from "react";

const Message = ({ message }) => {
  return (
    <>
      {message.from === "16282683456" ? (
        <div className="msg">
          <p>
            <span style={{ color: "pink" }}>To {message.to}:</span>{" "}
            {message.text}
          </p>
        </div>
      ) : (
        <div className="msg">
          <p>
            <span style={{ color: "skyblue" }}>From {message.to}:</span>{" "}
            {message.text}
          </p>
        </div>
      )}
    </>
  );
};

export default Message;
