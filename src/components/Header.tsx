'use client';
import logo from '/public/images/logo.svg';
import star from '/public/images/icons/yellowStar.svg';
import { styled } from '@mui/material';
import { CustomContainer } from './CustomElements';
import Image from 'next/image';
import { useState } from 'react';

const HeaderUI = styled('header')(({ }) => ({
  width: '100%',
}));

const HeaderWrapper = styled('div')(({ }) => ({
  margin: '24px 0 19.5px 0',
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const Navigation = styled("nav")(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavigationList = styled("ul")(({ }) => ({
  display: "flex",
  alignItems: "center",
  gap: "54px",
}));

const NavigationItem = styled("li")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "18px",
  textTransform: 'uppercase',
  color: "#bbb",
  cursor: "pointer",
}));

const Button = styled('button')(({ theme }) => ({
  border: '3px solid #fff',
  overflow: 'hidden',
  borderRadius: '100px',
  backgroundColor: 'transparent',
  padding: '8px 80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 11s easy-in-out',
  position: 'relative',
  '&:hover span': {
    transition: 'all .3s',
    color: '#141414',
  },
  '& img': {
    transition: 'transform 0.5s ease-in-out',
    transform: 'scale(1)',
  },
  '&:hover div img:first-child': {
    transition: 'transform 11s easy-in-out',
    transform: 'scale(80)',
    zIndex: '-1'
  },
  // '&:not(:hover) img:first-child': {
  //   animation: 'pulse 0.5s alternate',
  // },
  // '@keyframes pulse': {
  //   '0%': { transform: 'translateX(0) scale(1)' },
  //   '25%': { transform: 'translateX(-5px) scale(2)' },
  //   '50%': { transform: 'translateX(0) scale(1)' },
  //   '75%': { transform: 'translateX(5px) scale(2)' },
  //   '100%': { transform: 'translateX(0) scale(1)' },
  // },
}));

const ButtonBox = styled('div')(({ }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const ButtonText = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '200%',
  color: '#fff',
}));

const PulseStar = styled(Image)(({ }) => ({
  animation: 'pulse 0.5s alternate',
  '@keyframes pulse': {
    '0%': { transform: 'translateX(0) scale(1)' },
    '25%': { transform: 'translateX(-5px) scale(2)' },
    '50%': { transform: 'translateX(0) scale(1)' },
    '75%': { transform: 'translateX(5px) scale(2)' },
    '100%': { transform: 'translateX(0) scale(1)' },
  },
}));

const Header = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [afterHovered, setAfterHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setAfterHovered(true);
      setTimeout(() => {
        setAfterHovered(false);
      }, 500)
    }, 500);
  };
  return (
    <HeaderUI>
      <CustomContainer>
        <HeaderWrapper>
          <Image
            src={logo}
            width={171}
            height={50}
            alt="Logo"
          />

          <Navigation>
            <NavigationList>
              <NavigationItem>About</NavigationItem>
              <NavigationItem>Roadmap</NavigationItem>
              <NavigationItem>Gallery</NavigationItem>
              <NavigationItem>How to buy</NavigationItem>
              <NavigationItem>FAQ</NavigationItem>
            </NavigationList>
          </Navigation>

          <Button
            onMouseLeave={handleMouseLeave}
          >
            <ButtonBox>
              {afterHovered ? (<PulseStar
                src={star}
                width={22}
                height={22}
                alt="star"
              />) : (<Image
                src={star}
                width={22}
                height={22}
                alt="star"
              />)}
              <ButtonText>BUY a Sheep</ButtonText>
              <Image
                src={star}
                width={22}
                height={22}
                alt="star"
              />
            </ButtonBox>
          </Button>
        </HeaderWrapper>
      </CustomContainer>
    </HeaderUI>
  )
}

export default Header
