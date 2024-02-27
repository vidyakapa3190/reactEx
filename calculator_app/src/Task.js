import React from "react";
const Task = ({ tasks, deleteTask }) => {
  const taskList = tasks.length ? (
    tasks.map((task) => {
      return (
        <div className="task" key={task.id}>
          <div>{task.content}</div>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no tasks left</p>
  );
  return <div className="task-list">{taskList}</div>;
};
export default Task;
