const mariadb = require('mariadb')
const express = require('express')
require('dotenv').config()
var app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// const pool = mariadb.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: 'books_library',
//     timezone: 'Pacific/Honolulu',
//     multipleStatements: true,
//     supportBigInt: true

// })

// async function fireItUp(err){
//     let conn
//     try{
//         conn = await pool.getConnection()
//         console.log('Connection successful, you faka.')
//         // const rows = await conn.query("SELECT *")

//         // const res  = await conn.query()
//     }
//     catch(err){
//         console.log(err)
//     }
//     finally{
//         if(conn) conn.release()
//     }
// }
mariadb.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'books_library',
    timezone: 'Pacific/Honolulu',
    multipleStatements: true,
    supportBigInt: true

})
.then(conn => {
          console.log(`Connection Successful, you faka.  connID = ${conn.threadId}`)
})
    .catch(err=> console.log(err))

app.listen(PORT, () => `Connection successful on port ${PORT}.`)
