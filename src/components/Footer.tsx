"use client";

import { Box, styled } from "@mui/material";
import { CustomContainer } from "./CustomElements";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Link from "next/link";
import { SocialNetworks } from "./SocialNetworks";

const FooterUI = styled("footer")(({ theme }) => ({
  width: "100%",
  maxWidth: "1920px",
  padding: "0 110px",
  [theme.breakpoints.down("xl")]: {
    padding: "0 50px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "0 46px",
  },
  [theme.breakpoints.down(768)]: {
    padding: "0 30px",
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  padding: "482px 0 52px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down(1280)]: {
    padding: "400px 0 52px 0",
  },
  [theme.breakpoints.down(1024)]: {
    padding: "70.5px 0 100px 0",
    flexDirection: "column",
    justifyContent: "center",
    gap: "50px",
  },
  [theme.breakpoints.down(576)]: {
    padding: "60px 0 90px 0",
    gap: "40px",
  },
}));

const NetworkList = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "45px",
  alignItems: "center",
  [theme.breakpoints.down(1280)]: {
    gap: "30px",
  },
  [theme.breakpoints.down(1024)]: {
    gap: "60px",
  },
  [theme.breakpoints.down(576)]: {
    gap: "50px",
  },
}));

const NetworkLink = styled(Link)(({ theme }) => ({
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "& path": {
    transition: "0.4s all",
  },
  "&:hover path": {
    fill: "#FBB41A",
  },
  [theme.breakpoints.down(1024)]: {
    "&:hover path": {
      fill: "white",
    },
  },
}));

export const Footer = () => {
  return (
    <FooterUI>
      <CustomContainer>
        <Wrapper>
          <Logo />

          <Navigation type={"full"} />

          <SocialNetworks />
        </Wrapper>
      </CustomContainer>
    </FooterUI>
  );
};
