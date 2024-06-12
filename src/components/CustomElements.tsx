"use client";
import { Box, styled, Button as ButtonBtn } from "@mui/material";
import Image from "next/image";

export const CustomContainer = styled("div")({
  margin: "0 auto",
  width: "100%",
  height: "100%",
  maxWidth: "1700px",
  borderLeft: "1px solid #4f4f4f",
  borderRight: "1px solid #4f4f4f",
});

export const Section = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: "1920px",
  padding: "0 110px",
  borderBottom: "1px solid #4f4f4f",
  [theme.breakpoints.down("xl")]: {
    padding: "0 50px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "0 46px",
  },
  [theme.breakpoints.down(768)]: {
    padding: "0 30px",
  },
  [theme.breakpoints.down(420)]: {
    padding: "0 20px",
  },
}));

export const LineBox = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: "-10",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  [theme.breakpoints.down(1024)]: {
    display: "none",
  },
}));

export const DefaultLineBlock = styled("div")(({}) => ({
  width: "100%",
  height: "100%",
}));

export const MainLineBlock = styled("div")(({}) => ({
  width: "100%",
  height: "100%",
  borderLeft: "1px solid #4f4f4f",
  borderRight: "1px solid #4f4f4f",
}));

export const Button = styled(ButtonBtn)(({ theme }) => ({
  width: "100%",
  height: "70px",
  border: "3px solid #fff",
  overflow: "hidden",
  borderRadius: "100px",
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "@keyframes pulse": {
    "0%": { transform: "translateX(0) scale(80)" },
    "40%": { transform: "translateX(0) scale(1)" },
    "55%": { transform: "translateX(-5px) scale(2)" },
    "70%": { transform: "translateX(0) scale(1)" },
    "85%": { transform: "translateX(5px) scale(2)" },
    "100%": { transform: "translateX(0) scale(1)" },
  },
  "&:hover span": {
    transition: "all .4s",
    color: "#141414",
  },
  "& img": {
    transition: "transform 0.5s ease-in-out",
    transform: "scale(1)",
    position: "relative",
  },
  "&:hover div img:first-child": {
    transform: "scale(180)",
  },
  [theme.breakpoints.down(576)]: {
    height: "50px",
    padding: "0 10px",
  },
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down(576)]: {
    gap: "5px",
  },
}));

export const ButtonText = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "24px",
  color: "#fff",
  position: "relative",
  zIndex: "10",
  [theme.breakpoints.down(1280)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "13px",
  },
}));

export const Star = styled(Image)(({ theme }) => ({
  display: "block",
  width: "22px",
  height: "22px",
  objectFit: "cover",
  [theme.breakpoints.down(768)]: {
    width: "14px",
    height: "14px",
  },
}));
