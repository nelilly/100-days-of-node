const pool = require('./pool')

const updateEntry = (params) => {
  const parseParams = Object.values(JSON.parse(Object.keys(params)))
  pool.getConnection()
  // Create field on front-end that can be passed through the call into here after SET.
  // Want this to be able to be used for authors and books.
    .then(conn => conn.query('UPDATE authors SET ', parseParams)
      .then(res => {
        console.log(res)
        conn.release()
      })
      .catch(err => console.log(err))
    )
    .catch(err => console.log(err))
}

module.exports = updateEntry
