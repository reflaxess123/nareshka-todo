import type { TodoItem, TodoList } from '../model/types';

// Генерация уникального ID
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Создание новой задачи
export const createTodoItem = (title: string): TodoItem => {
  return {
    id: generateId(),
    title,
    completed: false,
  };
};

// Фильтрация задач
export const filterTodos = (todos: TodoList, status: 'all' | 'active' | 'completed'): TodoList => {
  switch (status) {
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
