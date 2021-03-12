import React , {Component} from 'react';
import { Title } from "../../components/style"

class Home extends Component {
    render() {
        return(
            <div className="relative pt-14">
                <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-0 mx-auto">
                   <Title>文章</Title>

                   <div className="flex flex-col items-center mt-16">
                       <div className="rounded-lg h-56 w-9/12 shadow-lg  cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition duration-700 ease-in-out"></div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Home;