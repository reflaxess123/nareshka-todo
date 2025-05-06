import { Trash2 } from 'lucide-react';
import { Checkbox } from '../../../shared/ui/checkbox';
import type { TodoItem as TodoItemType } from '../model/types';

interface TodoItemProps {
  item: TodoItemType;
  index: number;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ item, index, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className="task-item flex flex-row gap-2 items-center">
      <Checkbox
        className="bg-white !p-0"
        id={`task-${item.id}`}
        checked={item.completed}
        onCheckedChange={(checked) => onToggle(item.id, checked === true)}
      />
      <label
        htmlFor={`task-${item.id}`}
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate overflow-hidden flex-1 ${
          item.completed ? 'line-through text-muted-foreground' : ''
        }`}
      >
        {index + 1}. {item.title}
      </label>
      <Trash2 size={16} onClick={() => onDelete(item.id)} className="cursor-pointer flex-shrink-0" />
    </li>
  );
};
