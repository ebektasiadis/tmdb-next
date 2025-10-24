'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
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

const ThemeToggleButton = () => {
  const t = useTranslations('ThemeToggleButton');
  const { setTheme } = useTheme();

  const dropdownMenuItems = [
    {
      label: t('themes.system'),
      value: AvailableThemes.System,
    },
    {
      label: t('themes.light'),
      value: AvailableThemes.Light,
    },
    {
      label: t('themes.dark'),
      value: AvailableThemes.Dark,
    },
  ].map((option) => (
    <DropdownMenuItem key={option.value} onClick={() => setTheme(option.value)}>
      {option.label}
    </DropdownMenuItem>
  ));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>{dropdownMenuItems}</DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggleButton;
