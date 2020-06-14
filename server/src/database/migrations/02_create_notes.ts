import Knex from 'knex';

export async function up(knex: Knex) {
  //upgrade
  return knex.schema.createTable('notes', (table) => {
    table.increments('id').primary();
    table.integer('task').notNullable();
    table.string('note').notNullable();
  });
}

export async function down(knex: Knex) {
  //downgrade
  return knex.schema.dropTable('notes');
}
