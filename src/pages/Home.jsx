import { HeroSection } from "@/components/ui/hero-section-dark"
import { ThemeProvider } from "@/components/theme-provider"

const Home = () => {
  return (
    <ThemeProvider defaultTheme="dark">

    <HeroSection
      title="Welcome to Our Platform"
    
      description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
      ctaText="Get Started"
      ctaHref="/signup"
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


