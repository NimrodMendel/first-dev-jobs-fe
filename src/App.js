import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Component/Main";
import "rsuite/lib/styles/index.less";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLogin, setIsLogin] = useState(false);

  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  if (isLogin) {
    return (
      <>
        <div>Current window width: {windowWidth}</div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Main isLogin={isLogin} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <div>Current window width: {windowWidth}</div>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/">
              <Main isLogin={isLogin} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { windowWidth: window.innerWidth, isLogin: false };
//     this.handleResize = this.handleResize.bind(this);
//   }

//   handleResize(e) {
//     this.setState({ windowWidth: window.innerWidth });
//   }

//   componentDidMount() {
//     ;
//   }

//   componentWillUnmount() {
//     window.addEventListener("resize", this.handleResize);
//   }
//   render() {
//     const { windowWidth } = this.state;
//     //     <div>Current window width: {windowWidth}</div>

//     let isLogin;
//     if (this.state.isLogin) {
//       isLogin = (
//         <>
//           <Router>
//             <Switch>
//               <Route exact path="/">
//                 <Main isLogin={this.state.isLogin} />
//               </Route>
//             </Switch>
//           </Router>
//         </>
//       );
//     } else {
//       isLogin = (
//         <>
//           <Router>
//             <Switch>
//               <Route exact path="/">
//                 {/* <Login /> */}
//                 <Main isLogin={this.state.isLogin} />
//               </Route>
//               <Route exact path="/Login">
//                 <Login />
//               </Route>
//               <Route path="/SignUp">
//                 <SignUp />
//               </Route>
//             </Switch>
//           </Router>
//         </>
//       );
//     }
//     return (
//       <>
//         <div>Current window width: {windowWidth}</div>
//         {isLogin}
//       </>
//     );
//   }

//   // return (
//   //   <>

//   //
//   //   </>
//   // );
// }

// export default App;
