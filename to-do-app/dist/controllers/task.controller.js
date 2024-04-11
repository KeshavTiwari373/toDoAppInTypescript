"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.fetch = exports.create = void 0;
const task_model_1 = __importDefault(require("../model/task.model"));
const create = async (req, res) => {
    try {
        const content = req.body;
        const taskInDB = await task_model_1.default.findOne(content);
        if (taskInDB) {
            console.log("not added");
            res.status(409).json({
                message: "Task already exists with this content",
                error: true
            });
            return;
        }
        const newTask = new task_model_1.default(content);
        const savedTask = await newTask.save();
        if (!savedTask) {
            console.log("Something went wrong");
            res.status(400).send("Something went wrong");
            return;
        }
        console.log("Task added");
        res.status(200).send("Task added");
    }
    catch (err) {
        console.error(err);
        console.log("Server not available");
        res.status(500).json({ message: "Server not available" });
    }
};
exports.create = create;
const fetch = async (req, res) => {
    try {
        const allTasks = await task_model_1.default.find({}, '_id content');
        if (!allTasks) {
            console.log("Something went wrong");
            res.status(400).send("Something went wrong");
            return;
        }
        console.log(allTasks);
        res.send(allTasks);
    }
    catch (err) {
        console.error(err, "Server not available");
        res.status(500).json({ message: "Server not available" });
    }
};
exports.fetch = fetch;
const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTask = await task_model_1.default.findByIdAndDelete(id);
        if (!deletedTask) {
            console.log("Task not found");
            res.status(404).json({ message: "Task not found" });
            return;
        }
        console.log("Task deleted successfully");
        res.json({ message: "Task deleted successfully" });
    }
    catch (err) {
        console.error(err);
        console.log("Server error");
        res.status(500).json({ message: "Server error" });
    }
};
exports.deleteTask = deleteTask;
