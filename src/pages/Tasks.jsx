"use client"
import {  UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { columns } from "@/components/Tasks/columns"
import { DataTable } from "@/components/Tasks/data-table"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import Header from "@/layout/header"
import { AppSidebar } from "@/layout/sidebar"

const data = [
  {
    id: "TASK-8782",
    title: "You can't compress the program without quantifying the open-source SSD pixel!",
    type: "Documentation",
    status: "In Progress",
    priority: "Medium"
  },
  {
    id: "TASK-7878",
    title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    type: "Documentation",
    status: "Backlog",
    priority: "Medium"
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    type: "Bug",
    status: "Todo",
    priority: "High"
  },
  {
    id: "TASK-5562",
    title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    type: "Feature",
    status: "Backlog",
    priority: "Medium"
  },
  {
    id: "TASK-8686",
    title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
    type: "Feature",
    status: "Canceled",
    priority: "Medium"
  },
  {
    id: "TASK-1280",
    title: "Use the digital TLS panel, then you can transmit the haptic system!",
    type: "Bug",
    status: "Done",
    priority: "High"
  },
  {
    id: "TASK-7262",
    title: "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    type: "Feature",
    status: "Done",
    priority: "High"
  },
  {
    id: "TASK-1138",
    title: "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    type: "Feature",
    status: "In Progress",
    priority: "Medium"
  },
  {
    id: "TASK-7184",
    title: "We need to program the back-end THX pixel!",
    type: "Feature",
    status: "Todo",
    priority: "Low"
  },
  {
    id: "TASK-5160",
    title: "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    type: "Documentation",
    status: "In Progress",
    priority: "High"
  },
  {
    id: "TASK-5160",
    title: "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    type: "Documentation",
    status: "In Progress",
    priority: "High"
  }
]

export default function Tasks() {

  return (
    <ThemeProvider defaultTheme="dark">
    <SidebarProvider>
    <div className="flex min-h-screen dark:bg-background">
      <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 ">
          <Header />
    <div className="bg-background p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Tasks</h1>
          <p className="text-muted-foreground">
          Heres a list of your tasks for this month!
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2 " >
            Add task
          <UserPlus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
    </div>
    </div>

      </SidebarProvider>
      </ThemeProvider>
  )
}

