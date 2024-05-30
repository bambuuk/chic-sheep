import useControlButton from "@/hooks/useControlButton";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import { Button, ButtonBox, ButtonText, Star } from "../CustomElements";
import star from "/public/images/icons/star-22-coral.svg";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import SuccessPopup from "./SuccessPopup";

const JoinUsUI = styled(Box)(({ theme }) => ({
  padding: "220px 0 0 0",
  [theme.breakpoints.down(1024)]: {
    padding: "200px 0 0 0",
  },
  [theme.breakpoints.down(576)]: {
    padding: "90px 0 0 0",
  },
}));

const MainWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
}));

const Picture = styled(Image)(({}) => ({
  maxWidth: "1700px",
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const InfoBlock = styled(Box)(({ theme }) => ({
  width: "40.5%",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "5%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down(1024)]: {
    width: "100%",
    top: "0",
    transform: "none",
    right: "0",
    padding: "90px 111px 0 111px",
  },
  [theme.breakpoints.down(768)]: {
    padding: "50px 50px 0 50px",
  },
  [theme.breakpoints.down(576)]: {
    padding: "35px 25px 0 25px",
  },
  [theme.breakpoints.down(400)]: {
    padding: "20px 20px 0 20px",
  },
}));

const Title = styled("h3")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "140px",
  lineHeight: "111%",
  color: "#1b1b1b",
  textTransform: "uppercase",
  [theme.breakpoints.down(1920)]: {
    fontSize: "120px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "100px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "75px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "90px",
    textAlign: "center",
  },
  [theme.breakpoints.down(768)]: {
    fontSize: "80px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "47px",
    lineHeight: "121%",
  },
  [theme.breakpoints.down(400)]: {
    fontSize: "37px",
  },
}));

const Description = styled(Box)(({ theme }) => ({
  marginTop: "19px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  color: "#1b1b1b",
  [theme.breakpoints.down(1700)]: {
    fontSize: "21px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "19px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
    textAlign: "center",
  },
  [theme.breakpoints.down(768)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "18px",
    marginTop: "15px",
  },
  [theme.breakpoints.down(400)]: {
    fontSize: "16px",
  },
}));

const MediumDescription = styled("span")(({ theme }) => ({
  fontWeight: 600,
  fontFamily: theme.typography.fontFamily,
  fontSize: "26px",
  color: "#1b1b1b",
  [theme.breakpoints.down(1700)]: {
    fontSize: "21px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "19px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(768)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(400)]: {
    fontSize: "16px",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  maxWidth: "419px",
  marginTop: "45px",
  borderColor: "#141414",
  [theme.breakpoints.down(1500)]: {
    maxWidth: "400px",
  },
  [theme.breakpoints.down(1280)]: {
    maxWidth: "none",
  },
  [theme.breakpoints.down(1280)]: {
    maxWidth: "none",
  },
  [theme.breakpoints.down(1024)]: {
    width: "88.5%",
    margin: "0 auto",
    marginTop: "30px",
  },
  [theme.breakpoints.down(576)]: {
    marginTop: "20px",
    width: "100%",
  },
}));

const CustomButtonText = styled(ButtonText)(({ theme }) => ({
  color: "#141414",
  [theme.breakpoints.down(1500)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "13px",
  },
}));

export const JoinUs = () => {
  const { ref, scaleStar } = useControlButton({ type: "normal" });
  const { isTablet } = useMediaQuery();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleClickOpen = () => {
    setIsOpenPopup(true);
  };
  const handleClose = () => {
    setIsOpenPopup(false);
  };

  return (
    <JoinUsUI className="joinUs">
      <SuccessPopup isOpenPopup={isOpenPopup} handleClose={handleClose} />
      <MainWrapper>
        <Picture
          src={isTablet ? "/images/joinUs-tablet.png" : "/images/joinUs.png"}
          width={1700}
          height={970}
          alt="Sheep"
        />
        <InfoBlock>
          <Title>Join Us</Title>

          <Description>
            Do you want to be the first to know all the news, insights and
            important information?{" "}
            <MediumDescription>Join our community!</MediumDescription> We always
            have something interesting and useful.
          </Description>

          <CustomButton onMouseLeave={scaleStar} onClick={handleClickOpen}>
            <ButtonBox>
              <Star ref={ref} src={star} width={22} height={22} alt="star" />
              <CustomButtonText>Join community</CustomButtonText>
              <Star src={star} width={22} height={22} alt="star" />
            </ButtonBox>
          </CustomButton>
        </InfoBlock>
      </MainWrapper>
    </JoinUsUI>
  );
};
