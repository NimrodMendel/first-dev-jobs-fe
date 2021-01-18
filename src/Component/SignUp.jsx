import React, { useState } from "react";
import ReactModal from "react-modal";

//material-ui - start

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
//material-ui - end

import Login from "./Login";
import { signUpNewUser } from "../lip/api";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [role, setRole] = useState("Employee");
  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };

  const classes = useStyles();

  const handelSubmit = async (e) => {
    e.preventDefault();
    let newUserObject;
    if (role === "Employee") {
      newUserObject = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        role,
      };
    } else {
      newUserObject = {
        companyName,
        email,
        password,
        phoneNumber,
        role,
      };
    }
    console.log("password :>> ", password);

    console.log("passwordConfirmation :>> ", passwordConfirmation);

    const isPasswordsInvalid = await validatePasswords(
      newUserObject,
      passwordConfirmation
    );
    console.log("isPasswordsInvalid :>> ", isPasswordsInvalid);
    if (isPasswordsInvalid) {
      setPasswordErrorMessage(isPasswordsInvalid);
      setIsPasswordError(true);
      return;
    } else {
      const signUpResult = await signUpNewUser(newUserObject);
      console.log("signUpResult :>> ", signUpResult);
    }
  };

  return (
    <>
      <Button style={{ color: "white" }} onClick={openModel}>
        Sign Up
      </Button>

      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button style={{ color: "red" }} onClick={closeModel}>
          {" "}
          close
        </Button>

        <Container component="main" maxWidth="xs">
          <CssBaseline />

          <Snackbar
            open={isPasswordError}
            autoHideDuration={3000}
            message={passwordErrorMessage}
          />

          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={handelSubmit}>
              <RadioGroup
                style={{ justifyContent: "center" }}
                defaultValue="Employee"
                row
                required
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <FormControlLabel
                  style={{ justifyContent: "center" }}
                  value="Employee"
                  control={<Radio color="primary" />}
                  label="private user"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Employer"
                  control={<Radio color="primary" />}
                  label="company"
                  labelPlacement="top"
                />
              </RadioGroup>
              <Grid container spacing={2}>
                {role === "Employee" ? (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        autoComplete="firstName"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lastName"
                      />
                    </Grid>{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <Grid item xs={12} sm={12}>
                      <TextField
                        onChange={(e) => {
                          setCompanyName(e.target.value);
                        }}
                        variant="outlined"
                        required
                        fullWidth
                        id="companyName"
                        label="Company Name"
                        name="companyName"
                        autoComplete="companyName"
                      />
                    </Grid>{" "}
                  </>
                )}

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => {
                      setEmail(e.target.value);
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
                      setPhoneNumber(e.target.value);
                    }}
                    variant="outlined"
                    required
                    fullWidth
                    id="phoneNumber"
                    type="tel"
                    label="Phone Number"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => {
                      if (isPasswordError) {
                        setIsPasswordError(false);
                      }
                      setPassword(e.target.value);
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
                      if (isPasswordError) {
                        setIsPasswordError(false);
                      }
                      setPasswordConfirmation(e.target.value);
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
            </form>
          </div>
        </Container>
      </ReactModal>
    </>
  );
}
