import express, { Request, Response } from 'express';
import { celebrate, Joi } from 'celebrate';

import TasksController from './controllers/TasksController';
import CategoriesController from './controllers/CategoriesController';
import NotesController from './controllers/NotesController';

const routes = express.Router();
const tasksController = new TasksController();
const categoriesController = new CategoriesController();
const notesController = new NotesController();

routes.post(
  '/tasks',
  celebrate(
    {
      body: Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        category: Joi.string().required(),
        initialDate: Joi.string().required(),
        finalDate: Joi.string().optional(),
      }),
    },
    {
      abortEarly: false,
    }
  ),
  tasksController.create
);

routes.get('/tasks', tasksController.index);

routes.delete('/tasks/:id', tasksController.delete);

routes.delete('/notes/:id', notesController.delete);

routes.get('/category', categoriesController.index);

routes.post('/notes', notesController.create);

routes.get('/notes', notesController.index);

export default routes;
