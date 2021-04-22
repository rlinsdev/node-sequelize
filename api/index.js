const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3002

app.get('/teste', (req, res) => res
  .status(200)
  .send({ mensagem: 'Welcome!' }))

app.listen(port, () => console.log(`server rodando na porta ${port}`))

module.exports = app
