const mariadb = require('mariadb')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const router = express.Router()
const PORT = 4000

const pool = mariadb.createPool({
  socketPath: '/run/mysqld/mysqld.sock',
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'books_library',
  timezone: 'Pacific/Honolulu',
  multipleStatements: true,
  supportBigInt: true

})

const dbGetCall = () => {
  pool.query('SELECT * FROM authors')
    .then(res => { return res })
    .catch(err => console.log(err))
  pool.end()
    .then(() => console.log('Connection ended'))
    .catch(err => console.log(err))
}

const dbPostCall = (last, first, country) => {
  pool.getConnection()
    .then(conn => conn.query('INSERT INTO authors(name_last, name_first, country) VALUES(?, ?, ?);', [last, first, country])
      .then(res => {
        console.log(res)
        conn.release()
      })
      .catch(err => console.log(err))
    )
  // pool.end()
  //   .then(() => console.log('Connection ended'))
  //   .catch(err => console.log(err))
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))

app.route('/')
  .get((req, res) => {
    dbGetCall()
    res.send()
  })
  .post((req, res) => {
    console.log(JSON.parse(Object.keys(req.body)).last)
    dbPostCall(JSON.parse(Object.keys(req.body)).last, JSON.parse(Object.keys(req.body)).first, JSON.parse(Object.keys(req.body)).country)
    res.send('Entry accepted!')
  })

module.exports = router

app.listen(PORT, () => `Connection successful on port ${PORT}.`)
