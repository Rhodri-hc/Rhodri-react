import React , {Component} from 'react';
import { Provider } from "react-redux";
import  store  from "../../store";
import Dialog from './component/dialog/index';
import {
    Swapper,
    AboutTitle,
    AboutMeet,
    UpdatedTime
} from './style'

class About extends Component {
    render() {
        return(
          <div className="relative">
            <Swapper className="absolute top-0 right-0 flex items-center justify-center w-full h-56">
                <p data-text="HI,RHODRI!" className="text-gray-900 text-4xl tracking-wide font-bold">HI,RHODRI!</p>
            </Swapper>
            <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-9/12 xl:w-8/12 my-0 mx-auto">
                <AboutTitle>關於</AboutTitle>
                <center>茫茫人海 
                    <AboutMeet>遇見你</AboutMeet> 
                    真好
                </center>
                <Provider store={ store }>
                    <Dialog />
                </Provider>
                <center>
                    <UpdatedTime>Last updated in Jan. 20, 2021</UpdatedTime>
                </center>
            </div>
          </div>
        )
    }
}

export default About;