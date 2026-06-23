import { useState } from 'react';

import Column from './Column';
import CreateTask from './CreateTask';

import type { Task } from '../types/task';
import { tasks as InitialTasks } from '../data/tasks';

import '../styles/Board.css';

function Board() {
  const columns = [
    { id: 1, title: 'To Do', status: 'todo' },
    { id: 2, title: 'In Progress', status: 'in-progress' },
    { id: 3, title: 'Done', status: 'done' },
  ];

  const [tasks, setTasks] = useState<Task[]>(InitialTasks);

  function handleSubmitNewTask(title: string, description: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status: 'todo',
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div>
      <CreateTask handleSubmitNewTask={handleSubmitNewTask} />
      <div className="board-container">
        <div className="column-container">
          {columns.map((column) => {
            const columnTasks = tasks.filter(
              (task) => task.status === column.status,
            );
            return (
              <Column
                key={column.id}
                columnName={column.title}
                tasks={columnTasks}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Board;
