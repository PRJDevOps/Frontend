
import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ClipboardPlus } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AddTasksSheet() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    task: "",
    status: "TODO",
    priority: "LOW",
    team: ""
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSelectChange = (value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('authToken')
      const submissionData = {
        ...formData,
        team: formData.team || 'ALL'
      }
      await axios.post(`${import.meta.env.VITE_API_URL}/api/tasks`, submissionData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setOpen(false)
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2">
          Add Task
          <ClipboardPlus className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] overflow-y-auto max-h-screen">
        <SheetHeader>
          <SheetTitle>Add New Task</SheetTitle>
          <SheetDescription>
            Fill in the details for the new task. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4 pb-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title </Label>
            <Input 
              id="title" 
              value={formData.title}
              onChange={handleChange}
              placeholder="Task title"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Type </Label>
            <Input 
              id="type" 
              value={formData.type}
              onChange={handleChange}
              placeholder="Task type"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="team">Team <span className="dark:text-gray-600 text-gray-400">(Optional)</span> </Label>
            <Input 
              id="team" 
              value={formData.team}
              onChange={handleChange}
              placeholder="Team name or leave empty for ALL"
            />
          </div>
          <div className="space-y-2">
            <Label>Status </Label>
            <Select onValueChange={(value) => handleSelectChange(value, 'status')} defaultValue="TODO" required>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TODO">Todo</SelectItem>
                <SelectItem value="IN PROGRESS">In Progress</SelectItem>
                <SelectItem value="DONE">Done</SelectItem>
                <SelectItem value="Canceled">Canceled</SelectItem>
                <SelectItem value="Backlog">Backlog</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Priority </Label>
            <Select onValueChange={(value) => handleSelectChange(value, 'priority')} defaultValue="LOW" required>
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="LOW">Low</SelectItem>
                <SelectItem value="MEDIUM">Medium</SelectItem>
                <SelectItem value="HIGH">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="task">Task Description </Label>
            <Textarea 
              id="task" 
              value={formData.task}
              onChange={handleChange}
              placeholder="Write your task description here..."
              className="min-h-[100px] resize-none"
              required
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}