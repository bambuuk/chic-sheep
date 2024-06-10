"use client";
import { styled } from "@mui/material";
import { CustomContainer } from "./CustomElements";
import Image from "next/image";
import { useRef, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import star from "/public/images/icons/yellowStar.svg";
import burgerMenuIcon from "/public/images/icons/burgerMenu.svg";
import { BurgerMenu } from "./BurgerMenu";
import useModalControl from "@/hooks/useModalControl";
import BuySheepPopup from "./BuySheepPopup";

const HeaderUI = styled("header")(({ theme }) => ({
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

const CustomizedContainer = styled(CustomContainer)(({ theme }) => ({
  paddingTop: "24px",
  paddingBottom: "19.5px",
  [theme.breakpoints.down(1024)]: {
    paddingTop: "0",
    paddingBottom: "0",
  },
}));

const HeaderWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "70px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down(1024)]: {
    height: "auto",
    padding: "38px 0 32px 0",
  },
}));

const Button = styled("button")(({ theme }) => ({
  border: "3px solid #fff",
  overflow: "hidden",
  borderRadius: "100px",
  backgroundColor: "transparent",
  padding: "8px 80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "&:hover span": {
    transition: "all .3s",
    color: "#141414",
  },
  "& img": {
    transition: "transform 0.5s ease-in-out",
    transform: "scale(1)",
  },
  "&:hover div img:first-child": {
    transform: "scale(80)",
    zIndex: "-1",
  },
  "@keyframes pulse": {
    "0%": { transform: "translateX(0) scale(80)" },
    "40%": { transform: "translateX(0) scale(1)" },
    "55%": { transform: "translateX(-5px) scale(2)" },
    "70%": { transform: "translateX(0) scale(1)" },
    "85%": { transform: "translateX(5px) scale(2)" },
    "100%": { transform: "translateX(0) scale(1)" },
  },
  [theme.breakpoints.down(1550)]: {
    padding: "8px 40px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "15px 30px",
    border: "2px solid #fff",
  },
  [theme.breakpoints.down(1024)]: {
    display: "none",
  },
}));

const ButtonBox = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const ButtonText = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "200%",
  color: "#fff",
  [theme.breakpoints.down(1280)]: {
    fontSize: "18px",
    lineHeight: "0",
  },
}));

const BurgerMenuBtn = styled("button")(({ theme }) => ({
  display: "none",
  background: "transparent",
  [theme.breakpoints.down(1024)]: {
    display: "block",
  },
}));

const Header = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const { isModalOpen, onOpenModal, onCloseModal } = useModalControl();

  const toggleBurgerMenu = () => {
    setIsOpenBurgerMenu((state) => (state === true ? false : true));
  };

  const ref = useRef<HTMLImageElement>(null);

  const scaleStar = () => {
    if (ref.current) {
      ref.current.style.animation = `pulse 0.5s alternate`;
      setTimeout(() => {
        ref.current ? (ref.current.style.animation = "") : "";
      }, 500);
    }
  };

  return (
    <>
      {isOpenBurgerMenu ? (
        <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
      ) : (
        ""
      )}
      <HeaderUI id="top">
        <CustomizedContainer>
          <HeaderWrapper>
            <Logo />

            <BurgerMenuBtn onClick={toggleBurgerMenu}>
              <Image src={burgerMenuIcon} width={38} height={28} alt="menu" />
            </BurgerMenuBtn>

            <Navigation type={"usual"} />

            <Button onMouseLeave={scaleStar} onClick={onOpenModal}>
              <ButtonBox>
                <Image ref={ref} src={star} width={22} height={22} alt="star" />
                <ButtonText>BUY a Sheep</ButtonText>
                <Image src={star} width={22} height={22} alt="star" />
              </ButtonBox>
            </Button>
          </HeaderWrapper>
        </CustomizedContainer>
        <BuySheepPopup isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
      </HeaderUI>
    </>
  );
};

export default Header;
