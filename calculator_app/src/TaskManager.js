import React, { useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
const TaskManager = () => {
  //functional component
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    task.id = Math.random();

    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="task-manager">
      <h1>Task Manager</h1>

      <AddTask addTask={addTask} />
      <Task tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
export default TaskManager;
