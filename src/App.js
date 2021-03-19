import React, { Component } from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import "./styles/tailwind.css";
import {  Ultraman  } from './style'
import About from './views/about';
import Article from './views/article';
import Home from './views/home';
import Footer from "./components/footer";
import Header from "./components/header";
import Draggable from 'react-draggable';


class App extends Component {
  render(){
    return (
      <div className="font-sans">
        <Header />

        <BrowserRouter>
          <div>
            <Route path='/' exact render={()=><Home />}></Route>
            <Route path='/article' exact render={()=><Article />}></Route>
            <Route path='/about' exact render={()=><About  />}></Route>
          </div>
        </BrowserRouter>
        
        <Draggable 
          handle=".handle" 
          defaultPosition={{x: 0, y: 0}} 
          position={null} 
          grid={[25, 25]} 
          scale={1} 
        > 
          <Ultraman className="handle  z-20 w-12 md:w-16 h-12 md:h-16 fixed inset-y-0 left-0 bg-contain rounded-full border-2 border-gray-400 shadow-xl cursor-pointer inline-block"></Ultraman> 
        </Draggable>

        <Footer />

      </div>
    )
  }
} 

export default App;
