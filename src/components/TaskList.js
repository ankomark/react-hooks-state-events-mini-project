// src/components/TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      {tasks.filter(task => task !== undefined).map((task, index) => (
        <Task key={task.id || index} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
