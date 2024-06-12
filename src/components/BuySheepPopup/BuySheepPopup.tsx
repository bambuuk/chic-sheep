import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import Image from "next/image";
import { stareSheep } from "@/assets/data";
import BuyButton from "./BuyButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    display: "block",
    overflowY: "scroll",
    padding: "215px 0 260px 0",
    [theme.breakpoints.down(1700)]: {
      padding: "150px 0 190px 0",
    },
    [theme.breakpoints.down(1500)]: {
      padding: "130px 0 170px 0",
    },
    [theme.breakpoints.down(1280)]: {
      padding: "120px 0 150px 0",
    },
  },
  "& .MuiDialogContent-root": {
    padding: 0,
  },
  "& .MuiPaper-root": {
    margin: "0 auto",
    padding: "60px 45px 90px 45px",
    maxWidth: "1788px",
    maxHeight: "none",
    width: "93.125%",
    borderRadius: "50px",
    border: "1px solid #4f4f4f",
    background: "#090909",
    [theme.breakpoints.down(1700)]: {
      padding: "50px 40px 75px 40px",
    },
    [theme.breakpoints.down(1500)]: {
      padding: "40px 30px 50px 30px",
    },
    // [theme.breakpoints.down(1024)]: {
    //   padding: "130px 50px 100px 50px",
    // },
    // [theme.breakpoints.down(576)]: {
    //   padding: "116px 30px 70px 30px",
    //   width: "100%",
    //   height: "100%",
    //   borderRadius: "0",
    //   border: "none",
    // },
    // [theme.breakpoints.down(420)]: {
    //   padding: "110px 20px 70px 20px",
    //   width: "100%",
    //   height: "100%",
    //   borderRadius: "0",
    //   border: "none",
    // },
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: "45px",
  top: "60px",
  "& path": {
    transition: "all 0.4s",
  },
  "&:hover path": {
    fill: "#FBB41A",
  },
  [theme.breakpoints.down(1700)]: {
    right: "40px",
    top: "50px",
  },
  [theme.breakpoints.down(1500)]: {
    right: "30px",
    top: "40px",
  },
  [theme.breakpoints.down(1024)]: {
    top: "50px",
    right: "50px",
  },
  [theme.breakpoints.down(576)]: {
    right: "41px",
    top: "30px",
    "& svg": {
      width: "28px",
      height: "28px",
    },
  },
  [theme.breakpoints.down(400)]: {
    right: "30px",
    top: "30px",
  },
}));

const Wrapper = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
}));

const SheepImgList = styled(Box)(({ theme }) => ({
  display: "flex",
  "& > :not(:first-of-type)": {
    marginLeft: "-34px",
  },
  [theme.breakpoints.down(576)]: {
    "& > :not(:first-of-type)": {
      marginLeft: "-20px",
    },
  },
  [theme.breakpoints.down(420)]: {
    "& > :not(:first-of-type)": {
      marginLeft: "-18px",
    },
  },
}));

const SheepImgBox = styled(Box)(({ theme }) => ({
  width: "116px",
  height: "117px",
  borderRadius: "100px",
  overflow: "hidden",
  border: "2px solid #4f4f4f",
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": {
    border: "2px solid #fbb41a",
  },
  [theme.breakpoints.down(576)]: {
    width: "68px",
    height: "70px",
  },
  [theme.breakpoints.down(420)]: {
    width: "62px",
    height: "62px",
  },
}));

const SheepImg = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const InfoBox = styled(Box)(({ theme }) => ({
  marginTop: "50px",
  display: "grid",
  gridTemplateColumns: "1fr 48.8%",
  columnGap: "39px",
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.down(1700)]: {
    columnGap: "30px",
  },
  [theme.breakpoints.down(1280)]: {
    columnGap: "20px",
  },
}));

const InfoImg = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50px",
}));

const Overview = styled(Box)(({ theme }) => ({
  padding: "39px 45px 60px 45px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "50px",
  backgroundColor: "#141414",
  [theme.breakpoints.down(1700)]: {
    padding: "30px 40px 40px 40px",
  },
  [theme.breakpoints.down(1500)]: {
    padding: "30px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "25px",
  },
}));

const DescriptionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "85.5%",
  [theme.breakpoints.down(1500)]: {
    width: "95%",
  },
  [theme.breakpoints.down(1280)]: {
    width: "100%",
  },
}));

const Title = styled("h4")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "50px",
  lineHeight: "120%",
  color: "#fff",
  [theme.breakpoints.down(1920)]: {
    fontSize: "45px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "38px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "30px",
    lineHeight: "110%",
  },
}));

const Description = styled("p")(({ theme }) => ({
  marginTop: "25px",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "28px",
  color: "#bbb",
  lineHeight: "normal",
  [theme.breakpoints.down(1920)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "20px",
    marginTop: "20px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "18px",
    marginTop: "15px",
  },
}));

const SheepFeatures = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "30px",
  [theme.breakpoints.down(1700)]: {
    marginTop: "25px",
  },
  [theme.breakpoints.down(1500)]: {
    marginTop: "20px",
  },
  [theme.breakpoints.down(1280)]: {
    marginTop: "15px",
  },
}));

const SheepFeature = styled("div")(({ theme }) => ({
  borderRadius: "50px",
  padding: "15px 30px",
  background: "#62b8b9",
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: "24px",
  lineHeight: "98%",
  color: "#141414",
  textTransform: "capitalize",
  textAlign: "center",
  [theme.breakpoints.down(1920)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(1700)]: {
    padding: "13px 25px",
  },
  [theme.breakpoints.down(1500)]: {
    padding: "12px 24px",
    fontSize: "18px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "10px 15px",
    fontSize: "16px",
  },
}));

const Specifications = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "1",
  width: "100%",
  marginTop: "50px",
  overflow: "hidden",
  "& > li:not(:first-of-type)": {
    paddingTop: "25.5px",
  },
  "& > li:last-child": {
    paddingBottom: "0",
  },
  [theme.breakpoints.down(1920)]: {
    marginTop: "40px",
    "& > li:not(:first-of-type)": {
      paddingTop: "20px",
    },
  },
  [theme.breakpoints.down(1700)]: {
    marginTop: "35px",
    "& > li:not(:first-of-type)": {
      paddingTop: "18px",
    },
  },
  [theme.breakpoints.down(1500)]: {
    marginTop: "25px",
    "& > li:not(:first-of-type)": {
      paddingTop: "14px",
    },
  },
  [theme.breakpoints.down(1280)]: {
    marginTop: "20px",
    "& > li:not(:first-of-type)": {
      paddingTop: "12px",
    },
  },
}));

const Characteristic = styled("li")(({ theme }) => ({
  paddingBottom: "24.5px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down(1920)]: {
    paddingBottom: "20px",
  },
  [theme.breakpoints.down(1700)]: {
    paddingBottom: "18px",
  },
  [theme.breakpoints.down(1500)]: {
    paddingBottom: "14px",
  },
  [theme.breakpoints.down(1280)]: {
    paddingBottom: "12px",
  },
}));

const Divider = styled(Box)(({}) => ({
  border: "1px solid #4f4f4f",
  width: "738px",
  height: "0px",
}));

const CharacteristicName = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  color: "#bbb",
  [theme.breakpoints.down(1920)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "16px",
  },
}));

const FullPercent = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  color: "#bbb",
  marginRight: "25px",
  [theme.breakpoints.down(1920)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "16px",
  },
}));

const CharacteristicValue = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: "26px",
  color: "#fff",
  [theme.breakpoints.down(1920)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "16px",
  },
}));

const TotalName = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: "30px",
  color: "#fff",
  [theme.breakpoints.down(1920)]: {
    fontSize: "27px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "18px",
  },
}));

const TotalValue = styled(Box)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 700,
  fontSize: "30px",
  color: "#fbb41a",
  [theme.breakpoints.down(1920)]: {
    fontSize: "27px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "18px",
  },
}));

