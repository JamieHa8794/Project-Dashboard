import { useState } from 'react';
import '../styles/TaskForm.css';

import type { Task, TaskStatus, TaskPriority } from '../types/task';

type CreateTaskProps = {
  tasks: Task[];
  currentlyEditing: string | null;
  handleSubmitTask: (task: Task, type: string) => void;
  handleSetEditTask: (id: string | null) => void;
};

function TaskForm(props: CreateTaskProps) {
  const { tasks, currentlyEditing, handleSubmitTask, handleSetEditTask } =
    props;
  const editTask = getEditTask();

  const [title, setTitle] = useState(editTask ? editTask.title : '');
  const [description, setDescription] = useState(
    editTask ? editTask.description : '',
  );
  const [status, setStatus] = useState<TaskStatus>(
    editTask ? editTask.status : 'todo',
  );
  const [priority, setPriority] = useState<TaskPriority>(
    editTask ? editTask.priority : 'medium',
  );

  function getEditTask() {
    if (currentlyEditing === 'create') return null;

    const editTask = tasks.find((task) => task.id === currentlyEditing) || null;

    return editTask;
  }

  function onSubmitTask() {
    const task: Task = {
      id: editTask?.id || crypto.randomUUID(),
      title,
      description,
      status,
      priority,
    };
    const type = editTask ? 'edit' : 'create';
    handleSubmitTask(task, type);
    handleSetEditTask(null);
    setTitle('');
    setDescription('');
  }

  function resetChanges() {
    handleSetEditTask(null);
    setTitle('');
    setDescription('');
  }

  return (
    <div>
      <div className="create-task-container">
        <div className="modal-header">
          <div>{currentlyEditing ? 'Edit a Task' : 'Create a New Task'}</div>
        </div>
        <div className="form-container">
          <div className="input-container">
            <div className="input-label">Title</div>
            <input
              placeholder="Insert Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-container">
            <div className="input-label">Description</div>
            <input
              placeholder="Insert Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
          </div>
          <div className="input-container">
            <div className="input-label">Status</div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
            >
              <option value={'todo'}>To Do</option>
              <option value={'in-progress'}>In Progress</option>
              <option value={'done'}>Done</option>
            </select>
          </div>
          <div className="input-container">
            <div className="input-label">Priority</div>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as TaskPriority)}
            >
              <option value={'low'}>Low</option>
              <option value={'medium'}>Medium</option>
              <option value={'high'}>High</option>
            </select>
          </div>
          <button onClick={resetChanges}>Cancel</button>
          <button onClick={onSubmitTask}>
            {editTask ? 'Edit Task' : 'Create New Task'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
