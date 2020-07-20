import React, { useState } from "react";
import { URL } from "../services/variables";
import { messageState } from "../services/MsgState";
import { useRecoilState } from "recoil";
import axios from "axios";

const initialState = {
  number: "12106729886",
  message: "",
};

const InputCont = () => {
  const [form, setForm] = useState(initialState);
  const [message, setMessages] = useRecoilState(messageState);

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
      <div>
        <h2>Send Message</h2>
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
        <button type="button" name="send" value="send" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
};

export default InputCont;
