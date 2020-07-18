import React, { useState } from "react";

const initialState = {
  number: "",
  message: "",
};

const InputCont = () => {
  const [form, setForm] = useState(initialState);
  
  const handleChange = (e) => {
      setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    console.log(form.number, form.message)
  }

  return (
    <div className="input-container">
      <div>
        <label>Phone number:</label>
        <input
        onChange={handleChange}
        name="number" 
        placeholder="Ex: +12345678899"
        value={form.number} />
      </div>
      <div>
        <label>Message:</label>
        <input 
        onChange={handleChange}
        name="message" 
        placeholder="Hello, World!"
        value={form.message} />
      </div>
      <button type="button" name="send" value="send" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};

export default InputCont;
