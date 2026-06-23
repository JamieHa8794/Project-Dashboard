import TaskCard from './TaskCard';

import type { Task } from '../types/task';

import '../styles/Column.css';

type ColumnProps = {
  columnName: string;
  tasks: Task[];
};

function Column({ columnName, tasks }: ColumnProps) {
  const hasNoTasks = tasks.length === 0;

  return (
    <div>
      <div>
        <div className="column-header">
          <div>{columnName}</div>
        </div>
        <div>
          {hasNoTasks ? (
            <div className="empty-state-message">No Tasks Yet</div>
          ) : (
            tasks.map((task) => {
              return <TaskCard key={task.id} task={task} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
export default Column;
