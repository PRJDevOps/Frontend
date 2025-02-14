"use client"
import { AppSidebar } from "@/layout/user/sidebar"
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
import { SidebarProvider } from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"  // Add this import at the top
import { useState, useEffect } from "react"  // Add this import
import axios from "axios"  // Add this import
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function AccountPage() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [accountId, setAccountId] = useState(null)
  const [accountData, setAccountData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    team: ''
  })
  const [isLoading, setIsLoading] = useState(true)

  const handleEdit = async () => {
    if (!isEditing) {
      setIsEditing(true)
      return
    }

    toast({
      title: "Confirm Changes",
      description: "Are you sure you want to update your account information?",
      action: (
        <ToastAction altText="Confirm" onClick={handleConfirmEdit}>
          Confirm
        </ToastAction>
      ),
    })
  }

  const handleConfirmEdit = async () => {
    try {
      const token = localStorage.getItem('authToken')
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/account/${accountId}`,
        accountData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      
      toast({
        title: "Success",
        description: "Your account has been updated successfully.",
      })
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating account:', error)
      toast({
        title: "Error",
        description: "Failed to update account information.",
        variant: "destructive",
      })
    }
  }

  // Modify the useEffect to also set the accountId
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        setIsLoading(true)
        const token = localStorage.getItem('authToken')
        const userResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        
        
        if (userResponse.data && userResponse.data.data.id) {
          const accountResponse = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/accounts/user/${userResponse.data.data.id}`, 
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
          
          
          if (accountResponse.data && accountResponse.data.success) {
            setAccountData({
              firstName: accountResponse.data.data.firstName || '',
              lastName: accountResponse.data.data.lastName || '',
              address: accountResponse.data.data.address || '',
              phoneNumber: accountResponse.data.data.phoneNumber || '',
              team: accountResponse.data.data.team || ''
            })
            setAccountId(accountResponse.data.data.id)
          }
        }
      } catch (error) {
        console.error('Error fetching account data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAccountData()
  }, [])

  // Add handleInputChange function
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setAccountData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Update the form inputs to be editable
  return (
    <ThemeProvider defaultTheme="dark">
      <SidebarProvider>
        <div className="flex min-h-screen dark:bg-background">
          <AppSidebar />
          <div className="flex-1">
            <Header />
            <main className="p-6">
              <div className="mx-auto">
                <h1 className="text-3xl font-bold mb-2">Settings</h1>
                <p className="text-muted-foreground mb-6 pb-3 border-b">
                  Manage your account settings and personal information.
                </p>

                <div className="flex gap-8">
                  {/* Keep existing navigation buttons */}
                  <div className="w-48 flex flex-col gap-1">
                    <Button 
                      variant="ghost" 
                      className="justify-start hover:text-line font-medium"
                      onClick={() => navigate('/user/profile')}
                    >
                      <User /> 
                      Profile
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="justify-start"
                      onClick={() => navigate('/user/account')}
                    >
                      <KeyRound />
                      Account
                    </Button>
                  </div>

                  <div className="flex-1">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-lg font-semibold mb-2">Account Information</h2>
                        <p className="text-sm text-muted-foreground">
                          Manage your personal information and preferences.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">First Name</label>
                            <Input 
                              name="firstName"
                              value={accountData.firstName}
                              disabled={!isEditing || isLoading}
                              readOnly={!isEditing}
                              onChange={handleInputChange}
                              className="mt-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" 
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Last Name</label>
                            <Input 
                              name="lastName"
                              value={accountData.lastName}
                              disabled={!isEditing || isLoading}
                              readOnly={!isEditing}
                              onChange={handleInputChange}
                              className="mt-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" 
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium">Address</label>
                          <Input 
                            name="address"
                            value={accountData.address}
                            disabled={!isEditing || isLoading}
                            readOnly={!isEditing}
                            onChange={handleInputChange}
                            className="mt-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" 
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium">Phone Number</label>
                          <Input 
                            name="phoneNumber"
                            value={accountData.phoneNumber}
                            disabled={!isEditing || isLoading}
                            readOnly={!isEditing}
                            onChange={handleInputChange}
                            className="mt-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" 
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium">Team</label>
                          <Input 
                            name="team"
                            value={accountData.team}
                            disabled={!isEditing || isLoading}
                            readOnly={!isEditing}
                            onChange={handleInputChange}
                            className="mt-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100" 
                          />
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                          {isEditing && (
                            <Button
                              variant="outline"
                              onClick={() => setIsEditing(false)}
                              className="mr-2"
                            >
                              Cancel
                            </Button>
                          )}
                          <Button
                            onClick={handleEdit}
                            className={isEditing ? "bg-green-600 hover:bg-green-700" : ""}
                          >
                            {isEditing ? "Save Changes" : "Edit Information"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

