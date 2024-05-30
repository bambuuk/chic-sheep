"use client";
import { Box, styled } from "@mui/material";
import {
  Section,
  CustomContainer,
  LineBox,
  DefaultLineBlock,
  MainLineBlock,
} from "./CustomElements";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { roadmap } from "@/assets/data";

const CustomizedContainer = styled(CustomContainer)(({ theme }) => ({
  position: "relative",
  zIndex: 100,
  backgroundColor: "#141414",
  paddingBottom: "220px",
  [theme.breakpoints.down(1024)]: {
    paddingBottom: "119.5px",
  },
  [theme.breakpoints.down(576)]: {
    paddingBottom: "89.5px",
  },
}));

const ContentWrapper = styled("div")(({ theme }) => ({
  paddingTop: "190px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down(1024)]: {
    paddingTop: "120.5px",
  },
  [theme.breakpoints.down(576)]: {
    paddingTop: "90.5px",
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "140px",
  lineHeight: "111 %",
  color: "#fff",
  [theme.breakpoints.down(1700)]: {
    fontSize: "105px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "90px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "44px",
    lineHeight: "121 %",
  },
}));

const Stages = styled("ul")(({ theme }) => ({
  marginTop: "152px",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  width: "100%",
  [theme.breakpoints.down(1700)]: {
    marginTop: "114px",
  },
  [theme.breakpoints.down(1024)]: {
    marginTop: "60px",
    gap: "60px",
  },
  [theme.breakpoints.down(576)]: {
    marginTop: "40px",
    gap: "30px",
  },
}));

const StageItem = styled("li")(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: "50px",
  padding: "39px 62px",
  border: "1px solid #4f4f4f",
  backgroundColor: "#141414",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "all 0.3s",
  cursor: "pointer",
  [theme.breakpoints.down(1920)]: {
    padding: "30px 47px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "30px",
  },
  [theme.breakpoints.down(1024)]: {
    padding: "31px 31px 40px 31px",
    flexDirection: "column",
    justifyContent: "initial",
  },
  [theme.breakpoints.down(576)]: {
    padding: "20px 20px 30px 20px",
  },
  "&:hover": {
    backgroundColor: "#fbb41a",
  },
  "&:hover > :first-of-type": {
    color: "black",
  },
  "&:hover > :last-child": {
    color: "#1b1b1b",
  },
  "&:hover img": {
    transition: "all 0.4s",
    opacity: "1",
  },
}));

const StageSubtitle = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "50px",
  lineHeight: "120 %",
  color: "#fff",
  maxWidth: "440px",
  width: "100%",
  [theme.breakpoints.down(1700)]: {
    maxWidth: "360px",
    fontSize: "37.5px",
  },
  [theme.breakpoints.down(1280)]: {
    maxWidth: "270px",
    fontSize: "28px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "28px",
    lineHeight: "136%",
    maxWidth: "100%",
    textAlign: "start",
    marginTop: "25px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "20px",
    lineHeight: "150%",
    marginTop: "15px",
  },
}));

const StageDescription = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  lineHeight: "normal",
  color: "#bbb",
  maxWidth: "598px",
  width: "100%",
  [theme.breakpoints.down(1700)]: {
    maxWidth: "450px",
    fontSize: "20px",
  },
  [theme.breakpoints.down(1280)]: {
    maxWidth: "350px",
    fontSize: "18px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
    maxWidth: "100%",
    textAlign: "start",
    marginTop: "15px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "18px",
    marginTop: "10px",
  },
}));

const StageImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  top: "-68%",
  left: "50%",
  transform: "translateX(-70%)",
  opacity: "0",
  [theme.breakpoints.down(1920)]: {
    width: "300px",
    height: "300px",
    transform: "translateX(-82%)",
    top: "-60%",
  },
  [theme.breakpoints.down(1700)]: {
    width: "290px",
    height: "290px",
    transform: "translateX(-79%)",
    top: "-80%",
  },
  [theme.breakpoints.down(1500)]: {
    width: "260px",
    height: "260px",
    transform: "translateX(-79%)",
    top: "-57%",
  },
  [theme.breakpoints.down(1280)]: {
    width: "200px",
    height: "200px",
    transform: "translateX(-79%)",
    top: "-20%",
  },
  [theme.breakpoints.down(1024)]: {
    order: -1,
    width: "100%",
    maxHeight: "10%",
    height: "100%",
    objectFit: "cover",
    transform: "translateX(0)",
    top: "0",
    left: "0",
    position: "static",
    opacity: "1",
    borderRadius: "30px",
  },
}));

const OurRoadmap = () => {
  const { isTablet } = useMediaQuery();

  return (
    <Section id="roadmap">
      <CustomizedContainer>
        <Box sx={{ position: "relative", width: "100%" }}>
          <LineBox>
            <DefaultLineBlock />
            <MainLineBlock />
            <DefaultLineBlock />
          </LineBox>

          <ContentWrapper>
            <Title>OUR Roadmap</Title>
            <Stages>
              {roadmap.map(({ id, title, description, img, imgTablet }) => {
                return (
                  <StageItem key={id}>
                    <StageSubtitle>{title}</StageSubtitle>
                    <StageImage
                      src={isTablet ? imgTablet : img}
                      width={345}
                      height={345}
                      alt="Sheep"
                    />
                    <StageDescription>{description}</StageDescription>
                  </StageItem>
                );
              })}
            </Stages>
          </ContentWrapper>
        </Box>
      </CustomizedContainer>
    </Section>
  );
};

export default OurRoadmap;
