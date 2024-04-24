import { styled } from "@mui/material";
import Image from "next/image";
import star from '/public/images/icons/yellowStar.svg';
import useControlButton from "@/hooks/useControlButton";

const LargeButton = styled('button')(({ theme }) => ({
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
  },
  '&:hover div img:first-child': {
    transform: 'scale(180)',
  },
  [theme.breakpoints.down(1700)]: {
    height: '100px',
  },
  [theme.breakpoints.down(1500)]: {
    height: '90px',
  },
  [theme.breakpoints.down(1024)]: {
    height: '80px',
  },
  [theme.breakpoints.down(768)]: {
    height: '70px',
  },
  [theme.breakpoints.down(576)]: {
    height: '66px',
    padding: '0 10px',
  },
}));

const LargeButtonBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '25px',
  [theme.breakpoints.down(1280)]: {
    gap: '20px',
  },
  [theme.breakpoints.down(1024)]: {
    gap: '10px',
  },
  [theme.breakpoints.down(576)]: {
    gap: '5px',
  },
}));

const LargeButtonText = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: '50px',
  color: '#fff',
  position: 'relative',
  zIndex: '10',
  [theme.breakpoints.down(1700)]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down(1500)]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down(1280)]: {
    fontSize: '25px',
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down(768)]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down(576)]: {
    fontSize: '13px',
  },
}));

const Star = styled(Image)(({ theme }) => ({
  display: 'block',
  width: '47px',
  height: '47px',
  objectFit: 'cover',
  [theme.breakpoints.down(1700)]: {
    width: '40px',
    height: '40px',
  },
  [theme.breakpoints.down(1500)]: {
    width: '38px',
    height: '38px',
  },
  [theme.breakpoints.down(1280)]: {
    width: '30px',
    height: '30px',
  },
  [theme.breakpoints.down(1024)]: {
    width: '26px',
    height: '26px',
  },
  [theme.breakpoints.down(768)]: {
    width: '18px',
    height: '18px',
  },
}));

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const { ref, scaleStar } = useControlButton({ type: 'large' });

  return (
    <LargeButton
      onMouseLeave={scaleStar}
    >
      <LargeButtonBox>
        <Star
          ref={ref}
          src={star}
          width={47}
          height={47}
          alt="star"
        />
        <LargeButtonText>{text}</LargeButtonText>
        <Star
          src={star}
          width={47}
          height={47}
          alt="star"
        />
      </LargeButtonBox>
    </LargeButton>
  )
}

export default Button
