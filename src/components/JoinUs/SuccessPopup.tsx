"use client";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import { Box } from "@mui/material";
import { Button, ButtonBox, ButtonText, Star } from "../CustomElements";
import useControlButton from "@/hooks/useControlButton";
import useMediaQuery from "@/hooks/useMediaQuery";

import check from "/public/images/icons/check.svg";
import star from "/public/images/icons/star-22-white.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  "& .MuiPaper-root": {
    borderRadius: "50px",
    border: "1px solid #4f4f4f",
    background: "#090909",
    width: "95%",
    height: "80%",
    maxWidth: "none",
    maxHeight: "none",
  },
  [theme.breakpoints.down(576)]: {
    "& .MuiPaper-root": {
      height: "70%",
    },
  },
}));

const Info = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  [theme.breakpoints.down(1024)]: {
    marginTop: "30px",
  },
}));

const Title = styled("h3")(({ theme }) => ({
  fontFamily: theme.typography.secondFamily,
  fontWeight: 400,
  fontSize: "30px",
  color: "#fff",
  textTransform: "uppercase",
  [theme.breakpoints.down(576)]: {
    fontSize: "20px",
  },
}));

const Overview = styled("p")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: 300,
  fontSize: "28px",
  textAlign: "center",
  color: "#fff",
  lineHeight: "normal",
  [theme.breakpoints.down(576)]: {
    fontSize: "16px",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: "40px",
  maxWidth: "none",
  borderColor: "#fff",
  padding: "24px 27px",
  width: "auto",
  [theme.breakpoints.up(1024)]: {
    "&:hover span": {
      color: "#090909",
    },
  },
}));

const CustomButtonText = styled(ButtonText)(({ theme }) => ({
  color: "#fff",
  [theme.breakpoints.down(1500)]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down(1024)]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down(576)]: {
    fontSize: "13px",
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: "45px",
  top: "60px",
  "& path": {
    transition: "all 0.4s",
  },
  "&:hover path": {
    fill: "#FBB41A",
  },
  [theme.breakpoints.down(1024)]: {
    right: "50px",
    top: "50px",
  },
  [theme.breakpoints.down(576)]: {
    right: "48px",
    top: "30px",
    "& svg": {
      width: "20px",
      height: "20px",
    },
  },
  [theme.breakpoints.down(400)]: {
    right: "30px",
    top: "30px",
  },
}));

const CheckImg = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down(576)]: {
    width: "30px",
    height: "29px",
  },
}));

interface SuccessPopupProps {
  handleClose: () => void;
  isOpenPopup: boolean;
}

export default function SuccessPopup({
  isOpenPopup,
  handleClose,
}: SuccessPopupProps) {
  const { ref, scaleStar } = useControlButton({ type: "normal" });
  const { isTablet } = useMediaQuery();

  return (
    <Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpenPopup}
      >
        <CustomIconButton aria-label="close" onClick={handleClose}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.84386 29.9845C2.10834 30.0277 1.38499 29.7804 0.826335 29.2945C-0.275445 28.1733 -0.275445 26.3624 0.826335 25.2412L24.9517 0.835037C26.0976 -0.249743 27.8958 -0.189441 28.9681 0.969842C29.9378 2.01818 29.9943 3.62949 29.1004 4.74466L4.83294 29.2945C4.28149 29.7734 3.56974 30.0203 2.84386 29.9845Z"
              fill="#BBBBBB"
            />
            <path
              d="M26.941 29.9845C26.1955 29.9813 25.4811 29.6819 24.9518 29.1508L0.826349 4.74458C-0.194392 3.53872 -0.0556172 1.72397 1.13637 0.691253C2.20025 -0.230418 3.76926 -0.230418 4.83305 0.691253L29.1006 25.0974C30.2462 26.1825 30.3055 28.0017 29.2329 29.1607C29.1902 29.2068 29.1461 29.2514 29.1006 29.2946C28.5063 29.8173 27.7243 30.0671 26.941 29.9845Z"
              fill="#BBBBBB"
            />
          </svg>
        </CustomIconButton>
        <DialogContent>
          <CheckImg width={42} height={41} src={check} alt={"Check Icon"} />
          <Info>
            <Title>Success!</Title>
            <Overview>
              If you&rsquo;re seeing this, then you&rsquo;ve clicked on
              &ldquo;Join community&rdquo;.
              {isTablet ? "" : <br />}
              This is just for example purposes.
            </Overview>
          </Info>

          <CustomButton onMouseLeave={scaleStar} onClick={handleClose}>
            <ButtonBox>
              <Star ref={ref} src={star} width={22} height={22} alt="star" />
              <CustomButtonText>Cool!</CustomButtonText>
              <Star src={star} width={22} height={22} alt="star" />
            </ButtonBox>
          </CustomButton>
        </DialogContent>
      </BootstrapDialog>
    </Fragment>
  );
}
