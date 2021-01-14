import './App.css';
import Main from './Component/Main';
import 'rsuite/lib/styles/index.less';
import React from 'react';
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
    <Main/>
    </>
       
    );
  }
  
}

export default App;
