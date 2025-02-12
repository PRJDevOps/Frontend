"use client"

import { Badge } from "@/components/ui/badge"
import { MoreVertical, Users, Pencil, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
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
    accessorKey: "id",
    header: "ID",
    enableHiding: true,
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      const getStatusColor = (status) => {
        switch (status) {
          case "Active":
            return "bg-emerald-500/15 border border-emerald-500 text-emerald-500"
          case "Inactive":
            return "bg-gray-600/15 border dark:border-gray-300 dark:text-gray-300 border-gray-600 text-gray-600"
          case "Suspended":
            return "bg-red-500/15 border border-red-500 text-red-500"
          case "Invited":
            return "bg-blue-500/15 border border-blue-500 text-blue-500"
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
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role")
      return (
        <div className="flex items-center gap-2">
          {role === "user" && <Users className="h-4 w-4" />}
          {role}
        </div>
      )
    },
  },


  {
    id: "actions",
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          const token = localStorage.getItem('authToken')
          const userId = row.original.id // Change this line
          
          await axios.delete(`${import.meta.env.VITE_API_URL}/api/auth/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          window.location.reload()
        } catch (error) {
          console.error('Error deleting user:', error)
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
              <Pencil  className="mr-2 h-4 w-4" />
              Edit
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
                    This action cannot be undone. This will permanently delete the user.
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

