"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { Fab, styled } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { scrollToTop } from "../utils/scrollToSection";
import { fadeIn, fadeOut } from "../assets/keyframes";

const CustomButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "30px",
  right: "30px",
  background: "#141414",
  border: "1px solid white",
  transition: "all 0.4s",
  "&:hover": {
    "@media (hover: hover)": {
      background: "#fbb41a",
      border: "1px solid white",
    },
    "@media (hover: none)": {
      background: "#13171d",
      border: "1px solid white",
    },
  },
  "& path": {
    transition: "all 0.4s",
  },
  "&:hover path": {
    fill: "#141414",
    "@media (hover: none)": {
      fill: "white",
    },
  },
  "&.fadeIn": {
    animation: `${fadeIn} 0.3s ease-in both`,
  },
  "&.fadeOut": {
    animation: `${fadeOut} 0.3s ease-out both`,
  },
  [theme.breakpoints.down(768)]: {
    bottom: "20px",
    right: "20px",
  },
  [theme.breakpoints.down(576)]: {
    bottom: "15px",
    right: "15px",
  },
}));

const ScrollToTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationType, setAnimationType] = useState("");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const triggerHeight = 0.7 * viewportHeight;

    if (scrollY > triggerHeight && !isVisible) {
      setAnimationType("fadeIn");
      setIsVisible(true);
    } else if (scrollY <= triggerHeight && isVisible) {
      setAnimationType("fadeOut");
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  }, [isVisible]);

  const moveToTop = () => {
    scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, handleScroll]);

  return (
    <CustomButton
      className={animationType}
      onClick={moveToTop}
      sx={{
        display: isVisible ? "flex" : "none",
        animation: `${animationType}`,
      }}
    >
      <ExpandLessIcon sx={{ color: "white" }} />
    </CustomButton>
  );
};

export default ScrollToTopButton;
