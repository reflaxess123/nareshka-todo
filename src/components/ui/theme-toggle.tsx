import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { Button } from './button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className="bg-[var(--primary)] text-[var(--primary-foreground)]"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Переключить тему"
    >
      {theme === 'light' ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </Button>
  );
}
