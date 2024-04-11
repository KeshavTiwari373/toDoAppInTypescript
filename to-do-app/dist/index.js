"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const task_route_1 = __importDefault(require("./routes/task.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen("5100", () => {
    console.log('server running on port 5100');
});
mongoose_1.default.connect("mongodb+srv://todoapp:todoapp@cluster0.tfe15zv.mongodb.net/");
const db = mongoose_1.default.connection;
db.on("open", () => {
    console.log("connection successfull");
});
db.on("error", () => {
    console.log("connection not successfull");
});
(0, task_route_1.default)(app);
