import { Express } from 'express';
import { Request, Response } from 'express';
import { create, fetch, deleteTask } from '../controllers/task.controller'; // Importing create directly

export default (app: Express) => {
    app.post('/addtask', (req: Request, res: Response) => create(req, res));
    app.get('/alltasks', (req: Request, res: Response) => fetch(req, res));
    app.delete('/tasks/:id', (req: Request, res: Response) => deleteTask(req, res));
};
