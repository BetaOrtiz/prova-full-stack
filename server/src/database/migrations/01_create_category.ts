import Knex from 'knex';

export async function up(knex: Knex) {
  //upgrade
  return knex.schema.createTable('category', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });
}

export async function down(knex: Knex) {
  //downgrade
  return knex.schema.dropTable('category');
}
