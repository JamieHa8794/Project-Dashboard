import { tasks as InitialTasks } from '../data/tasks';
import type { Task, TaskUpdates } from '../types/task';

const TASKS_STORAGE_KEY = 'tasks';

function readTasks(): Task[] {
  const savedData = localStorage.getItem(TASKS_STORAGE_KEY);

  if (!savedData) {
    return InitialTasks;
  }

  return JSON.parse(savedData) as Task[];
}

function writeTasks(tasks: Task[]): void {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

export async function getTasks(): Promise<Task[]> {
  return readTasks();
}

export async function deleteTask(taskId: string): Promise<void> {
  const tasks = readTasks();
  const newTasks = tasks.filter((task) => task.id !== taskId);

  writeTasks(newTasks);
}

export async function createTask(newTask: Task): Promise<void> {
  const tasks = readTasks();
  const updatedTaskList = [...tasks, newTask];
  writeTasks(updatedTaskList);
}

export async function updateTask(
  taskId: string,
  updates: TaskUpdates,
): Promise<Task> {
  const tasks = readTasks();

  let updatedTask: Task | undefined;

  const updatedTaskList = tasks.map((task) => {
    if (task.id === taskId) {
      updatedTask = { ...task, ...updates };
      return updatedTask;
    }
    return task;
  });

  writeTasks(updatedTaskList);

  if (!updatedTask) {
    throw new Error('Task not found');
  }
  return updatedTask;
}
