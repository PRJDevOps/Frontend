"use client"

import { useState } from "react"
import { AlertCircle, FileText, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Task {
  id: string
  id_user: number
  title: string
  type: string
  task: string
  status: string
  priority: string
  team: string
  createdAt: string
  updatedAt: string
}

const TaskViewDialog = ({ task }: { task: Task }) => {
  const [isOpen, setIsOpen] = useState(false)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Bug":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "Feature":
        return <Wrench className="h-4 w-4 text-blue-500" />
      case "Documentation":
        return <FileText className="h-4 w-4 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Done":
        return "bg-emerald-500/15 border border-emerald-500 text-emerald-500"
      case "IN_PROGRESS":
        return "bg-blue-500/15 border border-blue-500 text-blue-500"
      case "TODO":
        return "bg-yellow-500/15 border border-yellow-500 text-yellow-500"
      case "Backlog":
        return "bg-gray-500/15 border border-gray-500 text-gray-500"
      case "Canceled":
        return "bg-red-500/15 border border-red-500 text-red-500"
      default:
        return "bg-gray-500/15 border border-gray-300 text-gray-300"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "HIGH":
        return "text-red-500"
      case "MEDIUM":
        return "text-yellow-500"
      case "LOW":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">View</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{task.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Card>
            <CardContent className="pt-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Type:</p>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(task.type)}
                    {task.type}
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Priority:</p>
                  <p className={`font-medium ${getPriorityColor(task.priority)}`}>{task.priority}</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Team:</p>
                  <p>{task.team}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-2">Message:</h3>
              <p className="text-sm">{task.task}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Status:</p>
                  <Badge variant="secondary" className={`${getStatusColor(task.status)} px-1.5 py-0.5 text-xs`}>
                    {task.status}
                  </Badge>
                </div>
                <div>
                  <p className="font-semibold mb-2">Created:</p>
                  <p>{new Date(task.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Updated:</p>
                  <p>{new Date(task.updatedAt).toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function TaskView() {
  const task: Task = {
    id: "50bcb483-8557-4a05-8e31-3af5c5cae337",
    id_user: 2,
    title: "Global Corp Support Ticket",
    type: "Bug",
    task: "Resolve authentication issues for Global Corp users. This includes resetting passwords, verifying account access, and troubleshooting login problems. Please ensure all affected users are able to access their accounts securely.",
    status: "TODO",
    priority: "HIGH",
    team: "Support",
    createdAt: "2025-02-13T17:13:32.000Z",
    updatedAt: "2025-02-13T17:13:32.000Z",
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Task Overview</h2>
      <Card>
        <CardHeader>
          <CardTitle>{task.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{task.task}</p>
          <TaskViewDialog task={task} />
        </CardContent>
      </Card>
    </div>
  )
}

