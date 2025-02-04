"use client"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreVertical, AlertCircle, FileText, Wrench } from 'lucide-react'
import { Button } from "@/components/ui/button"

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
          case "In Progress":
            return "bg-blue-500/15 border border-blue-500 text-blue-500"
          case "Todo":
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
          case "High":
            return "text-red-500"
          case "Medium":
            return "text-yellow-500"
          case "Low":
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
    cell: () => {
      return (
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      )
    },
  },
]

