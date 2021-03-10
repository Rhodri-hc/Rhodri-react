import React , {Component} from 'react';
import { Provider } from "react-redux";
import  store  from "../../store";
import Dialog from './component/dialog/index';
import { Title } from "../../components/style"
import { Swapper } from './style'

class About extends Component {
    render() {
        return(
          <div className="relative pt-14">
            <Swapper className="absolute top-0 right-0 flex items-center justify-center w-full h-56">
                <p data-text="HI,RHODRI!" className="text-gray-900 text-4xl tracking-wide font-bold">HI,RHODRI!</p>
            </Swapper>
            <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-0 mx-auto">
                <Title>關於</Title>
                <center>茫茫人海 
                    <span className=" inline-block pt-40 px-1 pb-2 ">遇見你</span> 
                    真好
                </center>
                <Provider store={ store }>
                    <Dialog />
                </Provider>
                <center>
                    <i className=" inline-block mt-8 mb-12">Last updated in Jan. 20, 2021</i>
                </center>
            </div>
          </div>
        )
    }
}

export default About;