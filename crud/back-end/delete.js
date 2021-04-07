const pool = require('./pool')

const deleteEntry = (params) => {
  const parseParams = Object.values(JSON.parse(Object.keys(params)))
  pool.getConnection()
  // Create field that can be passed in place of author_id so this can be used for authors or books
    .then(conn => conn.query('DELETE FROM authors WHERE author_id = ?', parseParams)
      .then(res => {
        console.log(res)
        conn.release()
      })
      .catch(err => console.log(err))
    )
    .catch(err => console.log(err))
}

module.exports = deleteEntry
