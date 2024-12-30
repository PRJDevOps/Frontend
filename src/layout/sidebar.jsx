import { AudioWaveform, BookOpen, Bot,SunMoon, Command,Wrench,Settings, Frame,UserPen, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal } from 'lucide-react'
import { useEffect, useState } from "react"; // Import useState and useEffect
import axios from "axios"; // Ensure axios is imported
import { NavMain } from "@/components/sidebar/nav-main"
import { NavProjects } from "@/components/sidebar/nav-projects"
import { NavUser } from "@/components/sidebar/nav-user"
import { TeamSwitcher } from "@/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarProvider,
  

} from "@/components/ui/sidebar"


// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
        {
      name: "platform",
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    
  ],
  projects: [
    { name: "Design Engineering", url: "#", icon: Frame },
    { name: "Sales & Marketing", url: "#", icon: PieChart },
    { name: "Travel", url: "#", icon: Map },
  ],
  others: [

    {
      title: "Settings",
      url: "#",
      icon: Settings,
      isActive: true,
      items: [
        { title: "Profile", url: "#" ,icon: UserPen},
        { title: "Account", url: "#" ,icon: Wrench},
        { title: "Appearance", url: "#" ,icon: SunMoon },
        { title: "Notification", url: "#" ,icon: Notification}
      ],
    },
  ]
}

 function AppSidebarContent({ ...props }) {


  const [users, setUsers] = useState([]); // State to hold users
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const fetchedUsers = response.data.users; // Assuming users is an array
        setUsers(fetchedUsers); // Set users in state
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUsers();
  }, []);

  // Determine which user to display
  const userToDisplay = users.length > 0 ? users[0] : null; // Get the first user or null if none

  return (
    <Sidebar collapsible="icon" {...props} className="p-3">
      <SidebarHeader className="pt-3">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavMain items={data.others} />
      </SidebarContent>
      <SidebarFooter className="pb-3">
        {loading ? (
          <div>Loading user data...</div> // Loading state
        ) : error ? (
          <div>{error}</div> // Error state
        ) : (
          <NavUser user={userToDisplay} /> // Pass the first user or null
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

export function AppSidebar() {
  return (
    <SidebarProvider>
      <AppSidebarContent />
    </SidebarProvider>
  )
}

