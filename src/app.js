const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3001
const hospede = require('../src/controllers/hospedes_controller')

app.use(express.json())

hospede(app)

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em: http://localhost:${PORT}/`);
})