'use client';
import { Box, styled } from '@mui/material';
import { CustomContainer, Section } from './CustomElements';
import Image from 'next/image';
import mainImg from '/public/images/heroSheep.png';
import Button from './Button';

const HeroUI = styled(Section)(({ }) => ({}));

const CustomizedContainer = styled(CustomContainer)(({ }) => ({
  position: 'relative',
}));

const LineBox = styled('div')(({ }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: '-10',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
}));

const DefaultLineBlock = styled('div')(({ }) => ({
  width: '100%',
  height: '100%',
}));

const TitleDescr = styled('p')(({ theme }) => ({
  paddingTop: '238.5px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: '26px',
  color: '#bbb',
  maxWidth: '495px',
  width: '100%',
}));

const MainLineBlock = styled('div')(({ }) => ({
  width: '100%',
  height: '100%',
  borderLeft: '1px solid #4f4f4f',
  borderRight: '1px solid #4f4f4f',
}));

const HeroWrapper = styled('div')(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Title = styled('h1')(({ theme }) => ({
  marginTop: '55.5px',
  position: 'relative',
  left: '-22px',
  display: 'flex',
  flexWrap: 'wrap',
  flexShrink: 1,
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '354px',
  lineHeight: '100%',
  color: '#fff',
}));

const SpecialColor = styled('span')(({ }) => ({
  color: '#efad26',
  flexShrink: 1,
}));

const Hero = () => {
  return (
    <HeroUI>
      <CustomizedContainer>
        <LineBox>
          <DefaultLineBlock />
          <MainLineBlock />
          <DefaultLineBlock>
            <TitleDescr>
              Step into a world where imagination roams freely among the woolly
              wonders. Explore, Collect, and Create with Our Unique NFT Sheeps.
            </TitleDescr>
          </DefaultLineBlock>
        </LineBox>

        <HeroWrapper>
          <Title>
            CHIC
            <Box sx={{ display: 'flex' }}>
              SH
              <SpecialColor>EE</SpecialColor>
              PS
            </Box>
          </Title>

          <Image
            src={mainImg}
            width={1700}
            height={810}
            alt="Sheep"
          />

          <Box sx={{ marginTop: '60px', maxWidth: '1700px', width: '100%' }}>
            <Button text={'Start your sheepish journey now'} />
          </Box>
        </HeroWrapper>
      </CustomizedContainer>
    </HeroUI>
  )
}

export default Hero
