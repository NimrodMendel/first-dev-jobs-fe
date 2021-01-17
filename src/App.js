import './App.css';
import NavBar from './Component/NavBar';
import 'rsuite/lib/styles/index.less';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  const size = useWindowSize();
    

    return (
    <>
    <div>Current window width: {size.width}</div>
    <Router>
        <Switch>
          <Route exact path="/">
          <NavBar/>
          </Route>
          <Route path="/myprofile">
          <NavBar/>
          </Route>
          <Route path="/dashboard">
          <NavBar/>
          </Route>
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


