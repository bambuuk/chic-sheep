"use client";
import { Box, styled } from "@mui/material";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  CustomContainer,
  DefaultLineBlock,
  LineBox,
  MainLineBlock,
  Section,
} from "../CustomElements";
import Accordion from "./Accordion";
import { JoinUs } from "../JoinUs/JoinUs";

const CustomizedContainer = styled(CustomContainer)(({ theme }) => ({
  position: "relative",
  zIndex: "100",
  padding: "0 0 220px 0",
  [theme.breakpoints.down(1024)]: {
    padding: "0 0 120px 0",
  },
  [theme.breakpoints.down(576)]: {
    padding: "0 0 90px 0",
  },
}));

const YourFAQWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "190px 0 0 0",
  [theme.breakpoints.down(1024)]: {
    padding: "120px 0 0 0",
  },
  [theme.breakpoints.down(576)]: {
    padding: "90px 0 0 0",
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "140px",
  lineHeight: "111%",
  color: "#fff",
  textTransform: "uppercase",
  "& span": {
    fontFamily: theme.typography.secondFamily,
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "105px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "90px",
    lineHeight: "111%",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "47px",
    lineHeight: "121%",
  },
}));

const YourFAQ = () => {
  const { isTablet } = useMediaQuery();

  return (
    <Section id="faqs">
      <CustomizedContainer>
        <Box sx={{ position: "relative", width: "100%" }}>
          <LineBox>
            <DefaultLineBlock />
            <MainLineBlock />
            <DefaultLineBlock />
          </LineBox>

          <YourFAQWrapper>
            <Title>
              {isTablet ? (
                <span>
                  Yor <br /> FAQ
                </span>
              ) : (
                <span>Yor FAQ</span>
              )}
            </Title>
            <Accordion />
          </YourFAQWrapper>
        </Box>
        <JoinUs />
      </CustomizedContainer>
    </Section>
  );
};

export default YourFAQ;
