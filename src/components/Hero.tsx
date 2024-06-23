"use client";
import { Box, styled } from "@mui/material";
import {
  CustomContainer,
  DefaultLineBlock,
  LineBox,
  MainLineBlock,
  Section,
} from "./CustomElements";
import Button from "./Button";
import BuySheepPopup from "./BuySheepPopup/BuySheepPopup";
import useModalControl from "@/hooks/useModalControl";

const HeroUI = styled(Section)(({}) => ({}));

const CustomizedContainer = styled(CustomContainer)(({}) => ({
  position: "relative",
  zIndex: "100",
}));

const HeroWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "220px",
  [theme.breakpoints.down(1024)]: {
    paddingBottom: "119.5px",
  },
  [theme.breakpoints.down(768)]: {
    paddingBottom: "89.5px",
  },
}));

const Title = styled("h1")(({ theme }) => ({
  marginTop: "55.5px",
  position: "relative",
  left: "-1.29%",
  display: "flex",
  flexWrap: "wrap",
  flexShrink: 1,
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "353px",
  lineHeight: "100%",
  color: "#fff",
  [theme.breakpoints.down(1920)]: {
    fontSize: "clamp(53px, 18.05vw, 354px)",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "clamp(53px, 17.5vw, 354px)",
    lineHeight: "90%",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "clamp(53px, 19.1vw, 354px)",
    lineHeight: "97%",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "clamp(53px, 18.85vw, 354px)",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "139px",
    marginTop: "100px",
    left: "-1%",
  },
  [theme.breakpoints.down(768)]: {
    fontSize: "105px",
    marginTop: "80px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "53px",
    lineHeight: "86%",
  },
}));

const TitleDescr = styled("p")(({ theme }) => ({
  paddingTop: "47%",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  color: "#bbb",
  maxWidth: "495px",
  width: "100%",
  [theme.breakpoints.down(1920)]: {
    paddingTop: "45%",
  },
  [theme.breakpoints.down(1700)]: {
    paddingTop: "44%",
    fontSize: "22px",
    maxWidth: "395px",
  },
  [theme.breakpoints.down(1536)]: {
    paddingTop: "40%",
  },
  [theme.breakpoints.down(1500)]: {
    paddingTop: "46%",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "18px",
    maxWidth: "330px",
    paddingTop: "49%",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "16px",
  },
}));

const TabletTitleDescr = styled("p")(({ theme }) => ({
  display: "none",
  marginTop: "30px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "24px",
  color: "#bbb",
  maxWidth: "552px",
  width: "100%",
  lineHeight: "24px",
  [theme.breakpoints.down(1280)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(1024)]: {
    display: "block",
  },
  [theme.breakpoints.down(768)]: {
    maxWidth: "none",
    fontSize: "22px",
  },
  [theme.breakpoints.down(576)]: {
    marginTop: "25px",
    fontSize: "20px",
  },
}));

const SpecialColor = styled("span")(({ theme }) => ({
  color: "#efad26",
  flexShrink: 1,
  fontFamily: theme.typography.secondFamily,
}));

const MainImg = styled("img")(({ theme }) => ({
  marginTop: "58px",
  display: "block",
  maxWidth: "1920px",
  width: "100%",
  objectFit: "cover",
  [theme.breakpoints.down(1024)]: {
    marginTop: "32px",
    minHeight: "432px",
    borderRadius: "30px",
  },
  [theme.breakpoints.down(768)]: {
    marginTop: "32px",
    minHeight: "380px",
    borderRadius: "30px",
  },
  [theme.breakpoints.down(576)]: {
    marginTop: "30px",
    minHeight: "300px",
  },
  [theme.breakpoints.down(400)]: {
    marginTop: "30px",
    minHeight: "250px",
  },
}));

const Hero = () => {
  const { isModalOpen, onOpenModal, onCloseModal } = useModalControl();

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
            <br />
            <Box sx={{ display: "flex", fontFamily: "Feogra" }}>
              SH
              <SpecialColor>EE</SpecialColor>
              PS
            </Box>
          </Title>

          <TabletTitleDescr>
            Step into a world where imagination roams freely among the woolly
            wonders. Explore, Collect, and Create with Our Unique NFT Sheeps.
          </TabletTitleDescr>

          <MainImg src="/images/heroSheep.png" alt="Sheep" />

          <Box
            sx={{ marginTop: "60px", maxWidth: "1700px", width: "100%" }}
            onClick={onOpenModal}
          >
            <Button text={"Start your sheepish journey"} />
          </Box>
        </HeroWrapper>
      </CustomizedContainer>
      <BuySheepPopup isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
    </HeroUI>
  );
};

export default Hero;
