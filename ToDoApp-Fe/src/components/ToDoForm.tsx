import { useState } from "react";
import axios from 'axios';

interface Todo {
    content: string;
  }
  
  interface Props {
    fetchData: () => void; // Function to fetch data (likely from parent component)
  }
  
  const ToDoForm: React.FC<Props> = ({ fetchData }) => {
    const [userInput, setUserInput] = useState<string>('');
  
    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const content: string = userInput; // Explicitly type content
  
        await axios.post<Todo>('http://localhost:5100/addtask', { content }); // Specify expected response type
  
        console.log("Task added successfully!");
      } catch (err: unknown) {
        console.error("Error adding task:", err);
      }
  
      setUserInput("");
      fetchData();
    };
  
    return (
      <form onSubmit={onSubmitForm}>
        <div className="input-group p-5 mb-1">
          <span className="input-group-text fw-bold fs-5" id="inputGroup-sizing-default">
            Enter the task:
          </span>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.currentTarget.value)}
            className="form-control"
            placeholder="Add Tasks"
          />
          <button className="btn btn-success" type="submit" value="Submit" id="button-addon2">
            Add Task
          </button>
        </div>
      </form>
    );
  };
  
  export default ToDoForm;
  