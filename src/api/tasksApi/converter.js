import { Task } from '../../entities/task';

export const converter = (tasks) => tasks.reduce((acc, task) => {
  acc.push(new Task({
    id: task.id,
    title: task.title,
    status: task.completed,
  }));

  return acc;
}, []);
