const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  password: '123',
  user: 'root',
  database: 'api',
  host: '10.137.174.13',
  port: '3306'
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
