const InternsRepository = require('../repositories/InternsRepository');

class InternCoontroller {

  async index(request, response) {
    const interns = await InternsRepository.findAll();

    response.json(interns);
  }

  async show(request, response) {
    const { id } = request.params;
    const intern = await InternsRepository.findById(id);

    if(!intern) {
      return response.status(404).json({ error: 'Intern not found!'  });
    }

    response.json(intern);
  }

    async store(request, response) {
    const { nome, prontuario } = request.body;

    if (!nome || !prontuario) {
      return response.status(400).json({ error: 'Nome e prontuario são obrigatórios!' });
    }

    const internExists = await InternsRepository.findByProntuario(prontuario);

    if (internExists) {
      return response.status(400).json({ error: 'Este prontuário já está em uso!' });
    }

    const intern = await InternsRepository.create({ nome, prontuario });

    response.json(intern);
  }


  async update(request, response) {
    const { id } = request.params;
    const { nome, prontuario } = request.body;

    const internExists = await InternsRepository.findById(id);

    if(!internExists) {
      return response.status(404).json({error: 'Intern not found!'});
    }

    if(!nome) {
      return response.status(404).json({ error: 'name is required!'  });
    }

    const intern = await internExists.update(id, {
      nome, prontuario
    });

    response.json(intern);
  }

  async delete(request, response) {
    const { id } = request.params;

    const intern = await InternsRepository.findById(id);

    if(!intern) {
      return response.status(404).json({ error: 'Intern not found!'  });
    }

    await InternsRepository.delete(id);
    response.sendStatus(204);
  }

}

// Design Pattern: Singleton
module.exports = new InternCoontroller();
