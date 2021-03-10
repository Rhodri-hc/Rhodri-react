import React , {Component} from 'react';


class Article extends Component {
    render() {
        return(
            <div className="relative pt-14">
                <div className="w-11/12 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 my-0 mx-auto">
                   <header>
                     <div className="pt-16 mb-16 text-center ">
                       <h5 className="text-red-700 text-lg mb-5"> 
                            March 03, 2021 / 
                            <span className="pointer">生活向</span>
                        </h5>
                       <h1 className="font-bold text-xl">我肯定在几百年前就说过爱你</h1>
                     </div>
                   </header>
                </div>
            </div>
        )
    }
}

export default Article;