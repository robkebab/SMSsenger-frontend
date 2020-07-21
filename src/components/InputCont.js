import React, { useState } from "react";
import { URL } from "../services/variables";
import { messageState } from "../services/MsgState";
import { useRecoilState } from "recoil";
import axios from "axios";

const initialState = {
  number: "",
  message: "",
};

const InputCont = () => {
  const [form, setForm] = useState(initialState);
  const [messages, setMessages] = useRecoilState(messageState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const getNew = async () => {
      const newMessage = await axios.post(URL + "send", {
        message: {
          To: form.number,
          Text: form.message,
        },
      });
      setMessages((prev) => [newMessage.data, ...prev]);
      setForm(initialState);
    };
    getNew();
  };

  return (
    <div className="send">
      <h3>Send Message</h3>
      <div className="input-cont">
        <div>
          <label>Phone number:</label>
          <input
            onChange={handleChange}
            name="number"
            placeholder="Ex: +12345678899"
            value={form.number}
          />
        </div>

        <div>
          <label>Message:</label>
          <input
            onChange={handleChange}
            name="message"
            placeholder="Hello, World!"
            value={form.message}
          />
        </div>
      </div>
      <div className="sendbtn-box">
        <button type="button" name="send" value="send" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
};

export default InputCont;