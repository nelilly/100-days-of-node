import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
import DataTable from './dataTable'
import AuthorForm from './authorFields'
import BookForm from './bookFields'

function App () {
  const [isLoading, setIsLoading] = useState(false)
  const [table, setTable] = useState('')
  const [responseData, setResponseData] = useState([])
  const [renderTable, setRenderTable] = useState(false)

  useEffect(() => {
    if (isLoading === true) {
      Axios.get('http://localhost:4000/api', {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'

        },
        params: {
          table: table
        }
      })
        .then(res => setResponseData(res.data))
        .then(() => console.log(responseData))
        .then(() => setRenderTable(true) && setIsLoading(false))
        .catch(err => console.log(err))
    }
  }, [isLoading, table])

  const handleClick = (tableChoice) => {
    setTable(tableChoice)
    setIsLoading(true)
  }

  return (
    <div className="App">
      <header className="App-header">
    <div className="get">
      <h2>View library</h2>
    <button onClick={() => handleClick('authors')} >View authors</button>
    <button onClick={() => handleClick('books')} >View books</button>
    {renderTable === false
      ? <p>push a button!</p>
      : <DataTable tableState={table} dataObjectArray={responseData}/> &&
      table === 'authors'
        ? <AuthorForm />
        : <BookForm />
    }
    </div>
      </header>
    </div>
  )
}

export default App
