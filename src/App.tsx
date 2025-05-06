import { Todo } from './components/vadick/todo/todo';
import { ThemeToggle } from './components/ui/theme-toggle';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-end">
        <div className="size-5 flex mr-auto gap-2">
          <Button variant="outline">Todo</Button>
          <Button variant="outline">Posts</Button>
          <Button variant="outline">Comments</Button>
        </div>
        <ThemeToggle />
      </header>
      <main className="flex-1">
        <Todo />
      </main>
    </div>
  );
}

export default App;
