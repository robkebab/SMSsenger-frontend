import React from "react";

const Message = ({ message }) => {
  const time = message.created_at.replace(/(T|Z)/gi, " ");
  return (
    <>
      <div className="msg">
        <div style={{ textAlign: "left" }}>
          {message.from === "16282683456" ? (
            <p>
              <span style={{ color: "pink" }}>To {message.to}:</span>{" "}
              {message.text}
            </p>
          ) : (
            <p>
              <span style={{ color: "skyblue" }}>From {message.to}:</span>{" "}
              {message.text}
            </p>
          )}
          <p style={{ fontSize: 12 }}>Time: {time}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
