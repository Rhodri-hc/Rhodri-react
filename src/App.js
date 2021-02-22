import React, { Component } from "react";
import About from './views/about/About';
import "./styles/tailwind.css";
import { 
  CreaterHeart
} from './style'

class App extends  Component {
  render(){
    return (
      <div className="font-mono">
        <div>
          <About  />
        </div>
        <div className="fixed inset-x-0 bottom-3 text-sm inline-flex justify-center">
            <span className="-space-x-2">Crafted with</span>
            <CreaterHeart /> 
            <span>by Rhodri</span>
          
        </div>
      </div>
    )
  }
} 

export default App;
