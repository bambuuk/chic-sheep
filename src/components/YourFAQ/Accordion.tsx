import { styled } from "@mui/material";
import { FAQs } from "@/assets/data";
import { AccordionItem } from "./AccordionItem";

const AccordionUI = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
}));

export default function Accordion() {
  return (
    <AccordionUI>
      {FAQs.map(({title, description}) => {
        return (
          <AccordionItem 
            title={title} 
            description={description} 
            key={title} 
          />
        )
      })}
    </AccordionUI>
  );
}
