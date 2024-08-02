// src/__tests__/Task.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Task from '../components/Task';

test("displays the task text", () => {
  const task = { id: 1, text: "text!", category: "category!" };
  render(<Task task={task} onDeleteTask={() => {}} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const task = { id: 1, text: "text!", category: "category!" };
  render(<Task task={task} onDeleteTask={() => {}} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  const task = { id: 1, text: "text!", category: "category!" };
  const handleDeleteTask = jest.fn();
  render(<Task task={task} onDeleteTask={handleDeleteTask} />);
  screen.getByText("Delete").click();
  expect(handleDeleteTask).toHaveBeenCalledWith(1);
});
