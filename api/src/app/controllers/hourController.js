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
}

module.exports = new HourController;
