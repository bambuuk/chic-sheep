import { styled } from "@mui/material";
import Image from "next/image";
import star from '/public/images/icons/yellowStar.svg';
import useControlButton from "@/hooks/useControlButton";

const Button = styled('button')(({ theme }) => ({
  width: '100%',
  height: '70px',
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
  '&:hover span': {
    transition: 'all .4s',
    color: '#141414',
  },
  '& img': {
    transition: 'transform 0.5s ease-in-out',
    transform: 'scale(1)',
    position: 'relative',
  },
  '&:hover div img:first-child': {
    transform: 'scale(180)',
  },
  [theme.breakpoints.down(576)]: {
    height: '50px',
    padding: '0 10px',
  },
}));

const ButtonBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down(576)]: {
    gap: '5px',
  },
}));

const ButtonText = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '24px',
  color: '#fff',
  position: 'relative',
  zIndex: '10',
  [theme.breakpoints.down(1280)]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '13px',
  },
}));

const Star = styled(Image)(({ theme }) => ({
  display: 'block',
  width: '22px',
  height: '22px',
  objectFit: 'cover',
  [theme.breakpoints.down(768)]: {
    width: '14px',
    height: '14px',
  },
}));

interface ButtonProps {
  text: string;
}

const CardButton = ({ text }: ButtonProps) => {
  const { ref, scaleStar } = useControlButton({ type: 'large' });

  return (
    <Button
      onMouseLeave={scaleStar}
    >
      <ButtonBox>
        <Star
          ref={ref}
          src={star}
          width={47}
          height={47}
          alt="star"
        />
        <ButtonText>{text}</ButtonText>
        <Star
          src={star}
          width={47}
          height={47}
          alt="star"
        />
      </ButtonBox>
    </Button>
  )
}

export default CardButton
