const novoHospede = require('../models/Hospedes')

const hospede =  (app) => {
  app.get('/', (req, res)=>{
    console.log('foiiii')
    res.status(200).json({})
  })
}

// criar uma instancia da model
const coisa = new novoHospede('1234')
console.log(coisa)

module.exports = hospede