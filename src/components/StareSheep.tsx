'use client';
import { Box, styled } from "@mui/material";
import {
  Section,
  CustomContainer,
  LineBox,
  DefaultLineBlock,
  MainLineBlock
} from "./CustomElements";
import Image from "next/image";
import CardButton from "./CardButton";
import { stareSheep } from "@/assets/data";
import Button from "./Button";
import useMediaQuery from "@/hooks/useMediaQuery";

const CustomizedContainer = styled(CustomContainer)(({ }) => ({
  position: 'relative',
}));

const MainWrapper = styled('div')(({ theme }) => ({
  paddingTop: '166.5px',
  [theme.breakpoints.down(1024)]: {
    paddingTop: '0',
  },
}));

const SectionWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '192px',
  backgroundColor: '#141414',
  gap: '100px',
  [theme.breakpoints.down(1280)]: {
    gap: '50px',
  },
  [theme.breakpoints.down(1024)]: {
    padding: '120.5px 0 120px 0',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto',
    gap: '60px',
  },
  [theme.breakpoints.down(576)]: {
    padding: '90.5px 0 89.5px 0',
    gap: '40px',
  },
}));

const Title = styled('h2')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '140px',
  lineHeight: '111%',
  color: '#fff',
  textTransform: 'uppercase',
  [theme.breakpoints.down(1700)]: {
    fontSize: '105px'
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: '85px'
  },
  [theme.breakpoints.down(768)]: {
    fontSize: '64px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '44px',
    lineHeight: '121%',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '31px',
  },
}));

const SheepList = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(auto-fill, 1fr)',
  columnGap: '70px',
  rowGap: '90px',
  [theme.breakpoints.down(1024)]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
  },
  [theme.breakpoints.down(576)]: {
    gap: '40px',
  },
}));

const SheepItem = styled('div')(({ }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  borderRadius: '50px',
  overflow: 'hidden',
  '& > div': {
    opacity: 0,
    visibility: 'hidden',
  },
  '& > div > div': {
    transform: 'translateY(50%)',
    transition: 'all 0.5s ease-in-out',
    opacity: 0,
  },
  '&:hover > div > div': {
    transform: 'translateY(0%)',
    transition: 'all 0.5s ease-in-out',
    opacity: 1,
  },
  '&:hover > div': {
    opacity: 1,
    visibility: 'visible',
  },
}));

const SheepImg = styled(Image)(({ }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const SecondBlock = styled('div')(({ theme }) => ({
  backgroundColor: 'rgba(20, 20, 20, 0.8)',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '46px',
  transition: 'all 0.7s ease-in-out',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SecondBlockWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
}));

const SheepTitle = styled('h3')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '50px',
  lineHeight: '120%',
  textAlign: 'center',
  color: '#fff',
  textTransform: 'uppercase',
  [theme.breakpoints.down(1550)]: {
    fontSize: '37px',
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: '26px',
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down(768)]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '23px',
    lineHeight: '148%',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '16px',
    lineHeight: '130%',
  },
}));

const SheepDescr = styled('p')(({ theme }) => ({
  marginTop: '20px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  lineHeight: 'normal',
  fontSize: '26px',
  textAlign: 'center',
  color: '#bbb',
  maxWidth: '75%',
  width: '100%',
  [theme.breakpoints.down(1550)]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down(1280)]: {
    maxWidth: '90%',
    fontSize: '18px',
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down(768)]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '16px',
    marginTop: '5px',
    maxWidth: '100%',
  },
  [theme.breakpoints.down(400)]: {
    fontSize: '12px',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 6,
    overflow: 'hidden',
  },
}));

const SheepFeatures = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  marginTop: '25px',
  [theme.breakpoints.down(576)]: {
    marginTop: '15px',
  },
}));

const SheepFeature = styled('div')(({ theme }) => ({
  borderRadius: '50px',
  padding: '8px 20px',
  background: '#bfddfa',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '118%',
  color: '#141414',
  textTransform: 'capitalize',
  textAlign: 'center',
  [theme.breakpoints.down(1280)]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down(768)]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '12px',
    lineHeight: '196%',
  },
}));

const ButtonWrapper = styled('div')(({ theme }) => ({
  marginTop: '45px',
  maxWidth: '419px',
  width: '100%',
  [theme.breakpoints.down(1280)]: {
    maxWidth: '80%',
  },
  [theme.breakpoints.down(576)]: {
    marginTop: '20px',
  },
}));

const StareSheep = () => {
  const { isSmallMobile } = useMediaQuery();

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
            <Title>
              Stare at
              <br />
              the sheeps
            </Title>

            <SheepList>
              {stareSheep.map(({ title, description, features, bgColor, textColor, img }) => {
                return (
                  <SheepItem
                    key={title}
                  >
                    <SheepImg
                      src={img}
                      width={815}
                      height={835}
                      alt="Sheep"
                    />
                    <SecondBlock>
                      <SecondBlockWrapper>
                        <SheepTitle>{title}</SheepTitle>

                        <SheepDescr>{description}</SheepDescr>

                        {
                          !isSmallMobile ?
                            <SheepFeatures>
                              {features.map((item) => {
                                return (
                                  <SheepFeature
                                    key={item}
                                    sx={{ backgroundColor: bgColor, fontSize: textColor }}
                                  >
                                    {item}
                                  </SheepFeature>
                                )
                              })}
                            </SheepFeatures> : ''
                        }

                        <ButtonWrapper>
                          <CardButton
                            text={'BUY a Sheep'}
                          />
                        </ButtonWrapper>
                      </SecondBlockWrapper>
                    </SecondBlock>
                  </SheepItem>
                )
              })}
            </SheepList>

            <Box sx={{ maxWidth: '1700px', width: '100%' }}>
              <Button text={'Start your sheepish journey'} />
            </Box>
          </SectionWrapper>
        </MainWrapper>
      </CustomizedContainer>
    </Section>
  )
}

export default StareSheep
