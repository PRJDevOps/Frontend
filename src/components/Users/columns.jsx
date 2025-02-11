"use client"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreVertical, Users } from 'lucide-react'
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
    cell: () => {
      return (
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      )
    },
  },
]

