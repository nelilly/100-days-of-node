import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
// import router from '../src/server'

function App () {
  const [isLoading, setIsLoading] = useState(false)
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [countryName, setCountryName] = useState('')

  useEffect(() => {
    const apiReturned = false
    if (isLoading === true) {
      Axios.get('http://localhost:4000/')
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => { return !apiReturned })
    }
    if (apiReturned === true) {
      return !isLoading
    }
  }, [isLoading])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(lastName, firstName, countryName)
    Axios.post('http://localhost:4000/', {
      last: `${lastName}`,
      first: `${firstName}`,
      country: `${countryName}`
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    <div className="get">
    <button onClick={() => setIsLoading(true)} >Click dat faka!</button>
    </div>
    <form onSubmit={handleSubmit}>
      <h2>Add author to library</h2>
        <label>
        <p>Last name</p>
        <textarea type='text' onChange={event => setLastName(event.target.value)} value={lastName}/>
        </label>
        <label>
        <p>First name</p>
        <textarea type='text' onChange={event => setFirstName(event.target.value)} value={firstName}/>
        </label>
        <label>
        <p>Country of origin</p>
        <textarea type='text' onChange={event => setCountryName(event.target.value)} value={countryName}/>
        </label>
        <button type='submit'>Submit</button>
    </form>
      </header>
    </div>
  )
}

export default App
