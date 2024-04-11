import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/task.route'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.listen("5100", ()=>{
    console.log('server running on port 5100');
    
})

mongoose.connect("mongodb+srv://todoapp:todoapp@cluster0.tfe15zv.mongodb.net/");

const db = mongoose.connection;

db.on("open", () =>{
    console.log("connection successfull");
    
})

db.on("error", () =>{
    console.log("connection not successfull");
    
})

routes(app);