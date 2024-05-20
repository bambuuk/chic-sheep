import { styled } from "@mui/material";
import Image from "next/image";
import logo from "/public/images/logo.svg";

const LogoUI = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down(1280)]: {
    width: "127px",
    height: "34px",
  },
}));

const Logo = () => {
  return <LogoUI src={logo} width={171} height={50} alt="Logo" />;
};

export default Logo;
