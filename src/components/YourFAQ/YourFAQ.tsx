"use client";
import { styled } from "@mui/material";
import {
  CustomContainer,
  DefaultLineBlock,
  LineBox,
  MainLineBlock,
  Section,
} from "../CustomElements";
import Accordion from "./Accordion";

const CustomizedContainer = styled(CustomContainer)(({}) => ({
  position: "relative",
  zIndex: "100",
}));

const YourFAQWrapper = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  padding: '192px 0 986.5px 0'
}));

const Title = styled('h2')(({theme}) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '140px',
  lineHeight: '111%',
  color: '#fff',
  textTransform: 'uppercase',
}));

const YourFAQ = () => {
  return (
    <Section>
      <CustomizedContainer>
        <LineBox>
          <DefaultLineBlock />
          <MainLineBlock />
          <DefaultLineBlock />
        </LineBox>

        <YourFAQWrapper>
          <Title>Yor FAQ</Title>
          <Accordion />
        </YourFAQWrapper>
      </CustomizedContainer>
    </Section>
  );
};

export default YourFAQ;
