// src/components/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS, CATEGORIES } from '../data';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  }

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleSelectCategory} 
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
    </div>
  );
}

export default App;
