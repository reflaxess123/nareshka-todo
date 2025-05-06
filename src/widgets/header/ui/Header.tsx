import { Link } from 'react-router-dom';
import { Button } from '../../../shared/ui/button';
import { ThemeToggle } from '../../../shared/ui/theme-toggle';

interface Route {
  path: string;
  label: string;
}

interface HeaderProps {
  routes: Route[];
}

export const Header = ({ routes }: HeaderProps) => {
  return (
    <header className="p-4 flex justify-end">
      <div className="size-5 flex mr-auto gap-2">
        {routes.map(({ path, label }) => (
          <Button key={path} variant="outline" asChild>
            <Link to={path}>{label}</Link>
          </Button>
        ))}
      </div>
      <ThemeToggle />
    </header>
  );
};
