"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_controller_1 = require("../controllers/task.controller"); // Importing create directly
exports.default = (app) => {
    app.post('/addtask', (req, res) => (0, task_controller_1.create)(req, res));
    app.get('/alltasks', (req, res) => (0, task_controller_1.fetch)(req, res));
    app.delete('/tasks/:id', (req, res) => (0, task_controller_1.deleteTask)(req, res));
};
