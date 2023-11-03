const HoursRepository = require('../repositories/HoursRepository');

class HourController {
  async index(request, response) {
    const hours = await HoursRepository.findAll();
    response.json(hours);
  }

  async show(request, response) {
    const {id} = request.params;
    const hour = await HoursRepository.findById(id);

    if(!hour) {
      return response.status(404).json({ error: 'hour not found!'  });
    }
    response.json(hour);
  }

  async delete(request, response) {
const {id} = request.params;
const hour = await HoursRepository.findById(id);

if(!hour) {
  return response.status(404).json({ error: 'Hour not found!'  });
}
await HoursRepository.delete(id)
response.sendStatus(204);

  }

  async store(request, response) {
    const {intern_id, data_entrada, data_saida, hora_entrada, hora_saida, valor_hora } = request.body;

    if (!hora_entrada || !hora_saida) {
      return response.status(400).json({ error: 'hora_entrada e v são obrigatórios!' });
    }

    const hour = await HoursRepository.create({intern_id, data_entrada, data_saida, hora_entrada, hora_saida, valor_hora})
    response.json(hour);
  }

}

module.exports = new HourController;
