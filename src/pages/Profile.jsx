"use client"
import { AppSidebar } from "@/layout/sidebar"
import {  LayoutPanelLeft ,User,KeyRound,Bell , MonitorDot} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/layout/header"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeProvider } from "@/components/theme-provider"

export default function SettingsPage() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex min-h-screen dark:bg-background">
      <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 ">
          <Header />

          <main className="p-6">
            <div className=" mx-auto">
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground mb-6 pb-3 border-b">
                Manage your account settings and set e-mail preferences.
              </p>

              <div className="flex gap-8">
                <div className="w-48 flex flex-col gap-1">
                  <Button variant="ghost" className="justify-start hover:text-line font-medium">
                  <User /> 
                  Profile
                  </Button>
                  <Button variant="ghost" className="justify-start">
                  <KeyRound />
                  Account
                  </Button>
                  <Button variant="ghost" className="justify-start">
                  <LayoutPanelLeft />
                  Appearance
                  </Button>
                  <Button variant="ghost" className="justify-start">
                  <Bell />
                   Notifications
                  </Button>
                  <Button variant="ghost" className="justify-start">
                  <MonitorDot />
                   Display
                  </Button>
                </div>

                <div className="flex-1">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">Profile</h2>
                      <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Username</label>
                        <Input defaultValue="shadcn" className="mt-2" />
                        <p className="text-sm text-muted-foreground mt-2">
                          This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <Select defaultValue="select">
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="select">Select a verified email to display</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-muted-foreground mt-2">
                          You can manage verified email addresses in your email settings.
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Bio</label>
                        <Textarea 
                          defaultValue="I own a computer."
                          className="mt-2"
                        />
                        <p className="text-sm text-muted-foreground mt-2">
                          You can @mention other users and organizations to link to them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

