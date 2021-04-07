const pool = require('./pool')

const dbGetCall = (params) => {
  return pool.query(`SELECT * FROM ${params};`)
    .then(res => { return Object.values(res) })
    .catch(err => console.log(err))
}

module.exports = dbGetCall
