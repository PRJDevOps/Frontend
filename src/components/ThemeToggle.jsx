import { Moon, Sun } from 'lucide-react'

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme(); // Assuming useTheme provides the current theme

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="flex items-center space-x-2">
      {theme === "dark" ? (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </>
      ) : (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </>
      )}
    </Button>
  );
}

