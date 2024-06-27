import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import Image from "next/image";
import { stareSheep } from "@/assets/data";
import { useEffect, useState } from "react";
import { SheepInfoItem } from "./SheepInfoItem";
import { StareSheepInfo } from "@/types/StareSheepInfo";
import { CongratsMessage } from "../CongratsMessage";
import useModalControl from "@/hooks/useModalControl";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    display: "block",
    overflowY: "scroll",
    padding: "215px 0 260px 0",
    [theme.breakpoints.down(1700)]: {
      padding: "150px 0 190px 0",
    },
    [theme.breakpoints.down(1500)]: {
      padding: "130px 0 170px 0",
    },
    [theme.breakpoints.down(1280)]: {
      padding: "120px 0 150px 0",
    },
    [theme.breakpoints.down(1024)]: {
      padding: "40px 0 60px 0",
    },
    [theme.breakpoints.down(576)]: {
      padding: "0",
    },
  },
  "& .MuiDialogContent-root": {
    padding: 0,
  },
  "& .MuiPaper-root": {
    overflow: "hidden",
    margin: "0 auto",
    padding: "60px 45px 90px 45px",
    maxWidth: "1788px",
    maxHeight: "none",
    width: "93.125%",
    borderRadius: "50px",
    border: "1px solid #4f4f4f",
    background: "#090909",
    [theme.breakpoints.down(1700)]: {
      padding: "50px 40px 75px 40px",
    },
    [theme.breakpoints.down(1500)]: {
      padding: "40px 30px 50px 30px",
    },
    [theme.breakpoints.down(1024)]: {
      padding: "130px 50px 100px 50px",
      width: "100%",
      maxWidth: "700px",
    },
    [theme.breakpoints.down(576)]: {
      padding: "116px 30px 50px 30px",
      width: "100%",
      borderRadius: "0",
      border: "none",
    },
    [theme.breakpoints.down(420)]: {
      padding: "110px 20px 45px 20px",
    },
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
  [theme.breakpoints.down(1700)]: {
    right: "40px",
    top: "50px",
  },
  [theme.breakpoints.down(1500)]: {
    right: "30px",
    top: "40px",
  },
  [theme.breakpoints.down(1024)]: {
    top: "50px",
    right: "50px",
    "& path": {
      fill: "#FBB41A",
    },
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

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down(1024)]: {
    alignItems: "center",
  },
}));

const SheepImgList = styled(Box)(({ theme }) => ({
  display: "flex",
  "& > :not(:first-of-type)": {
    marginLeft: "-34px",
  },
  [theme.breakpoints.down(576)]: {
    "& > :not(:first-of-type)": {
      marginLeft: "-20px",
    },
  },
  [theme.breakpoints.down(420)]: {
    "& > :not(:first-of-type)": {
      marginLeft: "-18px",
    },
  },
}));

const SheepImgBox = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down(768)]: {
    width: "100px",
    height: "102px",
  },
  [theme.breakpoints.down(576)]: {
    width: "68px",
    height: "70px",
  },
  [theme.breakpoints.down(420)]: {
    width: "62px",
    height: "62px",
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
  id?: string;
}

export default function BuySheepPopup({
  onCloseModal,
  isModalOpen,
  id,
}: BuySheepPopupProps) {
  const [sheepId, setSheepId] = useState(id ? id : stareSheep[0].id);
  const [sheepInfo, setSheepInfo] = useState<StareSheepInfo[]>(
    stareSheep.filter((item) => item.id === sheepId)
  );
  const {
    isModalOpen: isOpenCongrats,
    onOpenModal: onOpenCongrats,
    onCloseModal: onCloseCongrats,
  } = useModalControl();

  const switchSheep = (id: string) => {
    setSheepId(id);
    setSheepInfo(stareSheep.filter((item) => item.id === id));
  };

  const closePopup = () => {
    onCloseModal();
    setTimeout(() => {
      setSheepId("1");
      setSheepInfo([stareSheep[0]]);
    }, 400);
  };

  useEffect(() => {
    setSheepId(id ? id : stareSheep[0].id);
    setSheepInfo(stareSheep.filter((item) => item.id === sheepId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  useEffect(() => {
    setSheepId(id ? id : stareSheep[0].id);
    setSheepInfo(
      stareSheep.filter((item) => item.id === (id ? id : stareSheep[0].id))
    );
  }, [id]);

  return (
    <>
      <BootstrapDialog
        onClose={closePopup}
        aria-labelledby="customized-dialog-title"
        open={isModalOpen}
      >
        {isOpenCongrats ? (
          <CongratsMessage
            onClose={onCloseCongrats}
            sheepId={sheepId}
            onCloseMainModal={onCloseModal}
          />
        ) : (
          ""
        )}
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
              {stareSheep.map(({ img, id }, index) => {
                return (
                  <SheepImgBox
                    key={id}
                    onClick={() => switchSheep(id)}
                    sx={{
                      position: "relative",
                      zIndex: `${100 - index}`,
                      border:
                        sheepId === id
                          ? "2px solid #fbb41a"
                          : "2px solid #4f4f4f",
                    }}
                  >
                    <SheepImg
                      src={img}
                      width={116}
                      height={117}
                      alt="Sheep"
                      placeholder="blur"
                    />
                  </SheepImgBox>
                );
              })}
            </SheepImgList>

            {sheepInfo.length > 0 && (
              <SheepInfoItem data={sheepInfo} onOpenCongrats={onOpenCongrats} />
            )}
          </Wrapper>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
