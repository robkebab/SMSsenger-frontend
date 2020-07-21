import React, { useState, useEffect } from "react";
import { URL } from "../services/variables";
import { ActionCable } from "react-actioncable-provider";
import axios from "axios";
import {messageState, filteredMessagesState, filterState} from "../services/MsgState"
import {useRecoilValue, useRecoilState} from 'recoil'
import Message from "./Message";

const MessagesCont = () => {
  const filter = useRecoilValue(filterState);
  const filteredMsgs = useRecoilValue(filteredMessagesState);
  const [messages, setMessages] = useRecoilState(messageState);

  const addMessage = (message) => {
    setMessages((prev) => [message, ...prev]);
  };

  useEffect(() => {
    const getMessages = async () => {
      let msgs = await axios.get(URL + "messages");
      setMessages(msgs.data.reverse());
      // console.log(msgs.data)
    };
    getMessages();
  }, []);

  return (
      <div className="msg-cont">
        <ActionCable
          channel={{ channel: "SessionChannel" }}
          onReceived={addMessage}
        />
        {filter
          ? filteredMsgs.map((msg) => <Message key={msg.id} message={msg} />)
          : messages.map((msg) => <Message key={msg.id} message={msg} />)}
      </div>
  );
};

export default MessagesCont;
