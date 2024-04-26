import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurRoadmap from "@/components/OurRoadmap";
import StareSheep from "@/components/StareSheep";
import HowToBuy from "@/components/HowToBuy/HowToBuy";

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
          <HowToBuy />
        </main>
      </ThemeProvider>
    </>
  );
}
