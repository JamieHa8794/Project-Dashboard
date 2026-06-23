import { useState } from 'react';
import '../styles/CreateTask.css';

type CreateTaskProps = {
  handleSubmitNewTask: (title: string, description: string) => void;
};

function CreateTask(props: CreateTaskProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleCreateNewTask() {
    props.handleSubmitNewTask(title, description);
    setTitle('');
    setDescription('');
  }

  return (
    <div>
      <div className="create-task-container">
        <div className="modal-header">
          <div>Create a New Task</div>
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
          <button onClick={handleCreateNewTask}>Create New Task</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
