import { ThemeToggle } from '@/components/ThemeToggle'
import { UserNav } from "@/components/dashboard/user-nav"
import { Button } from "@/components/ui/button"
import { SearchCommand } from "@/components/dashboard/SearchDialog"
import { useSidebar } from "@/components/ui/sidebar"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

export default function Header() {
  const { toggleSidebar } = useSidebar()

    return (
        <header className="border-b border-zinc-300 dark:border-zinc-700">
        <div className="flex items-center h-16 px-4 gap-4">
          <div className="flex-1 flex items-center gap-2 bg-muted/40 rounded-md px-2">
          <HoverCard>
            <HoverCardTrigger>
                <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 hover:bg-zinc-300 dark:hover:bg-zinc-800"
                onClick={toggleSidebar}
              >
                <svg
                  className=" h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                </svg>
              </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-12">
                <p className="text-xs">⌘B</p>
              </HoverCardContent>
            </HoverCard>
           <SearchCommand/>
          </div>
          <ThemeToggle />
          <UserNav />

        </div>
      </header>
    )
}