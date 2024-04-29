import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiCloseCircleLine } from 'react-icons/ri';

const Task = ({ tasks, completeTask, removeTask, editTask }) => {
  // State for managing task edit mode
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  // Function to handle submitting edited task
  const submitEdit = value => {
    editTask(edit.id, value);
    // Reset edit state after submitting
    setEdit({
      id: null,
      value: ''
    });
  };

  // If in edit mode, render TaskForm for editing
  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitEdit} />;
  }

  // Render the list of tasks
  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? 'task-row complete' : 'task-row'}
      key={index}
    >
      <div key={task.id} onClick={() => setEdit({ id: task.id, value: task.text })}>
        {task.text}
      </div>
      <div className='icons'>
        {/* Icon for marking task as complete */}
        <IoMdCheckmarkCircleOutline 
            onClick={() => completeTask(task.id)}
            className='complete-icon'
        />
        {/* Icon for deleting task */}
        <RiCloseCircleLine
          onClick={() => removeTask(task.id)}
          className='delete-icon'
        />
      </div>
    </div>
  ));
};

export default Task;
