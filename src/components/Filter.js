import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { URL } from "../services/variables";
import axios from "axios";
import { filteredMessagesState, filterState } from "../services/MsgState";
import { useRecoilState } from "recoil";

const initialState = {
  start: "",
  end: "",
};

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const [filteredMsgs, setFilteredMsgs] = useRecoilState(filteredMessagesState);
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
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
    setForm(initialState);
  };

  return (
    <div className="filter">
      <div>
        <h3>Logs</h3>
      </div>
      <div className="date-box">
        <div className="date">
          <label>Start Time:</label>
          <input
            type="datetime-local"
            onChange={handleChange}
            name="start"
            value={form.start}
          />
        </div>

        <div className="date">
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
        <Button
          size="sm"
          variant="outline-info"
          style={{ marginRight: 5 }}
          onClick={() => handleFilter(form.start, form.end)}
        >
          Filter
        </Button>
        <Button
          size="sm"
          style={{ marginLeft: 5 }}
          variant="outline-info"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Filter;
