const request = require('supertest')
const app = require('../app')

describe('Teste rota get',()=>{
    test('Testando status 200',()=>{
        return request(app).get('/hospede')
        .then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})
