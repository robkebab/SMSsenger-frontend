import React from "react";
import Card from "react-bootstrap/Card";

const Message = ({ message }) => {
  const time = message.created_at.replace(/(T|Z)/gi, " ");
  return (
    <div className={!message.received ? "msg-right" : "msg-left"}>
      <Card className="msg-card">
        <Card.Text className="msg-text">"{message.text}"</Card.Text>
        <Card.Text style={{ color: "grey" }}>
          {message.received
            ? `From: ${message.from}`
            : `To: ${message.to}`}{" "}
          @ {time}
        </Card.Text>
      </Card>
    </div>
  );
};

export default Message;
