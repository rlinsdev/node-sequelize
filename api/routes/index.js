const bodyParser = require('body-parser')
const pessoas = require('./pessoaRouter')

module.exports = app => {
  app.use(bodyParser.json())
  app.get(pessoas)
  app.get('/', (req, res) => res.send('olá 1'))
}
