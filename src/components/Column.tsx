import TaskCard from './TaskCard';

import type { Task, TaskStatus } from '../types/task';

import '../styles/Column.css';

type ColumnProps = {
  columnName: string;
  columnStatus: TaskStatus;
  tasks: Task[];

  handleSetEditTask: (id: string | null) => void;
  handleSetDeleteTaskId: (id: string) => void;
  handleToggleTaskFormModal: () => void;
  handleDragStart: (id: string) => void;
  handleDropTask: (newTaskStatus: TaskStatus) => void;
};

function Column(props: ColumnProps) {
  const {
    columnName,
    columnStatus,
    tasks,
    handleSetEditTask,
    handleSetDeleteTaskId,
    handleToggleTaskFormModal,
    handleDragStart,
    handleDropTask,
  } = props;
  const hasNoTasks = tasks.length === 0;

  return (
    <div
      className="column-container"
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        handleDropTask(columnStatus);
      }}
    >
      <div className="column-header">
        <div>{columnName}</div>
      </div>
      <div>
        {hasNoTasks ? (
          <div className="empty-state-message">No Tasks Yet</div>
        ) : (
          tasks.map((task) => {
            return (
              <TaskCard
                key={task.id}
                task={task}
                handleSetEditTask={handleSetEditTask}
                handleSetDeleteTaskId={handleSetDeleteTaskId}
                handleToggleTaskFormModal={handleToggleTaskFormModal}
                handleDragStart={handleDragStart}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
export default Column;
