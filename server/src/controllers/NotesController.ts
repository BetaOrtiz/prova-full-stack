import connection from '../database/connection';
import { Request, Response } from 'express';

class NotesController {
  async create(req: Request, res: Response) {
    const { task, note } = req.body;

    const insertedNote = await connection('notes').insert({ task, note });

    res.json(insertedNote);
  }

  async index(req: Request, res: Response) {
    const notes = await connection('notes').select('*');

    res.json(notes);
  }
  async delete(req: Request, res: Response) {
    connection('notes')
      .where({ id: req.params.id })
      .del()
      .then(() => {
        res.send('deletado');
      });
  }
}

export default NotesController;
