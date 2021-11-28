
---

## Hotel California API

### Link da API no HEROKU:
https://apihotelcalifornia.herokuapp.com/

### Bibliotecas utilizadas:
* [Nodemon](https://nodemon.io/) - recarregamento automático durante desenvolvimento.
* [Supertest](https://github.com/visionmedia/supertest#readme) - para testar as rotas.


### Banco de dados
[Sqlite3](https://www.npmjs.com/package/sqlite3).
---

## Iniciando o projeto
Abra o terminal (Linux/Mac) ou o PowerShell (Windows) e siga os passos abaixo.
* Clone o repositório em sua máquina

    `git clone git@github.com:ivancda/hotelAPIrest.git`

* Acesse a pasta criada 

    `cd hotelAPIrest`

* Instale os pacotes

    `npm install`

* Para iniciar os projetos use o comando abaixo

    `npm run start`

    A porta padrão é a __3001__.

---

## Estrutura da API
HTTP: GET, POST, PUT e DELETE.

### **Resumo das rotas**
Segue abaixo um resumo das rotas da API. Em seguida terão mais informações sobre cada uma delas.

* GET: *URL_BASE/hospede*
* GET: *URL_BASE/hospede/{id}*
* POST: *URL_BASE/hospede*
* PATCH: *URL_BASE/hospede/{id}*
* DELETE: *URL_BASE/hospede/{id}*


### **Retornando os Hóspedes**

GET: *URL_BASE/hospede*

RESPOSTA

~~~JSON
  {
  "Usuario": [
    {
      "ID": 1,
      "NOME": "Fulaninho Fulano",
      "IDADE": "43",
      "CPF": "123.123.123-12",
      "TELEFONE": "99-99999-9999",
      "RESERVA": "124356"
    },
    {
      "ID": 2,
      "NOME": "Cicrana Cicranada",
      "IDADE": "24",
      "CPF": "123.123.123-12",
      "TELEFONE": "99-99999-9999",
      "RESERVA": "124356"
    },
    {
      "ID": 3,
      "NOME": "Coisinha Coisão",
      "IDADE": "88",
      "CPF": "123.123.123-12",
      "TELEFONE": "99-99999-9999",
      "RESERVA": "124356"
    },
    {
      "ID": 5,
      "NOME": "xx",
      "IDADE": "xxx",
      "CPF": "xxx",
      "TELEFONE": "xxxxxxx",
      "RESERVA": "xxxxxxx"
    }
  ],
  "count": 4,
  "error": false
}
~~~

GET: *URL_BASE/hospede/{id}*

Resposta para id = 1:
~~~JSON
  {
  "Usuario": {
    "ID": 1,
    "NOME": "Fulaninho Fulano",
    "IDADE": "43",
    "CPF": "123.123.123-12",
    "TELEFONE": "99-99999-9999",
    "RESERVA": "124356"
  },
  "error": false
}
~~~

### **Inserindo novo hóspede**

POST: *URL_BASE/hospede*

Modelo a ser utilizado no body, no formato JSON:

~~~JSON
{
      "nome": "oi",
      "idade": "1",
      "cpf": "12341324",
      "telefone": "5559-9999",
      "reserva": "1154324"
}
~~~
 
 Resposta:
 ~~~JSON
 {
  "mensagem": "Hóspede inserido com sucesso",
  "erro": false,
  "id": 6
}
~~~

**IMPORTANTE**:

### **Atualizando Hóspedes**

PUT: *URL_BASE/hospede/{id}*

Modelo a ser utilizado no body, no formato JSON. **Não é obrigatório** conter todos atributos:

~~~JSON
{
      "nome": "xx",
      "idade": "xxx",
      "cpf": "xxx",
      "telefone": "xxxxxxx",
      "reserva": "xxxxxxx"
}
~~~
Resposta:
 ~~~JSON
{
  "messagem": "Hóspede atualizado com sucesso",
  "erro": false,
  "changes": 1
}
~~~

### **Deletando Hóspede**

DELETE: *URL_BASE/hospede/{id}*
Resposta:
 ~~~JSON
{
  "mensagem": "Hospede excluído com sucesso!",
  "changes": 1
}
~~~

---

## Testes
`npm run test`

