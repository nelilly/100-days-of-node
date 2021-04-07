import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
// import router from '../src/server'

function App () {
  const [isLoading, setIsLoading] = useState(false)
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [countryName, setCountryName] = useState('')
  const [table, setTable] = useState('')

  useEffect(() => {
    const apiReturned = false
    if (isLoading === true) {
      Axios.get('http://localhost:4000/api', {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'

        },
        params: {
          table: table
        }
      })
        .then(res => console.log(res.data))
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
