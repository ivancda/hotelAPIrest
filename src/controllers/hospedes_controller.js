const Hospede = require("../models/Hospedes")
const bd = require("../infra/sqlite-db")
const HospedeDAO = require("../DAO/HospedesDAO")

const hospede = (app) => {

    const novoHospede = new HospedeDAO(bd)

    //Busca todos Hospedes cadastrados  
    app.get('/hospede', async (req, res) => {
        try {
            const resposta = await novoHospede.getAll()
        res.json(resposta)
        } catch(error){res.json(error.message)}
        
    })

    //Busca um Hospede pelo id
    app.get('/hospede/:id', async (req, res) => {
        const id = req.params.id
        try{
        const resposta = await novoHospede.getById(id)
        res.json(resposta)
        } catch(error){res.json(error.message)}
        
    })

    //Exclui um Hospede pelo id
    app.delete('/hospede/:id', async (req, res) => {
        const id = req.params.id
        try{
        const resposta = await novoHospede.deleteById(id)
        res.json(resposta)
        }
        catch(error){res.json(error.message)}
    })

    //Adiciona um Hospede no banco de dados
    app.post('/hospede', async (req, res) => {
        try {
            const body = req.body
        const hospede = new Hospede(body.nome, body.idade, body.cpf, body.telefone, body.reserva)
        const params = [hospede.nome, hospede.idade, hospede.cpf, hospede.telefone, hospede.reserva]
        const resposta = await novoHospede.createHospede(params)
        res.json(resposta)
        } catch (error) {
            res.json(error)
        }
        
               
    })

    //Altera um ou mais atributos
    app.patch('/hospede/:id', async (req, res) => {
        try {
            const data = req.body
        const params = [data.nome, data.idade, data.cpf, data.telefone, data.reserva, req.params.id]
        const resposta = await novoHospede.updateById(params)
        res.json(resposta)
        } catch (error) {
            res.json(error)
        }
    })
}


module.exports = hospede