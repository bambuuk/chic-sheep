import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurRoadmap from "@/components/OurRoadmap";
import StareSheep from "@/components/StareSheep";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Hero />
          <About />
          <OurRoadmap />
          <StareSheep />
        </main>
      </ThemeProvider>
    </>
  );
}
