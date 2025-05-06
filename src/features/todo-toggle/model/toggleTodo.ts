import type { TodoList } from '../../../entities/todo/model/types';

export const toggleTodo = (todos: TodoList, id: string, completed: boolean): TodoList => {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed };
    }
    return todo;
  });
};
