import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { DIcons } from "dicons"


export function Navbar() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold">DevOps</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}