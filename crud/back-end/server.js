const mariadb = require('mariadb')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')
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

let selectResponse

const dbCall = () => {
  pool.getConnection(err => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Connection successful, you faka.')
  })
    .then(conn => {
      conn.query('SELECT * FROM authors')
        .then(res => { selectResponse = res })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

router.use(logger('dev'))
router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  }), function (req, res, next) {
    //   res.set('Content-Type', 'application/json')
    //   res.header('Access-Control-Allow-Origin', '*')
    console.log('Something is happening.')
    next()
  })

router.get('/',
  (req, res) => {
    dbCall()
    res.send(selectResponse)
  })

module.exports = router
//     let sql = 'SELECT * FROM authors;'
//     try{
//         let conn
//         // const rows = await conn.query("INSERT INTO authors(name_last, name_first, country) VALUES(?,?,?)",
//         // [])
//         const res = await conn.query(sql)
//         // console.log(res)
//     }
//     catch(err){
//         console.log(err)
//     }
//     finally{
//         if(conn) conn.release()
//     }
// }

// app.get('/', (req, res) => {
//     console.log(dbCall())
// })

// mariadb.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: 'books_library',
//     timezone: 'Pacific/Honolulu',
//     multipleStatements: true,
//     supportBigInt: true

// })
// .then(conn => {
//     conn.query("SELECT * FROM authors")
//     .then(rows => {
// console.log(rows)
// return conn.query("INSERT INTO authors(name_last, name_first, country) VALUES(?)",
// ["Godin", "Seth", "USA"])
// })
//     .then(console.log('Connection Successful, you faka.'))
//     .then(res => console.log(res))
//     .catch(err=> console.log(err))

// })
//     .catch(err=> console.log(err))

app.listen(PORT, () => `Connection successful on port ${PORT}.`)
