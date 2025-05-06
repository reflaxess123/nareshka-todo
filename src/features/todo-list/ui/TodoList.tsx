import type { TodoItem as TodoItemType } from '../../../entities/todo/model/types';
import { TodoItem } from '../../../entities/todo/ui/TodoItem';

interface TodoListProps {
  items: TodoItemType[];
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export const TodoList = ({ items, onToggle, onDelete }: TodoListProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="tasks-container">
      <ul className="task-list flex flex-col gap-2 max-w-[250px]">
        {items.map((item, index) => (
          <TodoItem key={item.id} item={item} index={index} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};
