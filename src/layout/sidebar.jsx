import { AudioWaveform,SunMoon, Command,Wrench,Settings,UserPen, GalleryVerticalEnd, Bell as NotificationIcon } from 'lucide-react'
import { useEffect, useState } from "react"; // Import useState and useEffect
import axios from "axios"; // Ensure axios is imported
import { NavMain } from "@/components/sidebar/nav-main"
import { NavUser } from "@/components/sidebar/nav-user"
import { TeamSwitcher } from "@/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  
} from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/sidebar/nav-dash"


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


  others: [

    {
      title: "Settings",
      url: "#",
      icon: Settings,
      isActive: false,
      items: [
        { title: "Profile", url: "profile" ,icon: UserPen},
        { title: "Account", url: "#" ,icon: Wrench},
        { title: "Appearance", url: "#" ,icon: SunMoon },
        { title: "Notification", url: "#" ,icon: NotificationIcon}
      ],
    },
  ]
}

export function AppSidebar({ ...props }) {


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
    <Sidebar collapsible="icon" {...props} className="border-r-0">
      <SidebarHeader className="relative h-16 px-2 py-4">
      <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
      <SidebarNav />
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


