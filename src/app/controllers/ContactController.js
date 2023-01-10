const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) { /* Listar todos os registros | "async" por conta do await */
    /* Armazenando o retorno da função "findAll" na constante "contacts" */
    const contacts = await ContactsRepository.findAll(); /* "await" para função assincrona */

    response.json(contacts);
  }

  async show(request, response) { /* Obter UM registro */
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) { /* Criar novo registro (estilo create) */
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  update() { /* Editar um registro */

  }

  async delete(request, response) { /* Deletar um registro */
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
