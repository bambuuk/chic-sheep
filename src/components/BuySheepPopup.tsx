import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import Image from "next/image";
import { stareSheep } from "@/assets/data";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "50px",
    border: "1px solid #4f4f4f",
    background: "#090909",
    maxWidth: "none",
    maxHeight: "none",
    padding: "60px 45px 90px 45px",
    margin: 0,
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
    right: "41px",
    top: "30px",
    "& svg": {
      width: "28px",
      height: "28px",
    },
  },
  [theme.breakpoints.down(400)]: {
    right: "30px",
    top: "30px",
  },
}));

const Wrapper = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
}));

const SheepImgList = styled(Box)(({}) => ({
  display: "flex",
  "& > :not(:first-child)": {
    marginLeft: "-34px",
  },
}));

const SheepImgBox = styled(Box)(({}) => ({
  width: "116px",
  height: "117px",
  borderRadius: "100px",
  overflow: "hidden",
  border: "2px solid #4f4f4f",
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": {
    border: "2px solid #fbb41a",
  },
}));

const SheepImg = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

interface BuySheepPopupProps {
  onCloseModal: () => void;
  isModalOpen: boolean;
}

export default function BuySheepPopup({
  onCloseModal,
  isModalOpen,
}: BuySheepPopupProps) {
  return (
    <>
      <BootstrapDialog
        onClose={onCloseModal}
        aria-labelledby="customized-dialog-title"
        open={isModalOpen}
      >
        <CustomIconButton aria-label="close" onClick={onCloseModal}>
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
          <Wrapper>
            <SheepImgList>
              {stareSheep.map(({ img, title }, index) => {
                return (
                  <SheepImgBox
                    key={title}
                    sx={{
                      position: "relative",
                      zIndex: `${100 - index}`,
                    }}
                  >
                    <SheepImg src={img} width={116} height={117} alt="Sheep" />
                  </SheepImgBox>
                );
              })}
            </SheepImgList>
          </Wrapper>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
