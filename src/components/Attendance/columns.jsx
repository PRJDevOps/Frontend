"use client"

import { Badge } from "@/components/ui/badge"

export const columns = [
  {
    accessorKey: "user_name",
    header: "Employee Name",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      const getStatusColor = (status) => {
        switch (status) {
          case "present":
            return "bg-green-500/15 border border-green-500 text-green-500"
          case "absent":
            return "bg-red-500/15 border border-red-500 text-red-500"
          case "late":
            return "bg-yellow-500/15 border border-yellow-500 text-yellow-500"
          default:
            return "bg-gray-500/15 border border-gray-300 text-gray-300"
        }
      }

      return (
        <Badge variant="secondary" className={`${getStatusColor(status)} px-1.5 py-0.5 text-xs`}>
          {status.toUpperCase()}
        </Badge>
      )
    },
  },
  {
    accessorKey: "check_in_time",
    header: "Check In",
  },
  {
    accessorKey: "check_out_time",
    header: "Check Out",
  },
  {
    accessorKey: "notes",
    header: "Notes",
  }
]