import { Box, styled } from "@mui/material";
import Image from "next/image";
import { CoolButton } from "./CoolButton";
import { useState } from "react";
import { slideInTop, slideOutTop } from "@/assets/keyframes";
import { stareSheep } from "@/assets/data";

const CongratsUI = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: "101",
  color: "white",
  bottom: 0,
  left: 0,
  padding: "60px 45px",
  border: "1px solid #4f4f4f",
  backgroundColor: "#fbb41a",
  borderRadius: "50px",
  width: "100%",
  "&.slideInTop": {
    animation: `${slideInTop} 0.4s ease-in both`,
  },
  "&.slideOutTop": {
    animation: `${slideOutTop} 0.4s ease-out both`,
  },
  [theme.breakpoints.down(1700)]: {
    padding: "50px 45px",
  },
  [theme.breakpoints.down(1500)]: {
    padding: "30px 45px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "20px",
  },
  [theme.breakpoints.down(1024)]: {
    padding: "44px 48px 35px 48px",
  },
  [theme.breakpoints.down(576)]: {
    padding: "44px 30px 51px 30px",
    borderRadius: "50px 50px 0px 0px ",
  },
  [theme.breakpoints.down(420)]: {
    padding: "34px 15px 41px 15px",
  },
}));

const Wrapper = styled(Box)(({}) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
}));

const SheepImg = styled(Image)(({ theme }) => ({
  width: "110px",
  height: "113px",
  objectFit: "cover",
  borderRadius: "30px",
  [theme.breakpoints.down(576)]: {
    width: "93px",
    height: "106px",
  },
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginLeft: "25px",
  width: "100%",
  flex: 1,
  [theme.breakpoints.down(1024)]: {
    flexWrap: "wrap",
    marginLeft: "18px",
  },
}));

const Title = styled("h5")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "30px",
  color: "#141414",
  [theme.breakpoints.down(576)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(420)]: {
    fontSize: "18px",
  },
}));

const Description = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "28px",
  color: "#141414",
  maxWidth: "745px",
  width: "100%",
  lineHeight: "normal",
  [theme.breakpoints.down(1280)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down(420)]: {
    fontSize: "14px",
  },
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  marginLeft: "25px",
  [theme.breakpoints.down(1024)]: {
    flexBasis: "100%",
    marginLeft: "0",
    marginTop: "25px",
  },
}));

interface CongratsMessage {
  onClose: () => void;
  sheepId: string;
  onCloseMainModal: () => void;
}

export const CongratsMessage = ({
  onClose,
  sheepId,
  onCloseMainModal,
}: CongratsMessage) => {
  const [animationType, setAnimationType] = useState("slideInTop");

  const closePopup = () => {
    setAnimationType("slideOutTop");
    setTimeout(() => {
      onClose();
      onCloseMainModal();
    }, 400);
  };

  const img = stareSheep.filter((item) => item.id === sheepId)[0].img;

  return (
    <CongratsUI className={animationType}>
      <Wrapper>
        <SheepImg src={img} width={110} height={113} alt="Sheep" />

        <InfoBox>
          <Title>Congrats!</Title>
          <Description>
            {`If you're seeing this, then you've clicked on "Buy a sheep" for a free product.
             This is just for example purposes.`}
          </Description>
        </InfoBox>

        <ButtonWrapper>
          <CoolButton handleClose={closePopup} colorType="black-white" />
        </ButtonWrapper>
      </Wrapper>
    </CongratsUI>
  );
};
