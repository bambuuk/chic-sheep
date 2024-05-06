"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  borderTop: "1px solid #4f4f4f",
  padding: "25px 0",
  margin: 0,
  minHeight: "auto",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  [theme.breakpoints.down(1700)]: {
    padding: "20px 0",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "17px 0",
  },
  [theme.breakpoints.down(576)]: {
    padding: "20px 0 25px 0",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<Box />} {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  minHeight: "auto",
  margin: 0,
  padding: "0 0",
  display: "flex",
  justifyContent: "space-between",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

const TitleWrapper = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const Title = styled("h3")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "30px",
  color: "#fff",
  [theme.breakpoints.down(1700)]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "28px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "20px",
  },
}));

const Subtitle = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  color: "#bbb",
  lineHeight: "normal",
  marginTop: "20px",
  [theme.breakpoints.down(1700)]: {
    fontSize: "20px",
    marginTop: "15px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "16px",
    marginTop: "10px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
    marginTop: "20px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "20px",
    marginTop: "10px",
  },
}));

const ImgStyle = styled("img")(({theme}) => ({
  [theme.breakpoints.down(1700)]: {
    width: '40px',
    height: '40px',
  },
  [theme.breakpoints.down(1280)]: {
    width: '30px',
    height: '30px',
    marginLeft: '10px',
  },
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <TitleWrapper>
            <Title>Set Up a Wallet:</Title>
            <ImgStyle
              src={
                expanded === "panel1"
                  ? "/images/icons/star-47-yellow.svg"
                  : "/images/icons/star-47-gray.svg"
              }
              alt="star"
            />
          </TitleWrapper>
        </AccordionSummary>
        <AccordionDetails>
          <Subtitle>
            Choose a digital wallet, fund it with cryptocurrency, and ensure you
            have enough for the NFT and transaction fees.
          </Subtitle>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <TitleWrapper>
            <Title>Select an NFT:</Title>
            <ImgStyle
              src={
                expanded === "panel2"
                  ? "/images/icons/star-47-yellow.svg"
                  : "/images/icons/star-47-gray.svg"
              }
              alt="star"
            />
          </TitleWrapper>
        </AccordionSummary>
        <AccordionDetails>
          <Subtitle>
            Explore our gallery with Chic Sheeps in detail and choose the one
            that best suits your interests.
          </Subtitle>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <TitleWrapper>
            <Title>Confirm Payment:</Title>
            <ImgStyle
              src={
                expanded === "panel3"
                  ? "/images/icons/star-47-yellow.svg"
                  : "/images/icons/star-47-gray.svg"
              }
              alt="star"
            />
          </TitleWrapper>
        </AccordionSummary>
        <AccordionDetails>
          <Subtitle>
            Explore our gallery with Chic Sheeps in detail and choose the one
            that best suits your interests.
          </Subtitle>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          borderBottom: "1px solid #4f4f4f",
        }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <TitleWrapper>
            <Title>Ownership:</Title>
            <ImgStyle
              src={
                expanded === "panel4"
                  ? "/images/icons/star-47-yellow.svg"
                  : "/images/icons/star-47-gray.svg"
              }
              alt="star"
            />
          </TitleWrapper>
        </AccordionSummary>
        <AccordionDetails>
          <Subtitle>
            {` Now, you can proudly display your NFT in your digital collection. It's a tangible representation of your investment.`}
          </Subtitle>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
