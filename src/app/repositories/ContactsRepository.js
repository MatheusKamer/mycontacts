const { v4 } = require('uuid'); /* Importando função uuid da biblioteca uuidv4 */

/* criando um mock temporário  */
let contacts = [
  {
    id: v4(),
    name: 'Matheus Kamer',
    email: 'matheus_kamer@hotmail.com',
    phone: '45998283864',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Nara Canzi',
    email: 'nara_canzi@hotmail.com',
    phone: '45999021970',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() { /* Listar todos os registros */
    /* Retornando Promise devido ao "await" da função assincrona "index" do ContactController */
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    /* Retornando Promise devido ao "await" da função assincrona "index" do ContactController */
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    /* Retornando Promise devido ao "await" da função assincrona "index" do ContactController */
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
