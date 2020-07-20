import React, { useState } from "react";
import { URL } from "../services/variables";
import axios from "axios";

const initialForm = {
  start: "",
  end: "",
};

const Filter = ({handleFilter, handleClear}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="filter">
        <div>
          <label>Start Time:</label>
          <input
            type="datetime-local"
            onChange={handleChange}
            name="start"
            value={form.start}
          />
        </div>
        <div>
          <label>End Time:</label>
          <input
            type="datetime-local"
            onChange={handleChange}
            name="end"
            value={form.end}
          />
        </div>
      </div>
      <div className="filter-buttons">
        <button type="button" name="filter" onClick={() => handleFilter(form.start, form.end)}>
          Filter
        </button>
        <button type="button" name="Clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </>
  );
};

export default Filter;
