'use client';
import { styled } from "@mui/material";
import { Section, CustomContainer, LineBox, DefaultLineBlock, MainLineBlock } from "./CustomElements";

const CustomizedContainer = styled(CustomContainer)(({ }) => ({
  position: 'relative',
}));

const MainWrapper = styled('div')(({ theme }) => ({
  paddingTop: '69.5px',
  [theme.breakpoints.down(991)]: {
    paddingTop: '0',
  },
}));

const SectionWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '61px',
  padding: '150px 0 118px 0',
  backgroundColor: '#141414',
  [theme.breakpoints.down(1280)]: {
    gap: '50px',
  },
  [theme.breakpoints.down(991)]: {
    padding: '120.5px 0 120px 0',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto',
  },
  [theme.breakpoints.down(576)]: {
    padding: '90.5px 0 89.5px 0',
    gap: '30px',
  },
}));

const Picture = styled('img')(({ theme }) => ({
  display: 'block',
  maxWidth: '859px',
  maxHeight: '604px',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '30px',
  [theme.breakpoints.down(1280)]: {
    maxWidth: '695px',
    maxHeight: '490px',
  },
  [theme.breakpoints.down(991)]: {
    gridRowStart: '2',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const TextBlock = styled('div')(({ theme }) => ({
  position: 'relative',
  top: '-27px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down(1700)]: {
    top: '-20px',
  },
  [theme.breakpoints.down(1280)]: {
    top: '-15px',
  },
  [theme.breakpoints.down(991)]: {
    gridRowStart: '1',
    gridRowEnd: '2',
  },
}));

const Title = styled('h2')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '140px',
  lineHeight: '111%',
  color: '#fff',
  [theme.breakpoints.down(1700)]: {
    fontSize: '100px',
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: '90px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '47px',
    lineHeight: '121%',
  },
}));

const Description = styled('p')(({ theme }) => ({
  maxWidth: '639px',
  width: '100%',
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  '& span': {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 300,
    fontSize: '26px',
    color: '#bbb',
    lineHeight: 'normal',
  },
  [theme.breakpoints.down(1700)]: {
    maxWidth: '500px',
    '& span': {
      fontSize: '24px',
    },
  },
  [theme.breakpoints.down(1280)]: {
    '& span': {
      fontSize: '20px',
    },
  },
  [theme.breakpoints.down(991)]: {
    '& span': {
      fontSize: '24px',
    },
    gap: '20px',
  },
  [theme.breakpoints.down(576)]: {
    '& span': {
      fontSize: '18px',
    },
  },
}));

const About = () => {
  return (
    <Section>
      <CustomizedContainer>
        <LineBox>
          <DefaultLineBlock />
          <MainLineBlock />
          <DefaultLineBlock />
        </LineBox>

        <MainWrapper>
          <SectionWrapper>
            <Picture
              src='/images/about.png'
              alt="Sheep"
            />
            <TextBlock>
              <Title>ABOUT Sheeps</Title>
              <Description>
                <span>
                  Welcome to the enchanting world of NFT Chic Sheeps, where the extraordinary
                  meets the woolly, and creativity is spun into a digital masterpiece.
                </span>
                <span>
                  NFT Chic Sheeps aren&rsquo;t just an investment; they&rsquo;re a statement.
                  As you explore the galleries of our woolly wonders, you&rsquo;re joining
                  a community that&rsquo;s shaping the future of digital ownership.
                  Say goodbye to traditional collectibles; say hello to a new era of
                  ownership and expression.
                </span>
              </Description>
            </TextBlock>
          </SectionWrapper>
        </MainWrapper>
      </CustomizedContainer>
    </Section>
  )
}

export default About
