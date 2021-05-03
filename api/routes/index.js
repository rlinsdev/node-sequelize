const bodyParser = require('body-parser')
const pessoas = require('./pessoaRouter')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(pessoas)
}
