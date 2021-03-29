import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
import router from '../src/server'

function App () {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const apiReturned = false
    if (isLoading === true) {
      Axios.get('/api', router)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => { return !apiReturned })
    }
    if (apiReturned === true) {
      return !isLoading
    }
  }, [isLoading])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    <div className="get">
    <button onClick={() => setIsLoading(true)} >Click dat faka!</button>
    </div>
    {/* <div>
      {isLoading ? }
    </div> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
