import connection from '../database/connection';
import { Request, Response } from 'express';

class CategoryController {
  async index(req: Request, res: Response) {
    const category = await connection('category').select('*');
    return res.json(category);
  }
}

export default CategoryController;
