import { Box, styled } from "@mui/material";
import { useState } from "react";

const AccordionItemUI = styled(Box)(({}) => ({
  padding: "39px 60px",
  border: "1px solid #4f4f4f",
  borderRadius: "50px",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.5s",
  overflow: "hidden",
}));

const TitleBox = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const Title = styled("h3")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "50px",
  lineHeight: "120%",
  color: "#fff",
  maxWidth: "85%",
  width: "100%",
  transition: "all 0.5s",
}));

const Trigger = styled(Box)(({}) => ({
  width: "96px",
  height: "96px",
  backgroundColor: "#fff",
  borderRadius: "100%",
  position: "relative",
  cursor: "pointer",
  transition: "all 0.5s",
}));

const HorizontalRow = styled(Box)(({}) => ({
  borderRadius: "30px",
  width: "49px",
  height: "9px",
  background: "#141414",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  transition: "all 0.5s",
}));

const VerticalRow = styled(HorizontalRow)(({}) => ({
  width: "9px",
  height: "49px",
}));

const Description = styled("p")(({ theme }) => ({
  marginTop: "30px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  color: "#fff",
  maxWidth: "85%",
  width: "100%",
  transition: "all 0.5s",
}));

interface AccordionItem {
  title: string;
  description: string;
}

export const AccordionItem = ({ title, description }: AccordionItem) => {
  const [activeTrigger, setActiveTrigger] = useState(false);

  const toggleTrigger = () => {
    setActiveTrigger((state) => (state ? false : true));
  };

  return (
    <AccordionItemUI
      sx={{
        backgroundColor: activeTrigger ? "#efad26" : "#141414",
      }}
    >
      <TitleBox>
        <Title
          sx={{
            color: activeTrigger ? "#1b1b1b" : "#fff",
          }}
        >
          {title}
        </Title>
        <Trigger
          onClick={toggleTrigger}
          sx={{
            backgroundColor: activeTrigger ? "#141414" : "#fff",
          }}
        >
          <HorizontalRow
            sx={{
              backgroundColor: activeTrigger ? "#fff" : "#141414",
            }}
          />
          <VerticalRow
            sx={{
              height: activeTrigger ? "9px" : "49px",
              backgroundColor: activeTrigger ? "#fff" : "#141414",
            }}
          />
        </Trigger>
      </TitleBox>

      <Box
        sx={{
          maxHeight: activeTrigger ? "200px" : "0px",
          overflow: "hidden",
          transition: "all 0.5s ease-in-out",
          opacity: activeTrigger ? 1 : 0,
        }}
      >
        <Description
          sx={{
            color: activeTrigger ? "#1b1b1b" : "#fff",
          }}
        >
          {description}
        </Description>
      </Box>
    </AccordionItemUI>
  );
};
