import React, { useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { loginUser } from "../lip/api";
//material-ui - start
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

//material-ui - end

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openModel = () => {
    setIsOpen(true);
  };
  const closeModel = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userType) {
      console.log("must pick user type!");
    } else {
      console.log("userType :>> ", userType);
      console.log("email :>> ", email);
      console.log("password :>> ", password);
      const loginObject = { userType, email, password };
      const loginRsult = await loginUser(loginObject);
    }
  };

  return (
    <>
      <Button style={{ color: "white" }} onClick={openModel}>
        Login
      </Button>

      <ReactModal ariaHideApp={false} isOpen={isOpen}>
        <Button style={{ color: "red" }} onClick={closeModel}>
          close
        </Button>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <RadioGroup
                style={{ justifyContent: "center" }}
                row
                required
                onChange={(e) => {
                  setUserType(e.target.value);
                }}
              >
                <FormControlLabel
                  value="privateUser"
                  control={<Radio color="primary" />}
                  label="private user"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="companyUser"
                  control={<Radio color="primary" />}
                  label="company"
                  labelPlacement="top"
                />
              </RadioGroup>

              <TextField
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <div>
                    Don't have an account <Link to="/SignUp">SignUp</Link>
                  </div>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </ReactModal>
    </>
  );
}
