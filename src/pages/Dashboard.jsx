import { Users ,Euro,CreditCard, Activity} from 'lucide-react'

import { MainNav } from "@/components/dashboard/main-nav"
import { AppSidebar } from "@/layout/sidebar"
import { Overview } from "@/components/dashboard/overview"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { Search } from "@/components/dashboard/search"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserNav } from "@/components/dashboard/user-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


function Dashboard() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex min-h-screen dark:bg-background">
        <AppSidebar />
        <div className="flex-1">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <MainNav className="mx-6" />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <ThemeToggle />
                <UserNav />
              </div>
            </div>
          </div>
          <div className="space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-4xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-md font-medium">
                        Total Revenue
                      </CardTitle>
                      <Euro className="text-gray-500" />

                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$45,231.89</div>
                      <p className="text-sm text-muted-foreground">
                        +20.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-md font-medium">
                        Subscriptions
                      </CardTitle>
                      <Users className="text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">+2,350</div>
                      <p className="text-sm text-muted-foreground">
                        +180.1% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-md font-medium">Sales</CardTitle>
                      <CreditCard className="text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">+12,234</div>
                      <p className="text-sm text-muted-foreground">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-md font-medium">
                        Active Now
                      </CardTitle>
                      <Activity className="text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">+573</div>
                      <p className="text-sm text-muted-foreground">
                        +201 since last hour
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <div className="text-md text-muted-foreground">
                        You made 265 sales this month.
                      </div>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Dashboard

