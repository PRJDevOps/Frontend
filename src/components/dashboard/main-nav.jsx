import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

export function MainNav({ className, ...props }) {
  const { toggleSidebar } = useSidebar()

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
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
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/customers"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  )
}

