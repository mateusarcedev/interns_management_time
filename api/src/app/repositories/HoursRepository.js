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
}


module.exports = new HoursRepository();
