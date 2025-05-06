import { TodoBoard } from '@/widgets/todo-board';

export function Todo() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Задачи</h1>
      <TodoBoard />
    </div>
  );
}

export default Todo;
