import { useState } from 'react';
import { Button } from '../../../shared/ui/button';
import { Input } from '../../../shared/ui/input';

interface TodoCreateFormProps {
  onSubmit: (title: string) => void;
}

export const TodoCreateForm = ({ onSubmit }: TodoCreateFormProps) => {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Создать задачу</h2>
      <Input
        className="w-full max-w-md h-full"
        value={input}
        onChange={handleInputChange}
        placeholder="Введите название задачи"
      />
      <Button type="submit" className="h-full bg-[var(--primary)] text-[var(--primary-foreground)]">
        Добавить
      </Button>
    </form>
  );
};
