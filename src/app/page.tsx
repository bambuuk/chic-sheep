import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurRoadmap from "@/components/OurRoadmap";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Hero />
          <About />
          <OurRoadmap />
        </main>
      </ThemeProvider>
    </>
  );
}
