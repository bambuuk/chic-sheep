import useControlButton from "@/hooks/useControlButton";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import { Button, ButtonBox, ButtonText, Star } from "./CustomElements";
import star from "/public/images/icons/star-22-coral.svg";

const JoinUsUI = styled(Box)(({}) => ({
  position: "relative",
  bottom: "-203px",
}));

const Picture = styled(Image)(({}) => ({
  maxWidth: "1700px",
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const InfoBlock = styled(Box)(({}) => ({
  width: "40.5%",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: "5%",
  display: "flex",
  flexDirection: "column",
}));

const Title = styled("h3")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "140px",
  lineHeight: "111%",
  color: "#1b1b1b",
  textTransform: "uppercase",
}));

const Description = styled(Box)(({ theme }) => ({
  marginTop: "19px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  color: "#1b1b1b",
}));

const MediumDescription = styled("span")(({ theme }) => ({
  fontWeight: 600,
  fontFamily: theme.typography.fontFamily,
  fontSize: "26px",
  color: "#1b1b1b",
}));

const CustomButton = styled(Button)(({}) => ({
  maxWidth: "419px",
  marginTop: "45px",
  borderColor: "#141414",
}));

export const JoinUs = () => {
  const { ref, scaleStar } = useControlButton({ type: "normal" });

  return (
    <JoinUsUI>
      <Picture src="/images/joinUs.png" width={1700} height={970} alt="Sheep" />
      <InfoBlock>
        <Title>Join Us</Title>

        <Description>
          Do you want to be the first to know all the news, insights and
          important information?{" "}
          <MediumDescription>Join our community!</MediumDescription> We always
          have something interesting and useful.
        </Description>

        <CustomButton onMouseLeave={scaleStar}>
          <ButtonBox>
            <Star ref={ref} src={star} width={22} height={22} alt="star" />
            <ButtonText sx={{ color: "#141414" }}>Join community</ButtonText>
            <Star src={star} width={22} height={22} alt="star" />
          </ButtonBox>
        </CustomButton>
      </InfoBlock>
    </JoinUsUI>
  );
};
