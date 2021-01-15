import './App.css';
import Main from './Component/Main';
import 'rsuite/lib/styles/index.less';
import React from 'react';
import MyProfile from './Component/myprofile/myProfile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    this.handleResize = this.handleResize.bind(this);

  }

 handleResize (e){
  this.setState({ windowWidth: window.innerWidth });
 };

 componentDidMount() {
  window.addEventListener("resize", this.handleResize);
 }

 componentWillUnmount() {
  window.addEventListener("resize", this.handleResize);
 } 
  render(){
    const { windowWidth } = this.state; 
    return (
    <>
    <div>Current window width: {windowWidth}</div>
    <Router>
        <Switch>
          <Route exact path="/">
          <Main/>
          </Route>
          <Route path="/myprofile">
            <MyProfile/>
          </Route>
          <Route path="/dashboard">
            
          </Route>
        </Switch>
    </Router>
   
    </>
       
    );
  }
  
}

export default App;
