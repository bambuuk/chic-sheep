"use client";
import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    secondFamily: string;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    secondFamily?: string;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
    secondFamily: `"Feogra", sans-serif`,
  },
});
