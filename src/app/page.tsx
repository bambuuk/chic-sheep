import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurRoadmap from "@/components/OurRoadmap";
import StareSheep from "@/components/StareSheep";
import HowToBuy from "@/components/HowToBuy/HowToBuy";
import YourFAQ from "@/components/YourFAQ/YourFAQ";
import { Footer } from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
          <YourFAQ />
          <ScrollToTopButton />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
