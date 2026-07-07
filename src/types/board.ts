import type { TaskStatus } from './task';

export type Column = {
  id: string;
  title: string;
  status: TaskStatus;
};
