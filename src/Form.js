import React, { useState } from 'react'
import './App.css';
import { render } from '@testing-library/react';
import callAPI from './API'

export default function Form() {
const [siteURL, setSiteURL] = useState("https://gr0.com/");
const [startDate, setStartDate] = useState("09-01-2022");
const [endDate, setEndDate] = useState("09-30-2022")
const [filterOperator, setFilterOperator] = useState("");
const [filterExpression, setFilterExpression] = useState("");
const [rowLimit, setRowLimit] = useState(1000);

  return (
  <div className="App">
    <form onSubmit={console.log("Submitted")}>
      <input
        type="url"
        value={siteURL}
        placeholder="Site URL"
        onChange={(e) => setSiteURL(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        placeholder="09-01-2022"
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        placeholder="09-30-2022"
        onChange={(e) => setEndDate(e.target.value)}
      />
      <label for="operator">Choose a Filter Operator</label>
      <select
        name="operator"
        id="operator"
        value={filterOperator}
        onChange={(e) => setFilterOperator(e.target.value)}>
        <option value="">None</option>
        <option value="contains">Contains</option>
        <option value="equals">Equals</option>
        <option value="notContains">Does Not Contain</option>
        <option value="notEquals">Does Not Equal</option>
      </select>
      <input
        type="text"
        value={filterExpression}
        placeholder="Filter Expression"
        onChange={(e) => setFilterExpression(e.target.value)}
      />
      <input
        type="number"
        value={rowLimit}
        placeholder="0"
        onChange={(e) => setRowLimit(e.target.value)}
      />
      <button type="submit">Send Request</button>

      {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
    </form>
  </div>
  )
}