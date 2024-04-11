import axios from 'axios';

interface Todo {
    _id: string; // Assuming _id is a string type
    content: string;
  }
  
  interface Props {
    fetchData: () => void; // Function to fetch data (likely from parent component)
    toDoList: Todo[]; // Array of Todo objects
  }
  
  const ToDoList: React.FC<Props> = ({ fetchData, toDoList }) => {
    // Function for deletion of data from database
    const del = (id: string) => {
      axios.delete(`http://localhost:5100/tasks/${id}`)
        .then(() => {
          console.log("Item deleted successfully");
          fetchData();
        })
        .catch(error => {
          console.error("Error deleting item:", error);
        });
    };
  
    return (
      <div>
        {toDoList.map((todo) => (
          <div
            className="bg-light rounded mb-3 d-flex justify-content-between align-items-center"
            key={todo._id} // Use todo._id as the key
          >
            <span className="fw-semibold fs-4 p-1 ps-5">{todo.content}</span>
            <button type="button" className="btn btn-dark me-1" onClick={() => del(todo._id)}>
              X
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ToDoList;
  