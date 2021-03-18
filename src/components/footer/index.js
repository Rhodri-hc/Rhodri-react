import React, { Component } from "react";
import { CreaterHeart } from './style'


class Footer extends Component {
    constructor(){
        super();

        // 修改自定义方法中的this指向
        this.getNowYearMonth = this.getNowYearMonth.bind(this)
    }
    // 获取当前年月
    getNowYearMonth(){
        const nowDate = new Date();
        const year = nowDate.getFullYear();
        const month = nowDate.getMonth() + 1;
        
        
        return month < 11 ? `${year}.0${month}` : `${year}.${month}`
    }

    render(){
        return(
            <div className="fixed inset-x-0  bottom-3 flex flex-col items-center text-sm opacity-75 ">
                <div className="relative inline-flex justify-center">
                    <span className="pr-2">Crafted With</span>
                    <CreaterHeart /> 
                    <span className="pl-2">BY Rhodri</span>
                </div>
                <h5 className="pt-1 pl-4">2021.01 - {this.getNowYearMonth()}</h5>
            </div>
        )
    }
}

export default Footer;