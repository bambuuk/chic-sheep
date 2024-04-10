'use client';
import { styled } from "@mui/material";
import { Section, CustomContainer, LineBox, DefaultLineBlock, MainLineBlock } from "./CustomElements";

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
  width: '100%',
  borderRadius: '50px',
  padding: '39px 62px',
  border: '1px solid #4f4f4f',
  backgroundColor: '#141414',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'all 0.3s',
  [theme.breakpoints.down(1700)]: {
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
    maxWidth: '400px',
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
            <StageItem>
              <StageSubtitle>Community Engagement</StageSubtitle>
              <StageDescription>
                Our journey began with visionary artists shaping unique Sheep designs.
                Using cutting-edge tools, we brought your Chic Sheeps to life.
              </StageDescription>
            </StageItem>
            <StageItem>
              <StageSubtitle>Concept & Creation</StageSubtitle>
              <StageDescription>
                Our journey began with visionary artists shaping unique Sheep designs.
                Using cutting-edge tools, we brought your Chic Sheeps to life.
              </StageDescription>
            </StageItem>
            <StageItem>
              <StageSubtitle>Concept & Creation</StageSubtitle>
              <StageDescription>
                Our journey began with visionary artists shaping unique Sheep designs.
                Using cutting-edge tools, we brought your Chic Sheeps to life.
              </StageDescription>
            </StageItem>
            <StageItem>
              <StageSubtitle>Concept & Creation</StageSubtitle>
              <StageDescription>
                Our journey began with visionary artists shaping unique Sheep designs.
                Using cutting-edge tools, we brought your Chic Sheeps to life.
              </StageDescription>
            </StageItem>
          </Stages>
        </ContentWrapper>
      </CustomizedContainer>
    </Section>
  )
}

export default OurRoadmap
