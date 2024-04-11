import { Request, Response } from 'express';
import { FilterQuery } from 'mongoose';
import TaskModel, { Task } from '../model/task.model';

export const create = async (req: Request, res: Response): Promise<void> => {
    
    try {

        const content: Task = req.body as Task;

        const taskInDB = await TaskModel.findOne(content as FilterQuery<Task>);
        if (taskInDB) {
            console.log("not added");
            
            res.status(409).json({
                message: "Task already exists with this content",
                error:true
            });
            return;
        }

        const newTask = new TaskModel(content);
            const savedTask = await newTask.save();

            if (!savedTask) {
                console.log("Something went wrong");

                res.status(400).send("Something went wrong");
                return;
            }
            console.log("Task added");
            res.status(200).send("Task added");
        } catch (err) {
            console.error(err);
            console.log("Server not available");

            res.status(500).json({ message: "Server not available" });
        }
    }

export const fetch = async (req: Request, res: Response): Promise<void> => {
        try {
            const allTasks = await TaskModel.find({}, '_id content');

            if (!allTasks) {
                console.log("Something went wrong");

                res.status(400).send("Something went wrong");
                return;
            }
            console.log(allTasks);

            res.send(allTasks);
        } catch (err) {
            console.error(err, "Server not available");
            res.status(500).json({ message: "Server not available" });
        }
    }

    export const deleteTask = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;

        try {
            const deletedTask = await TaskModel.findByIdAndDelete(id);

            if (!deletedTask) {
                console.log("Task not found");

                res.status(404).json({ message: "Task not found" });
                return;
            }
            console.log("Task deleted successfully");

            res.json({ message: "Task deleted successfully" });
        } catch (err) {
            console.error(err);
            console.log("Server error");

            res.status(500).json({ message: "Server error" });
        }
    }
