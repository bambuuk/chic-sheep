"use client";

import { styled } from "@mui/material";
import { CustomContainer } from "./CustomElements";
import Logo from "./Logo";
import Navigation from "./Navigation";
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
  [theme.breakpoints.down(420)]: {
    padding: "0 20px",
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  padding: "60px 0 52px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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
