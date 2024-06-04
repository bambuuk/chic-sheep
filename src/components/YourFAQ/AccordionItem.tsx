import { Box, styled } from "@mui/material";
import { useState } from "react";

const AccordionItemUI = styled(Box)(({ theme }) => ({
  padding: "39px 60px",
  border: "1px solid #4f4f4f",
  borderRadius: "50px",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.5s",
  overflow: "hidden",
  [theme.breakpoints.down(1024)]: {
    padding: "47px 40px",
  },
  [theme.breakpoints.down(768)]: {
    padding: "41px 21px",
  },
  [theme.breakpoints.down(420)]: {
    padding: "35px 15px",
  },
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
  [theme.breakpoints.down(1920)]: {
    fontSize: "44px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "38px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "34px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "26px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "28px",
    lineHeight: "136%",
  },
  [theme.breakpoints.down(768)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down(400)]: {
    fontSize: "12px",
  },
}));

const Trigger = styled(Box)(({ theme }) => ({
  width: "96px",
  height: "96px",
  backgroundColor: "#fff",
  borderRadius: "100%",
  position: "relative",
  cursor: "pointer",
  transition: "all 0.5s",
  [theme.breakpoints.down(1700)]: {
    width: "80px",
    height: "80px",
  },
  [theme.breakpoints.down(1280)]: {
    width: "66px",
    height: "66px",
  },
  [theme.breakpoints.down(1024)]: {
    width: "76px",
    height: "76px",
  },
  [theme.breakpoints.down(768)]: {
    width: "44px",
    height: "44px",
  },
  [theme.breakpoints.down(400)]: {
    width: "33px",
    height: "33px",
  },
}));

const HorizontalRow = styled(Box)(({ theme }) => ({
  borderRadius: "30px",
  width: "49px",
  height: "9px",
  background: "#141414",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  transition: "all 0.5s",
  [theme.breakpoints.down(1280)]: {
    width: "38px",
    height: "7px",
  },
  [theme.breakpoints.down(768)]: {
    width: "23px",
    height: "5px",
  },
}));

const VerticalRow = styled(HorizontalRow)(({ theme }) => ({
  width: "9px",
  height: "49px",
  [theme.breakpoints.down(1280)]: {
    width: "7px",
    height: "38px",
  },
  [theme.breakpoints.down(768)]: {
    width: "5px",
    height: "23px",
  },
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
  lineHeight: "28px",
  [theme.breakpoints.down(1700)]: {
    fontSize: "20px",
    lineHeight: "24px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "18px",
    marginTop: "22px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
    lineHeight: "28px",
  },
  [theme.breakpoints.down(768)]: {
    fontSize: "16px",
    lineHeight: "20px",
  },
  [theme.breakpoints.down(576)]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.down(420)]: {
    fontSize: "14px",
    lineHeight: "18px",
  },
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
            sx={(theme) => ({
              height: activeTrigger ? "9px" : "49px",
              backgroundColor: activeTrigger ? "#fff" : "#141414",
              [theme.breakpoints.down(1280)]: {
                height: activeTrigger ? "7px" : "38px",
              },
              [theme.breakpoints.down(768)]: {
                height: activeTrigger ? "5px" : "23px",
              },
            })}
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
