const bodyParser = require('body-parser')

const pessoas = require('./pessoaRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    pessoas,
    niveis,
    turmas
  )
}