const ButtonWrapper = styled("div")(({ theme }) => ({
  width: "100%",
}));

interface BuySheepPopupProps {
  onCloseModal: () => void;
  isModalOpen: boolean;
}

export default function BuySheepPopup({
  onCloseModal,
  isModalOpen,
}: BuySheepPopupProps) {
  return (
    <>
      <BootstrapDialog
        onClose={onCloseModal}
        aria-labelledby="customized-dialog-title"
        open={isModalOpen}
      >
        <CustomIconButton aria-label="close" onClick={onCloseModal}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.84386 29.9845C2.10834 30.0277 1.38499 29.7804 0.826335 29.2945C-0.275445 28.1733 -0.275445 26.3624 0.826335 25.2412L24.9517 0.835037C26.0976 -0.249743 27.8958 -0.189441 28.9681 0.969842C29.9378 2.01818 29.9943 3.62949 29.1004 4.74466L4.83294 29.2945C4.28149 29.7734 3.56974 30.0203 2.84386 29.9845Z"
              fill="#BBBBBB"
            />
            <path
              d="M26.941 29.9845C26.1955 29.9813 25.4811 29.6819 24.9518 29.1508L0.826349 4.74458C-0.194392 3.53872 -0.0556172 1.72397 1.13637 0.691253C2.20025 -0.230418 3.76926 -0.230418 4.83305 0.691253L29.1006 25.0974C30.2462 26.1825 30.3055 28.0017 29.2329 29.1607C29.1902 29.2068 29.1461 29.2514 29.1006 29.2946C28.5063 29.8173 27.7243 30.0671 26.941 29.9845Z"
              fill="#BBBBBB"
            />
          </svg>
        </CustomIconButton>
        <DialogContent>
          <Wrapper>
            <SheepImgList>
              {stareSheep.map(({ img, title }, index) => {
                return (
                  <SheepImgBox
                    key={title}
                    sx={{
                      position: "relative",
                      zIndex: `${100 - index}`,
                      // border: "2px solid #4f4f4f",
                    }}
                  >
                    <SheepImg src={img} width={116} height={117} alt="Sheep" />
                  </SheepImgBox>
                );
              })}
            </SheepImgList>

            <InfoBox>
              <InfoImg
                src={"/images/stareSheep/eleanor.png"}
                width={829}
                height={850}
                alt="Sheep"
              />

              <Overview>
                <DescriptionWrapper>
                  <Title>Pablo the Poetic</Title>

                  <Description>
                    Pablo loves the hushed conversations of poets and the
                    melodic cadence of their verses.
                  </Description>
                </DescriptionWrapper>

                <SheepFeatures>
                  <SheepFeature>Artistic soul</SheepFeature>
                  <SheepFeature>Books lover</SheepFeature>
                  <SheepFeature>Brave</SheepFeature>
                </SheepFeatures>

                <Specifications>
                  <Characteristic>
                    <CharacteristicName>Current price:</CharacteristicName>
                    <CharacteristicValue>0,0989 ETH</CharacteristicValue>
                  </Characteristic>
                  <Divider />
                  <Characteristic>
                    <CharacteristicName>Royalty:</CharacteristicName>
                    <Box sx={{ display: "flex" }}>
                      <FullPercent>{"Full (5%)"}</FullPercent>
                      <CharacteristicValue>0,049 ETH</CharacteristicValue>
                    </Box>
                  </Characteristic>
                  <Divider />
                  <Characteristic>
                    <CharacteristicName>Potential upside:</CharacteristicName>
                    <CharacteristicValue>1.33x</CharacteristicValue>
                  </Characteristic>
                  <Divider />
                  <Characteristic>
                    <TotalName>You pay:</TotalName>
                    <TotalValue>0,1479 ETH</TotalValue>
                  </Characteristic>
                </Specifications>
                <ButtonWrapper>
                  <BuyButton text={"BUY a Sheep"} />
                </ButtonWrapper>
              </Overview>
            </InfoBox>
          </Wrapper>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
