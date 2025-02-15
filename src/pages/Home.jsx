import { HeroSection } from "@/components/ui/hero-section-dark"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/layout/navbar"

const Home = () => {
  return (
    <ThemeProvider defaultTheme="dark">
            <Navbar/>

    <HeroSection
      title="Welcome to Our Platform"
    
      description="Optimize workforce and project management effortlessly. Track employees, assign tasks, monitor performance, and maximize resources securely."
      ctaText="Get Started"
      ctaHref="/login"
      bottomImage={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
    </ThemeProvider>
  )
}
export default Home;


