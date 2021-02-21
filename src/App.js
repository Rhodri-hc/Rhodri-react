import React, { Component, Fragment } from "react";
import About from './views/about/About';
import "./styles/tailwind.css";
import { 
  Globalstyle,
  AboutContainer,
  FooterContainer,
  CreaterLeft,
  CreaterRight,
  CreaterHeart
} from './style'

class App extends  Component {
  render(){
    return (
      <Fragment>
        <Globalstyle />
        <AboutContainer>
          <About  />
        </AboutContainer>
        <FooterContainer>
          <center>
            <CreaterLeft>Crafted with</CreaterLeft>
            <CreaterHeart /> 
            <CreaterRight>by Rhodri</CreaterRight>
          </center>
        </FooterContainer>
      </Fragment>
    )
  }
} 

export default App;
