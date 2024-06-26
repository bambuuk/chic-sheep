"use client";
import { styled } from "@mui/material";
import { Section, CustomContainer } from "../CustomElements";
import CustomizedAccordions from "./Accordion";

const MainWrapper = styled("div")(({ theme }) => ({
  padding: "220.5px 0 220px 0",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "52% 1fr",
  columnGap: "60px",
  [theme.breakpoints.down(1700)]: {
    columnGap: "50px",
  },
  [theme.breakpoints.down(1024)]: {
    padding: "120px 0",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto",
    gap: "60px",
  },
  [theme.breakpoints.down(576)]: {
    padding: "90px 0",
    gap: "40px",
  },
}));

const SheepImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "relative",
  borderRadius: "50px",
  left: "-2px",
  [theme.breakpoints.down(1024)]: {
    gridRow: "2 / 3",
    left: 0,
  },
}));

const InfoBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  width: "100%",
  position: "relative",
  top: "-30px",
  [theme.breakpoints.down(1920)]: {
    top: "-18px",
    gap: "50px",
  },
  [theme.breakpoints.down(1700)]: {
    gap: "40px",
    top: "-15px",
  },
  [theme.breakpoints.down(1500)]: {
    top: "-8px",
  },
  [theme.breakpoints.down(1280)]: {
    top: "-5px",
    gap: "20px",
  },
  [theme.breakpoints.down(1024)]: {
    top: "0",
    gap: "62px",
  },
  [theme.breakpoints.down(576)]: {
    gap: "40px",
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "140px",
  lineHeight: "111%",
  color: "#fff",
  textTransform: "uppercase",
  [theme.breakpoints.down(1920)]: {
    fontSize: "100px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "90px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "60px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "90px",
    position: "relative",
    left: "-4px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "47px",
    lineHeight: "121%",
    left: "-4px",
  },
}));

const HowToBuy = () => {
  return (
    <Section id="how-to-buy">
      <CustomContainer>
        <MainWrapper>
          <SheepImg src={"/images/howToBuyNftSheep.png"} alt="Sheep" />

          <InfoBox>
            <Title>
              HOW TO
              <br />
              BUY NFT
            </Title>
            <CustomizedAccordions />
          </InfoBox>
        </MainWrapper>
      </CustomContainer>
    </Section>
  );
};

export default HowToBuy;
