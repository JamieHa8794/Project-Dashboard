import type { Task } from '../types/task';

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Create project',
    description: 'Set up Vite and React',
    status: 'done',
    priority: 'medium',
  },
  {
    id: '2',
    title: 'Build TaskCard',
    description: 'Render task information',
    status: 'done',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Create Column',
    description: 'Display tasks by status',
    status: 'todo',
    priority: 'medium',
  },
  {
    id: '4',
    title: 'Create Board',
    description: 'Render all columns',
    status: 'todo',
    priority: 'medium',
  },
];
