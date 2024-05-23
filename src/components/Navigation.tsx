import { styled } from "@mui/material";
import Link from "next/link";

interface NavigationUIProps {
  type: string;
}

const NavigationUI = styled("nav")<NavigationUIProps>(({ theme, type }) => ({
  display: "block",
  [theme.breakpoints.down(1024)]: {
    display: type === "full" ? "block" : "none",
  },
}));

const NavigationList = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "54px",
  [theme.breakpoints.down("xl")]: {
    gap: "40px",
  },
  [theme.breakpoints.down(1280)]: {
    gap: "20px",
  },
  [theme.breakpoints.down(1024)]: {
    gap: "40px",
    flexDirection: "column",
  },
}));

const NavigationItem = styled("li")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "18px",
  textTransform: "uppercase",
  color: "#bbb",
  cursor: "pointer",
  "& a": {
    transition: "color 0.3s",
    color: "#bbb",
  },
  "&:hover a": {
    color: "#fbb41a",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "16px",
  },
}));

interface NavigationProps {
  type: "full" | "usual";
}

export const Navigation = ({ type }: NavigationProps) => {
  return (
    <NavigationUI type={type}>
      <NavigationList>
        <NavigationItem>
          <Link href="/#about">About</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/#roadmap">Roadmap</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/#gallery">Gallery</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/#how-to-buy">How to buy</Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/#faqs">FAQ</Link>
        </NavigationItem>
      </NavigationList>
    </NavigationUI>
  );
};

export default Navigation;
