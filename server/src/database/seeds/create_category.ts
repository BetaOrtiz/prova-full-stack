import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('category').insert([
    { name: 'Pessoal' },
    { name: 'Trabalho' },
    { name: 'Estudos' },
    { name: 'Saúde' },
    { name: 'Finanças' },
    { name: 'Outros' },
  ]);
}
