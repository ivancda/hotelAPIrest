// Arquivo responsável por criar e conectar nosso bd
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
// Esse comando verifica se existe um bd no caminha especificado
// Se nao existir ele cria um com o nome dado
// Por isso a importancia de ser o mesmo caminho que o indicado no arquivo
// que cria e popula as tabelas
const bd = new sqlite3.Database(caminhoArq);


//Processamento de sinal
// Esse código serve para encerrar nosso bd
// assim que fecharmos o servidor
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;