import type { Task } from '../types/task';

import '../styles/TaskCard.css';

type TaskCardProps = {
  task: Task;
  handleSetEditTask: (id: string | null) => void;
  handleDeleteTask: (id: string) => void;
};

function TaskCard(props: TaskCardProps) {
  const {
    task: { id, title, description, priority },
    handleSetEditTask,
    handleDeleteTask,
  } = props;
  return (
    <div>
      <div className="card-container">
        <div className="card-header">
          <div>{title}</div>
          <button
            onClick={() => {
              handleSetEditTask(null);
              handleDeleteTask(id);
            }}
          >
            X
          </button>
        </div>
        <div className="card-body">
          <div>{description}</div>
          <div>{priority}</div>
        </div>
        <div className="card-footer">
          <button
            onClick={() => {
              handleSetEditTask(id);
            }}
          >
            Edit Card
          </button>
        </div>
      </div>
    </div>
  );
}
export default TaskCard;
