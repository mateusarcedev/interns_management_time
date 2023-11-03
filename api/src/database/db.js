const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  password: 'interns',
  user: 'root',
  database: 'interns',
  host: 'localhost',
  port: 3308
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados estabelecida com sucesso.');
  connection.release();
});

let db = {};

db.query = (query, values) => {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results, fields) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

module.exports = db;
