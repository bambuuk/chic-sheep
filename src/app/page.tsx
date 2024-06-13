"use client";
import Header from "@/components/Header";
import { ThemeProvider, styled } from "@mui/material";
import { theme } from "./theme";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OurRoadmap from "@/components/OurRoadmap";
import StareSheep from "@/components/StareSheep";
import HowToBuy from "@/components/HowToBuy/HowToBuy";
import YourFAQ from "@/components/YourFAQ/YourFAQ";
import { Footer } from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Main = styled("main")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <Hero />
          <About />
          <OurRoadmap />
          <StareSheep />
          <HowToBuy />
          <YourFAQ />
          <ScrollToTopButton />
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
