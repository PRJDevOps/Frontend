"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  address: z.string(),
  phoneNumber: z.string(),
  team: z.string(),
})

// Add axios import
import axios from "axios"
import DarkLogo from "@/assets/svg/MORATEL11.svg"


// Add useNavigate to imports at the top
import { useNavigate } from "react-router-dom"

export default function AddAccountForm() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      team: "ALL",
    },
  })

  async function onSubmit(values) {
    setIsLoading(true)
    try {
      const token = localStorage.getItem('authToken')
      
      // First, get the user ID
      const userResponse = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (!userResponse.data?.data?.id) {
        throw new Error('User ID not found')
      }

      // Create the account with the user ID
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/accounts`,
        {
          ...values,
          id_user: userResponse.data.data.id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      if (response.data.success) {
        toast({
          title: "Success",
          description: "The new account has been successfully added.",
        })
        form.reset({
          firstName: "",
          lastName: "",
          address: "",
          phoneNumber: "",
          team: "ALL",
        })
        // Navigate to tasks page after successful submission
        navigate('/user/tasks')
      }
    } catch (error) {
      console.error('Error creating account:', error)
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to create account",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      localStorage.removeItem('authToken')
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <ThemeProvider defaultTheme="dark">

    <div className="min-h-screen flex flex-col p-4">
      {/* Logo Section */}
      <div className="fixed top-[-50px] left-4">
        <img
          src={DarkLogo}
          alt="Moratel Logo"
          className="h-[200px] w-auto"
        />
      </div>

      {/* Centered Form */}
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Add New Account</CardTitle>
            <CardDescription>Create a new account by filling out the form below.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, City, Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 234 567 8900" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="team"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team</FormLabel>
                      <FormControl>
                        <Input {...field} disabled readOnly />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleLogout}
              className="bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-500"
            >
              Cancel
            </Button>
            <Button type="submit" onClick={form.handleSubmit(onSubmit)} disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Account"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    </ThemeProvider>

  )
}

