import star from "/public/images/icons/yellowStar.svg";
import useControlButton from "@/hooks/useControlButton";
import { Button, ButtonBox, ButtonText, Star } from "./CustomElements";

interface ButtonProps {
  text: string;
}

const CardButton = ({ text }: ButtonProps) => {
  const { ref, scaleStar } = useControlButton({ type: "large" });

  return (
    <Button onMouseLeave={scaleStar}>
      <ButtonBox>
        <Star ref={ref} src={star} width={47} height={47} alt="star" />
        <ButtonText>{text}</ButtonText>
        <Star src={star} width={47} height={47} alt="star" />
      </ButtonBox>
    </Button>
  );
};

export default CardButton;
