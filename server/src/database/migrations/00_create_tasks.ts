import Knex from 'knex';

export async function up(knex: Knex) {
  //upgrade
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('body').notNullable();
    table.string('category').notNullable();
    table.string('initialDate').notNullable();
    table.string('finalDate');
  });
}

export async function down(knex: Knex) {
  //downgrade
  return knex.schema.dropTable('tasks');
}
