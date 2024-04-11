import './App.css'
import { useEffect, useState } from 'react'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import axios from 'axios'

function App() {

  const [toDoList, setToDoList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5100/alltasks`);
      setToDoList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="App-header">To Do App</h1>

      <ToDoForm fetchData={fetchData} />

      {/* Passing toDoList as an object to perform map on this and fetchData function to call from there */}
      <div className="Container mx-auto">
        <ToDoList fetchData={fetchData} toDoList={toDoList} />
      </div>
    </div>
  );

  return (
    <>

    </>
  )
}

export default App
