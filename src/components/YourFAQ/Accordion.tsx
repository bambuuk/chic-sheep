import { styled } from "@mui/material";
import { FAQs } from "@/assets/data";
import { AccordionItem } from "./AccordionItem";

const AccordionUI = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  [theme.breakpoints.down(1024)]: {
    gap: "40px",
  },
  [theme.breakpoints.down(768)]: {
    gap: "30px",
  },
}));

export default function Accordion() {
  return (
    <AccordionUI>
      {FAQs.map(({ title, description }) => {
        return (
          <AccordionItem title={title} description={description} key={title} />
        );
      })}
    </AccordionUI>
  );
}
