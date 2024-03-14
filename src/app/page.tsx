import Header from "@/components/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
}
