import { Link } from 'react-router-dom';
import { Button } from './components/ui/button';
import { ThemeToggle } from './components/ui/theme-toggle';
import { RouterConfig, router } from './config/router';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-end">
        <div className="size-5 flex mr-auto gap-2">
          {router.map(({ path, label }) => (
            <Button key={path} variant="outline" asChild>
              <Link to={path}>{label}</Link>
            </Button>
          ))}
        </div>
        <ThemeToggle />
      </header>
      <main className="flex-1">
        <RouterConfig />
      </main>
    </div>
  );
}

export default App;
