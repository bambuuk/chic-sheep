import star from "/public/images/icons/yellowStar.svg";
import useControlButton from "@/hooks/useControlButton";
import { Button, ButtonBox, ButtonText, Star } from "../CustomElements";

interface ButtonProps {
  text: string;
}

const BuyButton = ({ text }: ButtonProps) => {
  const { ref, scaleStar } = useControlButton({ type: "large" });

  return (
    <Button
      onMouseLeave={scaleStar}
      sx={(theme) => ({
        [theme.breakpoints.down(1280)]: {
          height: "50px",
          border: "2px solid #fff",
        },
      })}
    >
      <ButtonBox>
        <Star ref={ref} src={star} width={47} height={47} alt="star" />
        <ButtonText
          sx={(theme) => ({
            [theme.breakpoints.down(1280)]: {
              fontSize: "18px",
            },
          })}
        >
          {text}
        </ButtonText>
        <Star src={star} width={47} height={47} alt="star" />
      </ButtonBox>
    </Button>
  );
};

export default BuyButton;
