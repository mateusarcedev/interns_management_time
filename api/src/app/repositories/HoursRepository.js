const {v4} = require('uuid');
const db = require('../../database/db');

class HoursRepository {
  findAll() {
    return db.query("SELECT * FROM hours");
  }

  async findById(id) {
    const query = 'SELECT * FROM hours WHERE id = ?';
    const values = [id];

    try {
      const results = await db.query(query, values);
      if(results.lenght > 0) {
        return results[0];
      }
      return null;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    const query = 'DELETE FROM hours WHERE id = ?';
    const values = [id];

    await db.query(query, values);

    return(id);
  }

  async create({ intern_id, data_entrada, data_saida, hora_entrada, hora_saida, valor_hora }) {
    const id = v4();
    const query = 'INSERT INTO hours (id, intern_id, data_entrada, data_saida, hora_entrada, hora_saida, valor_hora) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [id, intern_id, data_entrada, data_saida, hora_entrada, hora_saida, valor_hora];

    await db.query(query, values);

    return { id, intern_id, data_entrada, data_saida, hora_entrada, hora_saida, valor_hora };
  }




}


module.exports = new HoursRepository();
