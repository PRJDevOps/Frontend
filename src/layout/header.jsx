import { Search} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { UserNav } from "@/components/dashboard/user-nav"

export default function Header() {
    return (
        <header className="border-b">
        <div className="flex items-center h-16 px-4 gap-4">
          <div className="flex-1 flex items-center gap-2 bg-muted/40 rounded-md px-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input 
              placeholder= " Search..." 
              className="h-9 w-60 bg-transparent border-none focus:outline-none placeholder:text-muted-foreground text-sm"
            />
          </div>
          <ThemeToggle />
          <UserNav />

        </div>
      </header>
    )
}