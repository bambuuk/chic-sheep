import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Hero />
        </main>
      </ThemeProvider>
    </>
  );
}
