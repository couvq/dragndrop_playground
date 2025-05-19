import React, { useState } from 'react'
import Spreadsheet from 'react-spreadsheet'

const DataGrid = () => {
  const [data, setData] = useState(Array.from({length: 50}, () => new Array(26)))

  return (
    <Spreadsheet data={data} onChange={setData} />
  )
}

export default DataGrid