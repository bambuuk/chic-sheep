"use client";

import { Box, styled } from "@mui/material";
import { CustomContainer } from "./CustomElements";
import Logo from "./Logo";
import Image from "next/image";
import closeIcon from "/public/images/icons/header-close.svg";
import { SocialNetworks } from "./SocialNetworks";
import Link from "next/link";

const BurgerMenuUI = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#090909",
  position: "fixed",
  zIndex: 999,
}));

const TopNavigation = styled("div")(({}) => ({
  width: "100%",
  borderBottom: "1px solid #4f4f4f",
}));

const TopNavigationWrapper = styled("div")(({ theme }) => ({
  padding: "0 46px",
  [theme.breakpoints.down(768)]: {
    padding: "0 30px",
  },
}));

const TopNavigationContainer = styled(CustomContainer)(({}) => ({
  padding: "38px 0 32px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const BurgerMenuBtn = styled("button")(({ theme }) => ({
  display: "none",
  background: "transparent",
  [theme.breakpoints.down(1024)]: {
    display: "block",
  },
}));

const MainContent = styled("div")(({ theme }) => ({
  padding: "0 46px",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down(768)]: {
    padding: "0 30px",
  },
}));

const MainContentContainer = styled("div")(({}) => ({
  padding: "70.5px 0 0 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
}));

const NavigationList = styled("ul")(({ }) => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
  flexDirection: "column",
}));

const NavigationItem = styled("li")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "16px",
  color: "#bbb",
  cursor: "pointer",
  textTransform: "uppercase",
  "& a": {
    color: "#bbb",
  },
}));

interface BurgerMenuProps {
  toggleBurgerMenu: () => void;
}

export const BurgerMenu = ({ toggleBurgerMenu }: BurgerMenuProps) => {
  return (
    <BurgerMenuUI>
      <TopNavigation>
        <TopNavigationWrapper>
          <TopNavigationContainer>
            <Logo />

            <BurgerMenuBtn onClick={toggleBurgerMenu}>
              <Image src={closeIcon} width={38} height={28} alt="menu" />
            </BurgerMenuBtn>
          </TopNavigationContainer>
        </TopNavigationWrapper>
      </TopNavigation>

      <MainContent>
        <CustomContainer>
          <MainContentContainer>
            <NavigationList>
              <NavigationItem>
                <Link href="/#about" onClick={toggleBurgerMenu}>About</Link>
              </NavigationItem>
              <NavigationItem>
                <Link href="/#roadmap" onClick={toggleBurgerMenu}>Roadmap</Link>
              </NavigationItem>
              <NavigationItem>
                <Link href="/#gallery" onClick={toggleBurgerMenu}>Gallery</Link>
              </NavigationItem>
              <NavigationItem>
                <Link href="/#how-to-buy" onClick={toggleBurgerMenu}>How to buy</Link>
              </NavigationItem>
              <NavigationItem>
                <Link href="/#faqs" onClick={toggleBurgerMenu}>FAQ</Link>
              </NavigationItem>
            </NavigationList>

            <SocialNetworks />
          </MainContentContainer>
        </CustomContainer>
      </MainContent>
    </BurgerMenuUI>
  );
};
