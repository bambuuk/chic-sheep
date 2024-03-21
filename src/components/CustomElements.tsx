import { styled } from "@mui/material";

export const CustomContainer = styled('div')({
  margin: '0 auto',
  width: '100%',
  height: '100%',
  maxWidth: '1700px',
  borderLeft: '1px solid #4f4f4f',
  borderRight: '1px solid #4f4f4f',
});

export const Section = styled('section')(({ theme }) => ({
  width: '100%',
  maxWidth: '1920px',
  padding: '0 110px',
  borderBottom: '1px solid #4f4f4f',
  [theme.breakpoints.down("xl")]: {
    padding: "0 50px",
  },
  [theme.breakpoints.down(1280)]: {
    padding: "0 46px",
  },
  [theme.breakpoints.down(768)]: {
    padding: "0 30px",
  },
}));