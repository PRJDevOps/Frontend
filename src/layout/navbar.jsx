import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const Navbar = () => {  
  return (
    <nav className="w-full  backdrop-blur  fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-foreground text-xl font-bold">
              DevOps
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Tutorials</DropdownMenuItem>
                <DropdownMenuItem>Blog</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Community <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Discord</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Twitter</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/download" className="text-foreground hover:text-primary transition-colors">
              Download
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl space-x-4">

            <Button variant="ghost" 
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10"
                      >
              <Link to="/login" >Get Started</Link> 
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;