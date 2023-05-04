import {useState} from 'react';
import NewTask from './components/New-task';
import Tasks from './components/Tasks';
import './App.css';


const tasksArray = [];

function App() {
  const [tasks, setNewTask] = useState(tasksArray);

  function addTask(newItem, inputValue) {
    if (inputValue) {
    setNewTask([...tasks, newItem]);
    };
  };

  function removeTask(taskID) {
    setNewTask(tasks.filter(task => task.id != taskID));
  };

  function taskStatus(taskID) {
    setNewTask(tasks.map(task => task.id === taskID ? { ...task, taskStatus: !task.taskStatus } : {...task} ));
  };

  return (
    <div className="App">
        <Tasks tasks={tasks} removeTask={removeTask} taskStatus={taskStatus}/>
        <NewTask tasks={tasks} addTask={addTask}/>
    </div>
  );
}

export default App;
