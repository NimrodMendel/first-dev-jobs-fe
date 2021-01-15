import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Grow from "@material-ui/core/Grow";

import { Link } from "react-router-dom";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import { validatePasswords } from "../lip/api";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);

  const classes = useStyles();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      userEmail,
      userPassword,
    };
    const isPasswordsInvalid = await validatePasswords(
      newUser,
      userPasswordConfirmation
    );
    console.log("isPasswordsInvalid :>> ", isPasswordsInvalid);

    if (isPasswordsInvalid) {
      setPasswordErrorMessage(isPasswordsInvalid);
      setIsPasswordError(true);
      return;
    } else {
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid container justify="flex-end" alignItems="center">
        Home
        <Link to="/">
          <HomeTwoToneIcon style={{ fontSize: 40 }} />
        </Link>
      </Grid>
      <CssBaseline />

      <Snackbar
        open={isPasswordError}
        autoHideDuration={3000}
        // onClose={setIsPasswordError(false)}
        TransitionComponent={Grow}
        message={passwordErrorMessage}
        // key={state.Transition.name}
      />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handelSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="user Name"
                name="userName"
                autoComplete="userName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  setUserPasswordConfirmation(e.target.value);
                }}
                variant="outlined"
                required
                fullWidth
                name="password confirmation"
                label="Password Confirmation"
                type="password"
                id="passwordConfirmation"
                autoComplete="passwordConfirmation"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <div>
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
