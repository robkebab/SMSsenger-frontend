import React, { useState, useEffect } from "react";
import { URL } from "../services/variables";
import { ActionCable } from "react-actioncable-provider";
import axios from "axios";
import {messageState} from "../services/MsgState"
import {useRecoilState} from 'recoil'
import Message from "./Message";

const MessagesCont = () => {
  const [filter, setFilter] = useState(false);
  const [messages, setMessages] = useRecoilState(messageState);
  const [filteredMsgs, setFilteredMsgs] = useState([]);

  const addMessage = (message) => {
    setMessages((prev) => [message, ...prev]);
  };

  const handleFilter = (start, end) => {
    console.log("submitting");
    const getLog = async () => {
      const response = await axios.get(
        URL + `history?start=${start}&end=${end}`
      );
      setFilter(true);
      setFilteredMsgs(response.data.reverse());
    };
    getLog();
  };

  const handleClear = () => {
    setFilter(false);
    setFilteredMsgs([]);
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
