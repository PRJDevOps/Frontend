"use client"

import { useState } from "react"
import { Moon, Search, Users, UserPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AddUserDialog } from "@/components/Users/add-user-dialog"
import { columns } from "@/components/Users/columns"
import { DataTable } from "@/components/Users/data-table"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import Header from "@/layout/header"
import { AppSidebar } from "@/layout/sidebar"

const data = [
  {
    id: "1",
    username: "della_bruen78",
    name: "Della Bruen",
    email: "della76@hotmail.com",
    phoneNumber: "+17217965515",
    status: "Active",
    role: "Manager",
  },
  {
    id: "2",
    username: "taryn_casper81",
    name: "Taryn Casper",
    email: "taryn57@hotmail.com",
    phoneNumber: "+13962750487",
    status: "Inactive",
    role: "Superadmin",
  },
  {
    id: "3",
    username: "tracy.buckridge",
    name: "Tracy Buckridge",
    email: "tracy@example.com",
    phoneNumber: "+19349077612",
    status: "Suspended",
    role: "Cashier",
  },
  {
    id: "4",
    username: "keshawn_roob44",
    name: "Keshawn Roob",
    email: "keshawn@example.com",
    phoneNumber: "+13571041022",
    status: "Suspended",
    role: "Manager",
  },
  {
    id: "5",
    username: "abagail.olson36",
    name: "Abagail Olson",
    email: "abagail@example.com",
    phoneNumber: "+13044172419",
    status: "Suspended",
    role: "Manager",
  },
  {
    id: "6",
    username: "esperanza.murray67",
    name: "Esperanza Murray",
    email: "esperanza@example.com",
    phoneNumber: "+13537384812",
    status: "Suspended",
    role: "Manager",
  },
  {
    id: "7",
    username: "leanne.kunze",
    name: "Leanne Kunze",
    email: "leanne@example.com",
    phoneNumber: "+14370423744",
    status: "Suspended",
    role: "Superadmin",
  },
  {
    id: "8",
    username: "vidal.bayer-cremin",
    name: "Vidal Bayer-Cremin",
    email: "vidal@example.com",
    phoneNumber: "+14998257833",
    status: "Invited",
    role: "Admin",
  },
  {
    id: "9",
    username: "abigail_walter",
    name: "Abigail Walter",
    email: "abigail@example.com",
    phoneNumber: "+11660004677",
    status: "Inactive",
    role: "Admin",
  },
  {
    id: "10",
    username: "jarvis.howell",
    name: "Jarvis Howell",
    email: "jarvis@example.com",
    phoneNumber: "+11449167155",
    status: "Suspended",
    role: "Cashier",
  }
]

export default function UserList() {
  const [addUserOpen, setAddUserOpen] = useState(false)

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
          <h1 className="text-2xl font-semibold">User List</h1>
          <p className="text-muted-foreground">
            Manage your users and their roles here.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            Invite User
            <Users className="h-4 w-4" />
          </Button>
          <Button className="gap-2 " onClick={() => setAddUserOpen(true)}>
            Add User
          <UserPlus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <DataTable columns={columns} data={data} />
      <AddUserDialog open={addUserOpen} onOpenChange={setAddUserOpen} />
    </div>
    </div>
    </div>

      </SidebarProvider>
      </ThemeProvider>
  )
}

