import React , {Component} from 'react';
import { Title } from "../../components/style";
import { OmitP } from "./style";
import imgUrl from "../../assets/images/qi.jpg"

class Home extends Component {
    render() {
        return(
            <div className="relative pt-14">
                <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-0 mx-auto">
                   <Title>文章</Title>

                   <div className="flex flex-col items-center mt-10 lg:mt-16">
                       <div className="flex rounded-lg overflow-hidden  h-48 lg:h-56  w-full  md:w-10/12 lg:w-9/12 shadow-lg  cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition duration-700 ease-in-out">
                           <img className="inset-0 w-1/2 h-full object-cover" alt="" src={imgUrl} />
                           <div className="p-6 md:p-8 text-xs lg:text-sm">
                              <p className="text-sm sm:text-lg md:text-xl font-medium pb-4">让生活过得更好</p> 
                              <OmitP className="text-gray-500">一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好一定要让生活变得更好</OmitP>
                              <div className="flex items-center  justify-between  px-0 lg:px-2 pt-7"> 
                                  <span className="rounded-full py-0 lg:py-1  px-1 lg:px-2 border border-red-300 text-red-300">生活向</span>
                                  <span className="text-red-900">2021.03.15</span>
                              </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Home;