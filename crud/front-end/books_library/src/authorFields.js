import React, { Component } from 'react'
import Axios from 'axios'

export default class AuthorForm extends Component() {
  constructor (props) {
    super(props)
    this.state = {
      lastName: '',
      firstName: '',
      countryName: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.lastName, this.state.firstName, this.state.countryName)
    Axios.post('http://localhost:4000/', {
      last: `${this.state.lastName}`,
      first: `${this.state.firstName}`,
      country: `${this.state.countryName}`
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render () {
    return (
        <form onSubmit={this.handleSubmit}>
        <h2>Add author to library</h2>
        <label>
        <p>Last name</p>
        <textarea type='text' onChange={event => this.setState({ lastName: event.target.value })} value={this.state.lastName}/>
        </label>
        <label>
        <p>First name</p>
        <textarea type='text' onChange={event => this.setState({ firstName: event.target.value })} value={this.state.firstName}/>
        </label>
        <label>
        <p>Country of origin</p>
        <textarea type='text' onChange={event => this.setState({ countryName: event.target.value })} value={this.state.countryName}/>
        </label>
        <button type='submit'>Submit</button>
    </form>
    )
  }
}
