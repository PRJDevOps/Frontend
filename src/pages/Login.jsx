import  { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Github, Mail, Moon, Eye, EyeOff } from 'lucide-react';

import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";

export default function LoginPage() {
  const [isDark, setIsDark] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`);
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error.response || error.message);
      if (error.response && error.response.status === 401) {
        setError('Invalid credentials');
      } else if (error.response && error.response.status === 419) {
        setError('CSRF token mismatch. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className={cn("min-h-screen bg-background text-foreground transition-colors", isDark && "dark")}>
      <div className="flex min-h-screen">
        {/* Left side with image and text */}
        <div className="relative hidden w-1/2 lg:block">
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Login to your account</h1>
          </div>
        </div>

        {/* Right side with login form */}
        <div className="w-full lg:w-1/2">
          <div className="container relative flex min-h-screen flex-col items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setIsDark(!isDark)}
            >
              <Moon className="h-5 w-5 text-foreground" />
            </Button>
            <div className="mx-auto flex w-full flex-col justify-center space-y-7 sm:w-[385px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground">Login</h1>
                <p className="text-base text-muted-foreground">
                  Enter your email and password to login to your account
                </p>
              </div>
              <div className="grid gap-5">
                <form onSubmit={handleLogin}>
                  <div className="grid gap-5">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="name@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        className="text-xl"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"}
                          className="pr-10 text-lg" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <EyeOff className="h-6 w-6 text-muted-foreground" />
                          ) : (
                            <Eye className="h-6 w-6 text-muted-foreground" />
                          )}
                          <span className="sr-only">
                            {showPassword ? "Hide password" : "Show password"}
                          </span>
                        </Button>
                      </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <Button className="w-full text-md" type="submit">
                      Login
                    </Button>
                  </div>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-sm uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" type="button" className="text-lg">
                    <Github className="mr-2 h-4 w-4" />
                    Github
                  </Button>
                  <Button variant="outline" type="button" className="text-lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-2 text-center text-base">
                <div className="text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="/sign-up" className="text-primary underline underline-offset-4 hover:text-primary/90">
                    Sign up
                  </a>
                </div>
                <a
                  href="/forgot-password"
                  className="text-primary underline underline-offset-4 hover:text-primary/90"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

