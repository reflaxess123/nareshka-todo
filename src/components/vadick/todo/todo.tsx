import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Loader, Trash2 } from 'lucide-react';
import { useState } from 'react';

export const Todo = () => {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const [tasks, setTasks] = useState<string[]>([]);
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddTask = () => {
    setTasks([...tasks, input]);
    setInput('');
  };

  const handleClearTasks = () => {
    setTasks([]);
    setCheckedTasks({});
    setLoadedCount(0);
  };

  const handleDeleteTask = (index: number) => {
    const taskToRemove = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));

    // Удаляем состояние чекбокса для удаленной задачи
    const updatedCheckedTasks = { ...checkedTasks };
    delete updatedCheckedTasks[taskToRemove];
    setCheckedTasks(updatedCheckedTasks);
  };

  const handleTaskCheck = (task: string, checked: boolean) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [task]: checked,
    }));
  };

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleLoadMockData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      await sleep(5000);
      const data = await response.json();
      const startIndex = loadedCount;
      const endIndex = startIndex + 10;
      const newTasks = data.slice(startIndex, endIndex).map((task: { title: string }) => task.title);

      if (newTasks.length > 0) {
        setTasks([...tasks, ...newTasks]);
        setLoadedCount(endIndex);
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
    return <div>{error}</div>;
  }
  return (
    <main className="flex justify-center items-center h-screen flex-col gap-4">
      <section className="flex flex-row gap-2">
        <form
          className="flex flex-row gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
        >
          <h2 className="text-2xl font-bold">Создать задачу</h2>
          <Input className="w-full max-w-md h-full" value={input} onChange={handleInputChange} />
        </form>
        <Button className="h-full bg-[var(--primary)] text-[var(--primary-foreground)]" onClick={handleAddTask}>
          Добавить
        </Button>
        <Button className="h-full bg-[var(--primary)] text-[var(--primary-foreground)]" onClick={handleClearTasks}>
          Очистить
        </Button>
        <Button className="h-full bg-[var(--primary)] text-[var(--primary-foreground)]" onClick={handleLoadMockData}>
          Загрузить мок данные
        </Button>
      </section>
      <section className="flex flex-col gap-2 items-center">
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
        {tasks.length > 0 && (
          <>
            <h2 className="text-2xl font-bold">Задачи</h2>
            <ul className="flex flex-col gap-2 max-w-[250px]">
              {tasks.map((task, index) => (
                <li key={index} className="flex flex-row gap-2 items-center">
                  <Checkbox
                    className="bg-white !p-0"
                    id={`task-${index}`}
                    checked={checkedTasks[task] || false}
                    onCheckedChange={(checked) => handleTaskCheck(task, checked === true)}
                  />
                  <label
                    htmlFor={`task-${index}`}
                    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate overflow-hidden flex-1 ${
                      checkedTasks[task] ? 'line-through text-muted-foreground' : ''
                    }`}
                  >
                    {index + 1}. {task}
                  </label>
                  <Trash2 size={16} onClick={() => handleDeleteTask(index)} className="cursor-pointer flex-shrink-0" />
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
};
