const express = require('express')
const cors = require('cors')
const dbGetCall = require('./read')
const dbPostCall = require('./create')
const deleteEntry = require('./delete')
const updateEntry = require('./update')
const app = express()
const router = express.Router()
const PORT = 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))

app.route('/api')
  .get((req, res) => {
    // console.log(req.query.table)
    // setTimeout(() => {
    //   console.log(dbGetCall(req.query.table))
    // }, 5000)
    const response = dbGetCall(req.query.table)
      .then(res => { return res })
      .catch(err => console.log(err))
    setTimeout(() => {
      res.send(response)
      console.log(response)
      // console.log(response)
    }, 1000)
  })
  .post((req, res) => {
    console.log(Object.values(JSON.parse(Object.keys(req.body)))) // Tracer code
    dbPostCall(req.body)
    res.send('Entry accepted!')
  })
  .put((req, res) => {
    updateEntry(req.body)
    res.send('Entry changed.')
  })
  .delete((req, res) => {
    deleteEntry(req.body)
    res.send('Entry deleted.')
  })

module.exports = router

app.listen(PORT, () => `Connection successful on port ${PORT}.`)
