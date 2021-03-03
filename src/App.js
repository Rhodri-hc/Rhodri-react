import React, { Component } from "react";
import About from './views/about/About';
import { CreaterHeart, Ultraman } from './style'
import Draggable from 'react-draggable';
import "./styles/tailwind.css";

class App extends Component {
  render(){
    return (
      <div className="font-sans">
        <div>
          <About  />
        </div>
        
        <Draggable 
          handle=".handle" 
          defaultPosition={{x: 0, y: 0}} 
          position={null} grid={[25, 25]} 
          scale={1} 
        > 
          <Ultraman className="handle w-20 h-20 bg-contain rounded-full border-2 border-gray-400 shadow-xl cursor-pointer inline-block"></Ultraman> 
        </Draggable>


        <div className="fixed inset-x-0 bottom-3 text-sm inline-flex justify-center">
            <span className="pr-2">Crafted with</span>
            <CreaterHeart /> 
            <span className="pl-2">by Rhodri</span>
          
        </div>
      </div>
    )
  }
} 

export default App;
