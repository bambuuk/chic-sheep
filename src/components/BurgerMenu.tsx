"use client";

import { Box, styled } from "@mui/material";
import { CustomContainer } from "./CustomElements";
import Image from "next/image";
import closeIcon from "/public/images/icons/header-close.svg";
import { SocialNetworks } from "./SocialNetworks";
import Link from "next/link";
import logo from "/public/images/logo.svg";
import { fadeIn, fadeOut } from "../assets/keyframes";
import { useEffect, useState } from "react";

const BurgerMenuUI = styled(Box)(({}) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "#090909",
  position: "fixed",
  zIndex: 999,
  "&.fadeIn": {
    animation: `${fadeIn} 0.3s ease-in both`,
  },
  "&.fadeOut": {
    animation: `${fadeOut} 0.3s ease-out both`,
  },
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
  [theme.breakpoints.down(420)]: {
    padding: "0 20px",
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
  [theme.breakpoints.down(420)]: {
    padding: "0 20px",
  },
}));

const MainContentContainer = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",
  transform: "translateY(50%)",
}));

const NavigationList = styled("ul")(({}) => ({
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

const LogoUI = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down(1280)]: {
    width: "127px",
    height: "34px",
  },
}));

interface BurgerMenuProps {
  toggleBurgerMenu: () => void;
}

export const BurgerMenu = ({ toggleBurgerMenu }: BurgerMenuProps) => {
  const [animationType, setAnimationType] = useState("fadeIn");

  const closePopup = () => {
    setAnimationType("fadeOut");
    document.body.style.overflow = "visible";
    setTimeout(() => {
      toggleBurgerMenu();
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <BurgerMenuUI className={animationType}>
      <TopNavigation>
        <TopNavigationWrapper>
          <TopNavigationContainer>
            <Link href="#top" onClick={closePopup}>
              <LogoUI src={logo} width={171} height={50} alt="Logo" />
            </Link>

            <BurgerMenuBtn onClick={closePopup}>
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
                <Link href="/#about" onClick={closePopup}>
                  About
                </Link>
              </NavigationItem>
              <NavigationItem>
                <Link href="/#roadmap" onClick={closePopup}>
                  Roadmap
                </Link>
              </NavigationItem>
              <NavigationItem>
                <Link href="/#gallery" onClick={closePopup}>
                  Gallery
                </Link>
              </NavigationItem>
              <NavigationItem>
                <Link href="/#how-to-buy" onClick={closePopup}>
                  How to buy
                </Link>
              </NavigationItem>
              <NavigationItem>
                <Link href="/#faqs" onClick={closePopup}>
                  FAQ
                </Link>
              </NavigationItem>
            </NavigationList>

            <SocialNetworks />
          </MainContentContainer>
        </CustomContainer>
      </MainContent>
    </BurgerMenuUI>
  );
};
