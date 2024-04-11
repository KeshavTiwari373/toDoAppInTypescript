import mongoose, {Schema, Document} from "mongoose";


export interface Task extends Document{
    content: string;
}

const TaskSchema: Schema<Task> = new Schema({
    content:{
        type: String,
        required: true
    }
})

export default mongoose.model<Task>("Task", TaskSchema);
