import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import axios from "axios"
import { Badge } from "@/components/ui/badge"

export function RecentSales() {
  const [recentTasks, setRecentTasks] = useState([])

  useEffect(() => {
    const fetchRecentTasks = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`, {
          headers: { Authorization: `Bearer ${token}` }
        })

        const tasks = response.data.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5)

        setRecentTasks(tasks)
      } catch (error) {
        console.error('Error fetching recent tasks:', error)
      }
    }

    fetchRecentTasks()
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "Done": return "bg-green-500/15 text-green-500"
      case "IN_PROGRESS": return "bg-blue-500/15 text-blue-500"
      case "TODO": return "bg-yellow-500/15 text-yellow-500"
      default: return "bg-gray-500/15 text-gray-500"
    }
  }

  return (
    <div className="space-y-8">
      {recentTasks.map((task) => (
        <div key={task.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{task.title.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{task.title}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(task.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="ml-auto">
            <Badge className={`${getStatusColor(task.status)}`}>
              {task.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

