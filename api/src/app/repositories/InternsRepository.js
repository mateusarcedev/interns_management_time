const { v4 } = require('uuid')
const db = require('../../database/db');

class InternsRepository {
  findAll() {
    return db.query('SELECT * FROM interns');
  }

  async findById(id) {
    const query = 'SELECT * FROM interns WHERE id = ?';
    const values = [id];

    try {
      const results = await db.query(query, values);
      if (results.length > 0) {
        return results[0];
      }
      return null; // Retorna null se nenhum intern for encontrado
    } catch (error) {
      // Trate o erro aqui
      throw error; // Ou retorne uma resposta de erro apropriada
    }
  }


  async findByProntuario(prontuario) {
    const query = 'SELECT * FROM interns WHERE prontuario = ?';
    const values = [prontuario];

    try {
      const results = await db.query(query, values);
      if (results.length > 0) {
        return results[0];
      }
      return null; // Retorna null se nenhum intern for encontrado
    } catch (error) {
      // Trate o erro aqui
      throw error; // Ou retorne uma resposta de erro apropriada
    }
  }



  async delete(id) {
    const query = 'DELETE FROM interns WHERE id = ?';
    const values = [id];

    await db.query(query, values);

    return {id};
  }

  async create({ nome, prontuario }) {
    const id = v4();
    const query = 'INSERT INTO interns (id, nome, prontuario) VALUES (?, ?, ?)';
    const values = [id, nome, prontuario];

    await db.query(query, values);

    return { id, nome, prontuario };
  }


  async update(id, { nome, prontuario }) {
    const query = 'UPDATE interns SET nome = ?, prontuario = ? WHERE id = ?';
    const values = [nome, prontuario, id];

    try {
      await db.query(query, values);
      const updatedIntern = await this.findById(id);
      return updatedIntern;
    } catch (error) {
      // Trate o erro aqui
      throw error; // Ou retorne uma resposta de erro apropriada
    }
  }


}


module.exports = new InternsRepository();
