import { useState } from 'react';
import { Button } from '../../../shared/ui/button';
import { todoApi } from '../../../shared/api/todoApi';
import { TodoCreateForm } from '../../../features/todo-create/ui/TodoCreateForm';
import { TodoList } from '../../../features/todo-list/ui/TodoList';
import { toggleTodo } from '../../../features/todo-toggle/model/toggleTodo';
import { removeTodo } from '../../../features/todo-remove/model/removeTodo';
import { createTodoItem } from '../../../entities/todo/lib/utils';
import type { TodoItem } from '../../../entities/todo/model/types';

// Интерфейс для данных, получаемых с API
interface ApiTodoItem {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const TodoBoard = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedCount, setLoadedCount] = useState<number>(0);

  const handleAddTodo = (title: string) => {
    const newTodo = createTodoItem(title);
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: string, completed: boolean) => {
    setTodos(toggleTodo(todos, id, completed));
  };

  const handleRemoveTodo = (id: string) => {
    setTodos(removeTodo(todos, id));
  };

  const handleClearTodos = () => {
    setTodos([]);
    setLoadedCount(0);
  };

  const handleLoadMockData = async () => {
    try {
      setIsLoading(true);
      const data = await todoApi.fetchTodos(10, loadedCount);

      if (data.length > 0) {
        // Трансформируем данные в формат нашего приложения
        const newTodos = data.map((item: ApiTodoItem) => ({
          id: String(item.id),
          title: item.title,
          completed: item.completed,
        }));

        setTodos([...todos, ...newTodos]);
        setLoadedCount(loadedCount + data.length);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Произошла неизвестная ошибка');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-row gap-2">
        <TodoCreateForm onSubmit={handleAddTodo} />
        <Button className="h-full bg-[var(--primary)] text-[var(--primary-foreground)]" onClick={handleClearTodos}>
          Очистить
        </Button>
        <Button
          className="h-full bg-[var(--primary)] text-[var(--primary-foreground)]"
          onClick={handleLoadMockData}
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : 'Загрузить данные'}
        </Button>
      </div>

      {isLoading && todos.length === 0 && <div className="text-center">Загрузка...</div>}

      {todos.length > 0 && (
        <>
          <h2 className="text-2xl font-bold">Задачи</h2>
          {isLoading && (
            <div className="loader-container visible">
              <div className="text-center">Загрузка дополнительных задач...</div>
            </div>
          )}
          <TodoList items={todos} onToggle={handleToggleTodo} onDelete={handleRemoveTodo} />
        </>
      )}
    </div>
  );
};
