import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator

function TaskForm(props) {
  // State for managing input value
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  // Ref for focusing on input field
  const inputRef = useRef(null);

  // Focus on input field when component mounts
  useEffect(() => {
    inputRef.current.focus();
  });

  // Function to handle input change
  const handleEdit = e => {
    setInput(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Generate unique UUID for task ID
    props.onSubmit({
      id: uuidv4(),
      text: input
    });
    setInput('');
  };

  // Render task form
  return (
    <form onSubmit={handleSubmit} className='task-form'>
      {props.edit ? (
        // If in edit mode, render input field for updating task
        <>
          <input
            placeholder='Update Task'
            value={input}
            onChange={handleEdit}
            name='text'
            ref={inputRef}
            className='task-input edit'
          />
          <button onClick={handleSubmit} className='task-button edit'>Edit Task</button>
        </>
      ) : (
        // If not in edit mode, render input field for adding new task
        <>
          <input
            placeholder='Add a Task'
            value={input}
            onChange={handleEdit}
            name='text'
            className='task-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='task-button'>New Task</button>
        </>
      )}
    </form>
  );
}

export default TaskForm;
