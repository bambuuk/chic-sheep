'use client';
import { styled } from "@mui/material";
import {
  Section,
  CustomContainer,
} from "../CustomElements";
import Image from "next/image";
import CustomizedAccordions from "./Accordion";

const MainWrapper = styled('div')(({ }) => ({
  padding: '191.5px 0 220px 0',
  width: '100%',
  display: 'flex',
  gap: '60px',
}));

const SheepImg = styled(Image)(({ }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'relative',
  left: '-2px',
}));

const InfoBox = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  maxWidth: '780px',
  width: '100%',
  position: 'relative',
  top: '-25px',
}));

const Title = styled('h2')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '140px',
  lineHeight: '111%',
  color: '#fff',
  textTransform: 'uppercase',
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
            <Title>HOW TO BUY NFT</Title>
            <CustomizedAccordions />
          </InfoBox>
        </MainWrapper>
      </CustomContainer>
    </Section>
  )
}

export default HowToBuy
