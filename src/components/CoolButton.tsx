import { styled } from "@mui/material";
import { Button, ButtonBox, ButtonText, Star } from "./CustomElements";
import useControlButton from "@/hooks/useControlButton";
import starWhite from "/public/images/icons/star-22-white.svg";
import starBlack from "/public/images/icons/star-22-black.svg";

interface CustomButtonProps {
  colorType: "black-white" | "white-black";
}

const CustomButton = styled(Button)<CustomButtonProps>(
  ({ theme, colorType }) => ({
    maxWidth: "none",
    borderColor: colorType === "white-black" ? "#fff" : "#141414",
    padding: "24px 27px",
    width: "100%",
    "&:hover div": {
      color: colorType === "white-black" ? "#090909" : "#fff",
    },
  })
);

const CustomButtonText = styled(ButtonText)<CustomButtonProps>(
  ({ theme, colorType }) => ({
    color: colorType === "white-black" ? "#fff" : "#090909",
    [theme.breakpoints.down(1500)]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down(1024)]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down(576)]: {
      fontSize: "13px",
    },
  })
);

interface CoolButton {
  handleClose: () => void;
  colorType: "black-white" | "white-black";
}

export const CoolButton = ({ handleClose, colorType }: CoolButton) => {
  const { ref, scaleStar } = useControlButton({ type: "normal" });
  return (
    <CustomButton
      onMouseLeave={scaleStar}
      onClick={handleClose}
      colorType={colorType}
    >
      <ButtonBox>
        <Star
          ref={ref}
          src={colorType === "white-black" ? starWhite : starBlack}
          width={22}
          height={22}
          alt="star"
        />
        <CustomButtonText colorType={colorType}>Cool!</CustomButtonText>
        <Star
          src={colorType === "white-black" ? starWhite : starBlack}
          width={22}
          height={22}
          alt="star"
        />
      </ButtonBox>
    </CustomButton>
  );
};
