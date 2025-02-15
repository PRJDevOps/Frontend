"use client"

import { useState, useEffect } from "react"
import { Clock, UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/Users/data-table"
import { columns } from "@/components/Attendance/columns"
import { AddAttendanceDialog } from "@/components/Attendance/add-attendance-dialog"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import Header from "@/layout/header"
import { AppSidebar } from "@/layout/sidebar"
import { Toaster } from "@/components/ui/toaster"

export default function AttendanceList() {
  const [addAttendanceOpen, setAddAttendanceOpen] = useState(false)
  const [attendance, setAttendance] = useState([])

  // Mock data for testing
  useEffect(() => {
    const mockAttendance = [
      {
        id: 1,
        user_id: 2,
        user_name: "John Doe",
        date: "2024-01-22",
        status: "present",
        check_in_time: "09:00:00",
        check_out_time: "17:00:00",
        notes: "Regular working day"
      },
      {
        id: 2,
        user_id: 3,
        user_name: "Jane Smith",
        date: "2024-01-22",
        status: "absent",
        check_in_time: null,
        check_out_time: null,
        notes: "Sick leave"
      }
    ]
    setAttendance(mockAttendance)
  }, [])

  return (
    <ThemeProvider defaultTheme="dark">
      <SidebarProvider>
        <div className="flex min-h-screen dark:bg-background">
          <AppSidebar />
          <div className="flex-1">
            <Header />
            <div className="bg-background p-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-semibold">Attendance Management</h1>
                  <p className="text-muted-foreground">
                    Track and manage employee attendance records.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button className="gap-2" onClick={() => setAddAttendanceOpen(true)}>
                    Add Attendance
                    <Clock className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <DataTable columns={columns} data={attendance} />
              <AddAttendanceDialog open={addAttendanceOpen} onOpenChange={setAddAttendanceOpen} />
            </div>
          </div>
        </div>
        <Toaster />
      </SidebarProvider>
    </ThemeProvider>
  )
}