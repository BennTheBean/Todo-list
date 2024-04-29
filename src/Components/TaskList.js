import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList() {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);

  // Function to add new task
  const addTask = task => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    // Add new task to tasks array
    const newTasks = [task, ...tasks];

    // Update tasks state
    setTasks(newTasks);
  };

  // Function to edit existing task
  const editTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // Update tasks array with edited task
    setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
  };

  // Function to remove task
  const removeTask = id => {
    // Filter out the removed task from tasks array
    const removedArr = [...tasks].filter(task => task.id !== id);

    // Update tasks state
    setTasks(removedArr);
  };

  // Function to mark task as complete
  const completeTask = id => {
    // Toggle the 'isComplete' property of the task
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    // Update tasks state
    setTasks(updatedTasks);
  };

  // Count total tasks
  const totalTasks = tasks.length;

  // Count completed tasks
  const completedTasks = tasks.filter(task => task.isComplete).length;

  // Render TaskList component
  return (
    <>
      <h1>Your Tasks</h1>
      {/* Display total and completed tasks counts */}
      <div className='task-data'>
        <p>Tasks Completed: {completedTasks}/{totalTasks}</p>
      </div>
      {/* TaskForm component for adding new tasks */}
      <TaskForm onSubmit={addTask} />
      {/* Task component for rendering the list of tasks */}
      <Task
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        editTask={editTask}
      />
    </>
  );
}

export default TaskList;
