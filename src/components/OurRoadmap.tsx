'use client';
import { styled } from "@mui/material";
import {
  Section,
  CustomContainer,
  LineBox,
  DefaultLineBlock,
  MainLineBlock
} from "./CustomElements";
import Image from "next/image";
import { roadmap } from "@/asserts/data";

const CustomizedContainer = styled(CustomContainer)(({ theme }) => ({
  position: 'relative',
  paddingTop: '101.5px',
  zIndex: 100,
  top: '-1px',
  backgroundColor: '#141414',
  overflow: 'hidden',
  [theme.breakpoints.down(1700)]: {
    paddingTop: '75.5px',
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  marginTop: '192px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down(1700)]: {
    marginTop: '144px',
  },
}));

const Title = styled('h2')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '140px',
  lineHeight: '111 %',
  color: '#fff',
  [theme.breakpoints.down(1700)]: {
    fontSize: '105px'
  },
}));

const Stages = styled('ul')(({ theme }) => ({
  marginTop: '152px',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  width: '100%',
  [theme.breakpoints.down(1700)]: {
    marginTop: '114px'
  },
}));

const StageItem = styled('li')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  borderRadius: '50px',
  padding: '39px 62px',
  border: '1px solid #4f4f4f',
  backgroundColor: '#141414',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'all 0.3s',
  cursor: 'pointer',
  [theme.breakpoints.down(1920)]: {
    padding: '30px 47px',
  },
  '&:hover': {
    backgroundColor: '#fbb41a',
  },
  '&:hover > :first-of-type': {
    color: 'black',
  },
  '&:hover > :last-child': {
    color: '#1b1b1b',
  },
  '&:hover img': {
    transition: 'all 0.4s',
    opacity: '1',
  },
}));

const StageSubtitle = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '50px',
  lineHeight: '120 %',
  color: '#fff',
  maxWidth: '440px',
  width: '100%',
  [theme.breakpoints.down(1700)]: {
    maxWidth: '360px',
    fontSize: '37.5px'
  },
}));

const StageDescription = styled('div')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: '26px',
  color: '#bbb',
  maxWidth: '598px',
  width: '100%',
  [theme.breakpoints.down(1700)]: {
    maxWidth: '450px',
    fontSize: '20px'
  },
}));

const StageImage = styled(Image)(({ theme }) => ({
  position: 'absolute',
  top: '-68%',
  left: '50%',
  transform: 'translateX(-70%)',
  opacity: '0',
  [theme.breakpoints.down(1920)]: {
    width: '300px',
    height: '300px',
    transform: 'translateX(-82%)',
    top: '-60%',
  },
  [theme.breakpoints.down(1700)]: {
    width: '290px',
    height: '290px',
    transform: 'translateX(-79%)',
    top: '-80%',
  },
}));

const OurRoadmap = () => {
  return (
    <Section>
      <CustomizedContainer>
        <LineBox>
          <DefaultLineBlock />
          <MainLineBlock />
          <DefaultLineBlock />
        </LineBox>

        <ContentWrapper>
          <Title>OUR Roadmap</Title>
          <Stages>
            {roadmap.map(({ id, title, description, img }) => {
              return (
                <StageItem key={id}>
                  <StageSubtitle>{title}</StageSubtitle>
                  <StageImage
                    src={img}
                    width={345}
                    height={345}
                    alt="Sheep"
                  />
                  <StageDescription>{description}</StageDescription>
                </StageItem>
              )
            })}
          </Stages>
        </ContentWrapper>
      </CustomizedContainer>
    </Section>
  )
}

export default OurRoadmap
