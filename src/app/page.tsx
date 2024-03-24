import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Hero />
          <About />
        </main>
      </ThemeProvider>
    </>
  );
}
