import type { Column } from '../types/board';
import type { SelectOption } from '../types/common';

import type { sortOptions } from '../types/task';

export const columns: Column[] = [
  { id: '1', title: 'To Do', status: 'todo' },
  { id: '2', title: 'In Progress', status: 'in-progress' },
  { id: '3', title: 'Done', status: 'done' },
];

export const sortList: SelectOption<sortOptions>[] = [
  {
    key: 'default',
    name: 'Default',
  },
  {
    key: 'due-date',
    name: 'Due Date',
  },
  {
    key: 'priority',
    name: 'Priority',
  },
  {
    key: 'title',
    name: 'Title',
  },
];
