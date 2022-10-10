import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import { render } from '@testing-library/react';
import Form from './Form';

function App() {
  return(
    <Form/>
  )
  }

  // function sendRequest() {
  //   let apiRequestBody =
  //   {
  //     "startDate": startDate,
  //     "endDate": endDate,
  //     "dimensions": [
  //       "PAGE",
  //       "QUERY"
  //     ],
  //     "type": "WEB",
  //     "dimensionFilterGroups": [
  //       {
  //         "filters": [
  //           {
  //             "dimension": "PAGE",
  //             "operator": operator,
  //             "expression": filterExpression
  //           }
  //         ]
  //       }
  //     ],
  //     "aggregationType": string,
  //     "rowLimit": integer,
  //     "startRow": integer
  //   }
  // }

export default App;
