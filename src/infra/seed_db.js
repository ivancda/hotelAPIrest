const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq)

const HOSPEDES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "HOSPEDES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "IDADE" varchar(64),
    "CPF" varchar(64),
    "TELEFONE" varchar(64),
    "RESERVA" varchar(64)
  );`

const ADD_HOSPEDES_DATA = `
INSERT INTO HOSPEDES (ID, NOME, IDADE, CPF, TELEFONE, RESERVA)
VALUES 
    (1, 'Fulaninho Fulano', '43', '123.123.123-12', '99-99999-9999', '124356'),
    (2, 'Cicrana Cicranada', '24', '123.123.123-12', '99-99999-9999', '124356'),
    (3, 'Coisinha Coisão', '88', '123.123.123-12', '99-99999-9999', '124356')
`

function createTable() {
  db.run(HOSPEDES_SCHEMA, (error)=> {
    if (error) console.log("create table error");
  });
}

function populate() {
  db.run(ADD_HOSPEDES_DATA, (error)=> {
    if (error) console.log("populate error"+ error);
  });
}

db.serialize(()=>{
  createTable()
  populate()
})