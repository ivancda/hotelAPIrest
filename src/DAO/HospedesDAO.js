class HospedesDAO {
  constructor(bd) {
  this.bd = bd;
  }
  getAll() {
  return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM HOSPEDES`;
      this.bd.all(sql, (err, rows) => {
      if (err) {
          reject({
          mensagem: err.message,
          });
      } else {
          resolve({
          Usuario: rows,
          count: rows.length,
          error: false,
          });
      }
      });
  });
  }
  getById(id) {
  return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM HOSPEDES 
                      WHERE ID = ?`;
      this.bd.get(sql, id, (err, rows) => {
      if (err) {
          reject({
          mensagem: err.message,
          });
      } else {
          resolve({
          Usuario: rows,
          error: false,
          });
      }
      });
  });
  }
  deleteById(id) {
  return new Promise((resolve, reject) => {
      const sql = `DELETE FROM HOSPEDES 
                      WHERE ID = ?`;
      this.bd.run(sql, id, function (err, resultado) {
      if (err) {
          reject({
          messagem: err.message,
          });
      } else {
          resolve({
          mensagem: "Hospede excluído com sucesso!",
          changes: this.changes,
          });
      }
      });
  });
  }
  createHospede(params) {
  return new Promise((resolve, reject) => {
      const sql = `INSERT INTO HOSPEDES 
                      (NOME, IDADE, CPF, TELEFONE, RESERVA) 
                      VALUES (?,?,?,?,?)`;
      this.bd.run(sql, params, function (err) {
      if (err) {
          reject({
          erro: err.message,
          });
      } else {
          resolve({
          mensagem: "Hóspede inserido com sucesso",
          erro: false,
          id: this.lastID,
          });
      }
      });
  });
  }
  updateById(params) {
  return new Promise((resolve, reject) => {
      const sql = `UPDATE HOSPEDES SET
                      NOME = COALESCE(?,nome),
                      IDADE = COALESCE(?,idade),
                      CPF = COALESCE(?,cpf),
                      TELEFONE = COALESCE(?,telefone),
                      RESERVA = COALESCE(?,reserva)
                      WHERE ID = ?`;
      this.bd.run(sql, params, function (err) {
      if (err) {
          reject({
          error: err.message,
          });
      } else {
          resolve({
          messagem: "Hóspede atualizado com sucesso",
          erro: false,
          changes: this.changes,
          });
      }
      });
  });
  }
  }
  
  module.exports = HospedesDAO;
  