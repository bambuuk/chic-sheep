import { styled } from "@mui/material";
import Image from "next/image";
import star from '/public/images/icons/yellowStar.svg';
import useControlButton from "@/hooks/useControlButton";

const ButtonUI = styled('button')(({ theme }) => ({
  width: '100%',
  height: '117px',
  border: '3px solid #fff',
  overflow: 'hidden',
  borderRadius: '100px',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '@keyframes pulse': {
    '0%': { transform: 'translateX(0) scale(80)' },
    '40%': { transform: 'translateX(0) scale(1)' },
    '55%': { transform: 'translateX(-5px) scale(2)' },
    '70%': { transform: 'translateX(0) scale(1)' },
    '85%': { transform: 'translateX(5px) scale(2)' },
    '100%': { transform: 'translateX(0) scale(1)' },
  },
  '@keyframes largePulse': {
    '0%': { transform: 'translateX(0) scale(180)' },
    '40%': { transform: 'translateX(0) scale(1)' },
    '55%': { transform: 'translateX(-10px) scale(2)' },
    '70%': { transform: 'translateX(0) scale(1)' },
    '85%': { transform: 'translateX(10px) scale(2)' },
    '100%': { transform: 'translateX(0) scale(1)' },
  },
  '&:hover span': {
    transition: 'all .4s',
    color: '#141414',
  },
  '& img': {
    transition: 'transform 0.5s ease-in-out',
    transform: 'scale(1)',
    position: 'relative',
    zIndex: '-1'
  },
  '&:hover div img:first-child': {
    transform: 'scale(180)',
  },
  [theme.breakpoints.down(1550)]: {
    padding: '8px 40px',
  },
  [theme.breakpoints.down(1280)]: {
    padding: '15px 30px',
    border: '2px solid #fff',
  },
  [theme.breakpoints.down(1024)]: {
    display: "none",
  },
}));

const ButtonBox = styled('div')(({ }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const ButtonText = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '50px',
  lineHeight: '0',
  color: '#fff',
  [theme.breakpoints.down(1280)]: {
    fontSize: '18px',
    lineHeight: '0',
  }
}));

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const { ref, scaleStar } = useControlButton({ type: 'large' });

  return (
    <ButtonUI
      onMouseLeave={scaleStar}
    >
      <ButtonBox>
        <Image
          ref={ref}
          src={star}
          width={47}
          height={47}
          alt="star"
        />
        <ButtonText>{text}</ButtonText>
        <Image
          src={star}
          width={47}
          height={47}
          alt="star"
        />
      </ButtonBox>
    </ButtonUI>
  )
}

export default Button
