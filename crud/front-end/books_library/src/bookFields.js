import React, { Component } from 'react'
import Axios from 'axios'

export default class AuthorForm extends Component() {
  constructor (props) {
    super(props)
    this.state = {
      isbn: '',
      title: '',
      author_id: '',
      year_pub: '',
      description: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    Axios.post('http://localhost:4000/', {
      isbn: `${this.state.isbn}`,
      title: `${this.state.title}`,
      author_id: `${this.state.author_id}`,
      year_pub: `${this.state.year_pub}`,
      description: `${this.state.description}`
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
            <h2>Add book to library</h2>
            <label>
            <p>ISBN</p>
            <textarea type='text' onChange={event => this.setState({ isbn: event.target.value })} value={this.state.isbn}/>
            </label>
            <label>
            <p>Title</p>
            <textarea type='text' onChange={event => this.setState({ title: event.target.value })} value={this.state.title}/>
            </label>
            <label>
            <p>Author ID</p>
            <textarea type='text' onChange={event => this.setState({ author_id: event.target.value })} value={this.state.author_id}/>
            </label>
            <label>
            <p>Year Published</p>
            <textarea type='text' onChange={event => this.setState({ year_pub: event.target.value })} value={this.state.year_pub}/>
            </label>
            <label>
            <p>Book Description</p>
            <textarea type='text' onChange={event => this.setState({ description: event.target.value })} value={this.state.description}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}
