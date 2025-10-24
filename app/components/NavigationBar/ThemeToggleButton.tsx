'use client';

import { MonitorCog, Moon, SquareDashed, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const AvailableThemes = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
} as const;

const DropdownIcon = () => {
  const { theme } = useTheme();

  switch (theme) {
    case AvailableThemes.System:
      return <MonitorCog />;
    case AvailableThemes.Light:
      return <Sun />;
    case AvailableThemes.Dark:
      return <Moon />;
    default:
      return <SquareDashed />;
  }
};

const ThemeToggleButton = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon">
          <DropdownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme(AvailableThemes.System)}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(AvailableThemes.Light)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(AvailableThemes.Dark)}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggleButton;
