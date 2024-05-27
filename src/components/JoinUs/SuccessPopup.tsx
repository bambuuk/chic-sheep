"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
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
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpenPopup}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
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
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
