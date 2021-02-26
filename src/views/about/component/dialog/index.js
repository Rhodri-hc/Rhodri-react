import React , {Component} from 'react';
import { connect } from "react-redux"; 
// import Typed from 'typed.js';
import {
    DialogContent,
    MySays,
    ActionButton
} from './style'

// var options = {
//     strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//     typeSpeed: 40
// }
  
// new Typed(".element", options);

class Dialog extends Component {
    render(){
        return (
        <DialogContent className="md:w-4/5 mx-auto bg-gray-300 bg-opacity-25 rounded-md p-2">
            <center>
                <h4>與
                    <i className="inline-block px-2 mt-2">Rhodri</i>
                    對話中...
                </h4>
            </center>
            <div className="text-xs sm:text-xs md:text-base  w-full h-full overflow-y-auto overflow-x-hidden">
                <div className="py-3 md:pl-3">
                    {this.mySay(this.props.myPreMsg)}
                </div>
                <div className="py-3 pr-3 md:pr-5 text-right">
                    <ActionButton className="py-1 md:py-2 px-2 md:px-3"> 然後呢？ 😃</ActionButton>
                    <ActionButton className="py-1 md:py-2 px-2 md:px-3"> 少廢話！ 🙄</ActionButton>
                </div>
                <div className='dialog-message__youself'></div>
            </div>
        </DialogContent>
        )
    }
    
    mySay(msgs) {
        return msgs.map(item =>{
            return(
                <MySays className="m-2" key={item.id}>
                    <div className="max-w-3/4 inline-block py-2 px-4 rounded-lg text-gray-700 bg-gray-200 leading-snug">
                        <span>{item.msg}</span>
                    </div>
                </MySays>
            )
        })
    }

}

const mapStateToProps = (state) => {
    return {
        myPreMsg : state.myPreMsg
    }
}

const mapDispathToProps = (dispath) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispathToProps)(Dialog);