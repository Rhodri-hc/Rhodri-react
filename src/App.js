import React, { Component, Fragment } from "react";
import About from './views/about/About';
import './App.css';
import { Globalstyle } from './style'

class App extends  Component {
  render(){
    return (
      <Fragment>
        <Globalstyle />
          <div className='about'>
            <About  />
          </div>
          <footer className='footer'>
            <center className='footer-creater'>
              <span className='footer-creater-left'>Crafted with</span>
              <i className='footer-heart'></i> 
              <span className='footer-creater-right'>by Rhodri</span>
            </center>
          </footer>
      </Fragment>
    )
  }
} 

export default App;
