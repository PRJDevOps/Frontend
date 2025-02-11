"use client"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreVertical, AlertCircle, FileText, Wrench } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import axios from 'axios'

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="px-1">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="px-1">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type")
      const getTypeIcon = (type) => {
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
      return (
        <div className="flex items-center gap-2">
          {getTypeIcon(type)}
          {type}
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      const getStatusColor = (status) => {
        switch (status) {
          case "Done":
            return "bg-emerald-500/15 border border-emerald-500 text-emerald-500"
          case "IN PROGRESS":
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

      return (
        <Badge variant="secondary" className={`${getStatusColor(status)} px-1.5 py-0.5 text-xs`}>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority")
      const getPriorityColor = (priority) => {
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
        <span className={`font-medium ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          const token = localStorage.getItem('authToken')
          const taskId = row.getValue("id")
          
          await axios.delete(`${import.meta.env.VITE_API_URL}/api/tasks/${taskId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          window.location.reload()
        } catch (error) {
          console.error('Error deleting task:', error)
        }
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-gray-600 dark:text-gray-400">
              <Eye className="mr-2 h-4 w-4" />
              View
            </DropdownMenuItem>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem className="text-red-600" onSelect={(e) => e.preventDefault()}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the task.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} className="bg-red-600 dark:text-white hover:bg-red-700">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]

