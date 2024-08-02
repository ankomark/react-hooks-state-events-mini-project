// src/components/Task.js
import React from 'react';

function Task({ task, onDeleteTask }) {
  if (!task) {
    return null;
  }
  
  return (
    <div className="task">
      <div>{task.text}</div>
      <div>{task.category}</div>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
