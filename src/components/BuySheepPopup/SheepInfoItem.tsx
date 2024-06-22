import { Box, styled } from "@mui/material";
import BuyButton from "./BuyButton";
import Image from "next/image";
import { StareSheepInfo } from "@/types/StareSheepInfo";

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
  [theme.breakpoints.down(1024)]: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    maxWidth: "600px",
  },
  [theme.breakpoints.down(576)]: {
    gap: "40px",
    marginTop: "40px",
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
  [theme.breakpoints.down(1024)]: {
    padding: "35px 35px 60px 35px",
  },
  [theme.breakpoints.down(576)]: {
    padding: "25px 20px 50px 20px",
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
  fontSize: "48px",
  lineHeight: "120%",
  color: "#fff",
  [theme.breakpoints.down(1920)]: {
    fontSize: "42px",
  },
  [theme.breakpoints.down(1700)]: {
    fontSize: "36px",
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: "32px",
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: "30px",
    lineHeight: "110%",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "34px",
    lineHeight: "176%",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "22px",
    lineHeight: "150%",
  },
  [theme.breakpoints.down(420)]: {
    fontSize: "20px",
    lineHeight: "120%",
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
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
    marginTop: "25px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "16px",
    marginTop: "15px",
  },
  [theme.breakpoints.down(420)]: {
    fontSize: "14px",
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
  [theme.breakpoints.down(1024)]: {
    marginTop: "30px",
  },
  [theme.breakpoints.down(576)]: {
    marginTop: "25px",
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
  [theme.breakpoints.down(1024)]: {
    padding: "8px 20px",
    fontSize: "20px",
  },
  [theme.breakpoints.down(576)]: {
    padding: "3px 20px",
    fontSize: "12px",
    lineHeight: "196%",
  },
  [theme.breakpoints.down(420)]: {
    padding: "3px 15px",
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
  [theme.breakpoints.down(1024)]: {
    marginTop: "50px",
    "& > li:not(:first-of-type)": {
      paddingTop: "25.5px",
    },
  },
  [theme.breakpoints.down(576)]: {
    marginTop: "30px",
    "& > li:not(:first-of-type)": {
      paddingTop: "15.5px",
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
  [theme.breakpoints.down(1024)]: {
    paddingBottom: "24.5px",
  },
  [theme.breakpoints.down(1024)]: {
    paddingBottom: "14.5px",
  },
}));

const Divider = styled(Box)(({}) => ({
  border: "1px solid #4f4f4f",
  width: "100%",
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
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(576)]: {
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
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down(420)]: {
    marginRight: "10px",
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
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(576)]: {
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
  [theme.breakpoints.down(1024)]: {
    fontSize: "26px",
  },
  [theme.breakpoints.down(576)]: {
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
  [theme.breakpoints.down(1024)]: {
    fontSize: "26px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "18px",
  },
}));

const ButtonWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: "60px",
  [theme.breakpoints.down(576)]: {
    marginTop: "40px",
  },
}));

interface SheepInfoItemProps {
  data: StareSheepInfo[];
}

export const SheepInfoItem = ({ data }: SheepInfoItemProps) => {
  const {
    title,
    description,
    features,
    bgColor,
    textColor,
    img,
    currentPrice,
    royalty,
    potentialUpside,
  } = data[0];

  return (
    <InfoBox>
      <InfoImg
        src={img}
        width={829}
        height={850}
        alt="Sheep"
        placeholder="blur"
      />

      <Overview>
        <Title>{title}</Title>
        <DescriptionWrapper>
          <Description>{description}</Description>
        </DescriptionWrapper>

        <SheepFeatures>
          {features.map((item) => (
            <SheepFeature key={item}>{item}</SheepFeature>
          ))}
        </SheepFeatures>

        <Specifications>
          <Characteristic>
            <CharacteristicName>Current price:</CharacteristicName>
            <CharacteristicValue>
              {currentPrice.toLocaleString()} ETH
            </CharacteristicValue>
          </Characteristic>
          <Divider />
          <Characteristic>
            <CharacteristicName>Royalty:</CharacteristicName>
            <Box sx={{ display: "flex" }}>
              <FullPercent>{"Full (5%)"}</FullPercent>
              <CharacteristicValue>
                {royalty.toLocaleString()} ETH
              </CharacteristicValue>
            </Box>
          </Characteristic>
          <Divider />
          <Characteristic>
            <CharacteristicName>Potential upside:</CharacteristicName>
            <CharacteristicValue>{potentialUpside}x</CharacteristicValue>
          </Characteristic>
          <Divider />
          <Characteristic>
            <TotalName>You pay:</TotalName>
            <TotalValue>
              {(+(currentPrice + royalty).toFixed(4)).toLocaleString()} ETH
            </TotalValue>
          </Characteristic>
        </Specifications>
        <ButtonWrapper>
          <BuyButton text={"BUY a Sheep"} />
        </ButtonWrapper>
      </Overview>
    </InfoBox>
  );
};
