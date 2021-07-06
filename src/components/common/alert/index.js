import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import "./index.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
    position: "relative",
    left: "240px !important",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },

    rootSuccess: {
      right: "10% !important",
    },
    rootDanger: {
      left: "10% !important",
    },
    [theme.breakpoints.down("xs")]: {
      left: "0px !important",
      marginTop: "15px !important",
    },
  },
}));

export default function SnackbarAleart({
  warningShow,
  warnigMessage,
  handleClose,
}) {
  const classes = useStyles();

  return (
    <div className='d-flex justify-content-center'>
      <Snackbar
        className={classes.root}
        open={warningShow}
        autoHideDuration={100}
        onClick={handleClose}
      >
        <Alert severity='error' onClick={handleClose}>
          {warnigMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
