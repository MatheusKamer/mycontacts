const db = require('../../database');

class ContactsRepository {
  async findAll(orderBy = 'ASC') { /* Listar todos os registros */
    /* Retornando Promise devido ao "await" da função assincrona "index" do ContactController */
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT * FROM contacts ORDER BY name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    /* Retornando Promise devido ao "await" da função assincrona "index" do ContactController */
    const [row] = await db.query(`
      SELECT * FROM contacts WHERE id = $1
    `, [id]);

    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query(`
      SELECT * FROM contacts WHERE email = $1
    `, [email]);

    return row;
  }

  async delete(id) {
    const [row] = await db.query(`
      DELETE FROM contacts WHERE id = $1
    `, [id]);

    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE contacts SET name = $1, email = $2, phone = $3, category_id = $4 WHERE id = $5
    `, [name, email, phone, category_id, id]);

    return row;
  }
}

module.exports = new ContactsRepository();
