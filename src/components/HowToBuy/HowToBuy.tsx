'use client';
import { styled } from "@mui/material";
import {
  Section,
  CustomContainer,
} from "../CustomElements";
import Image from "next/image";
import CustomizedAccordions from "./Accordion";

const MainWrapper = styled('div')(({ theme }) => ({
  padding: '191.5px 0 220px 0',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '52% 1fr',
  columnGap: '60px',
  [theme.breakpoints.down(1700)]: {
    columnGap: '50px',
  }
}));

const SheepImg = styled(Image)(({ }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  position: 'relative',
  left: '-2px',
}));

const InfoBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  width: '100%',
  position: 'relative',
  top: '-29px',
  [theme.breakpoints.down(1920)]: {
    top: '-0',
    gap: '50px',
  },
  [theme.breakpoints.down(1700)]: {
    gap: '40px',
    top: '-15px',
  },
  [theme.breakpoints.down(1500)]: {
    top: '-10px',
  },
  [theme.breakpoints.down(1280)]: {
    top: '-0',
    gap: '20px',
  },
}));

const Title = styled('h2')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '140px',
  lineHeight: '111%',
  color: '#fff',
  textTransform: 'uppercase',
  [theme.breakpoints.down(1920)]: {
    fontSize: '100px',
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: '90px',
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: '60px',
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: '40px',
  },
}));

const HowToBuy = () => {
  return (
    <Section>
      <CustomContainer>
        <MainWrapper>
          <SheepImg
            src={'/images/howToBuyNftSheep.png'}
            width={860}
            height={776}
            alt="Sheep"
          />

          <InfoBox>
            <Title>
              HOW TO
              <br/> 
              BUY NFT
            </Title>
            <CustomizedAccordions />
          </InfoBox>
        </MainWrapper>
      </CustomContainer>
    </Section>
  )
}

export default HowToBuy
