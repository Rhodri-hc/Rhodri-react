import React, { Component } from "react";
import { TitleNav } from './style'


class Header extends Component {
    render(){
        return(
            <div className="fixed z-10 w-full h-16 bg-gray-200 bg-opacity-75 flex items-center">
            <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-0 mx-auto text-red-900 flex items-center justify-between ">
              <i className="inline-block text-base sm:text-lg md:text-xl lg:text-2xl">
                Rhodri's Blog
              </i>
  
              <div className="flex mr-1 sm:mr-1 md:mr-4 text-xs sm:text-sm  md:text-base">
                <div className=" flex flex-col mr-3 sm:mr-3 md:mr-6 cursor-pointer">
                  <TitleNav >文章</TitleNav>
                  <span className="text-red-800">ARTICLE</span>
                </div>
                <div className=" flex flex-col mr-3 sm:mr-3 md:mr-6 cursor-pointer">
                  <TitleNav>關於</TitleNav>
                  <span className="text-red-800">ABOUT</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Header;