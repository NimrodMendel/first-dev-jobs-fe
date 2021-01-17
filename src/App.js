import "./App.css";
import Main from "./Component/Main";
import "rsuite/lib/styles/index.less";
import React, { useState, useEffect } from "react";
import MyProfile from "./Component/myprofile/myProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
export default function App() {
  const size = useWindowSize();

  return (
    <>
      <div>Current window width: {size.width}</div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    </>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
