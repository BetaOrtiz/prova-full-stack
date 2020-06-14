import knex from '../database/connection';
import { Request, Response } from 'express';

class TasksController {
  async index(req: Request, res: Response) {
    const tasks = await knex('tasks')
      .join('category', 'tasks.category', '=', 'category.id')
      .select('category.*', 'tasks.*');

    const serializedTasks = tasks.map((task) => {
      return {
        id: task.id,
        key: task.key,
        initialDate: task.initialDate,
        finalDate: task.finalDate,
        category: task.name,
        title: task.title,
        body: task.body,
      };
    });
    return res.json(serializedTasks);
  }

  async delete(req: Request, res: Response) {
    knex('tasks')
      .where({ id: req.params.id })
      .del()
      .then(() => {
        knex('notes')
          .where({ task: req.params.id })
          .del()
          .then(() => {
            res.send('deletado');
          });
      });
  }

  async create(req: Request, res: Response) {
    const { title, body, category, initialDate, finalDate } = req.body;

    const task = {
      title,
      body,
      category,
      initialDate,
      finalDate,
    };
    const insertedTask = await knex('tasks').insert(task);

    return res.json(insertedTask[0]);
  }
}

export default TasksController;
