"use client"

import { columns } from "@/components/Tasks/columns"
import { DataTable } from "@/components/Tasks/data-table"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import Header from "@/layout/header"
import { AppSidebar } from "@/layout/user/sidebar"
import { useEffect, useState } from 'react' // Add these imports
import axios from 'axios'
import {AddTasksSheet} from "@/components/Tasks/add-tasks"
import { Toaster } from "@/components/ui/toaster" // Add this import

export default function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (response.data.success) {
          // Transform the data to include only required fields
          const formattedTasks = response.data.data.map(task => ({
            id: task.id,
            title: task.title,
            type: task.type,
            status: task.status,
            priority: task.priority
          }))
          setTasks(formattedTasks)
        }
      } catch (error) {
        console.error('Error fetching tasks:', error)
        setError('Failed to fetch tasks')
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
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
                  <h1 className="text-2xl font-semibold">Tasks</h1>
                  <p className="text-muted-foreground">
                    Here's a list of your tasks for this month!
                  </p>
                </div>
                <div className="flex gap-2">
                <AddTasksSheet />
                </div>
              </div>

              {loading ? (
                <div>Loading tasks...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <DataTable columns={columns} data={tasks} />
              )}
            </div>
          </div>
        </div>
        <Toaster />
      </SidebarProvider>
    </ThemeProvider>
  )
}

