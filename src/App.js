import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [siteURL, setSiteURL] = useState("https://gr0.com/");
  const [startDate, setStartDate] = useState("09-01-2022");
  const [endDate, setEndDate] = useState("09-30-2022")
  const [dimensions, setDimensions] = useState(["PAGE", "QUERY"]);
  const [dimensionFilterGroups, setDimensionFilterGroups] = useState([{"filters": [{"dimension": "PAGE", "operator": "CONTAINS", "expression": "/case-studies"}]}]);
  // const [filters, setFilters] = useState([]);
  // const [filterOperator, setFilterOperator] = useState([]);
  const [rowLimit, setRowLimit] = useState(1000);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;
