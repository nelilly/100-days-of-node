const pool = require('./pool')

const dbPostCall = (params) => {
  const parseParams = Object.values(JSON.parse(Object.keys(params)))
  pool.getConnection()
  // Create field that can be passed from front end so this function can also work for books.
    .then(conn => conn.query('INSERT INTO authors(name_last, name_first, country) VALUES(?, ?, ?);', parseParams)
      .then(res => {
        console.log(res)
        conn.release()
      })
      .catch(err => console.log(err))
    )
    .catch(err => console.log(err))
}

module.exports = dbPostCall
