const express = require ('express')
const app = express()
const hospede = require('../src/controllers/hospedes_controller')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use((req, res, next)=>{
  console.log('middleware on')
  next()
})

app.use(express.json())

hospede(app)

module.exports = app