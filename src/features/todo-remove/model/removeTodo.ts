import type { TodoList } from '../../../entities/todo/model/types';

export const removeTodo = (todos: TodoList, id: string): TodoList => {
  return todos.filter((todo) => todo.id !== id);
};
