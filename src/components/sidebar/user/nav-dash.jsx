"use client"
import { Link } from "react-router-dom"
import { BarChart3, CheckSquare, LayoutGrid, MessageSquareMore, Users } from 'lucide-react'

import {

  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar"

export function SidebarNav() {
return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-zinc-400">General</SidebarGroupLabel>
                <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                    <SidebarMenuButton asChild >
                        <Link to="/" className="hover:bg-zinc-300 dark:hover:bg-zinc-800">
                        <BarChart3 className="size-4" />
                        <span>/</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <a href="/user/tasks" className="hover:bg-zinc-300 dark:hover:bg-zinc-800">
                        <CheckSquare className="size-4" />
                        <span>Tasks</span>
                        </a>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link to="/user/users" className="hover:bg-zinc-300 dark:hover:bg-zinc-800">
                        <Users className="size-4" />
                        <span>Users</span>
                        </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
)
}