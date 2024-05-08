import { styled } from "@mui/material";

const AccordionItemUI = styled("div")(({}) => ({
  padding: "39px 60px",
  border: "1px solid #4f4f4f",
  borderRadius: "50px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
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
}));

const Trigger = styled("div")(({}) => ({
  width: "96px",
  height: "96px",
  backgroundColor: "#fff",
  borderRadius: "100%",
  position: "relative",
}));

const HorizontalRow = styled("div")(({}) => ({
  borderRadius: "30px",
  width: "49px",
  height: "9px",
  background: "#141414",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
}));

const VerticalRow = styled(HorizontalRow)(({}) => ({
  width: "9px",
  height: "49px",
}));

const Description = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "26px",
  color: "#fff",
  maxWidth: "85%",
  width: "100%",
}));

interface AccordionItem {
  title: string;
  description: string;
}

export const AccordionItem = ({ title, description }: AccordionItem) => {
  return (
    <AccordionItemUI>
        <TitleBox>
          <Title>
            {title}
          </Title>
          <Trigger>
            <HorizontalRow />
            <VerticalRow />
          </Trigger>
        </TitleBox>

        <Description>
          {description}
        </Description>
      </AccordionItemUI>
  )
}
