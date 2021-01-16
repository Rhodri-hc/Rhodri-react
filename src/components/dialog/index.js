import React , {Component} from 'react'; 
// import Typed from 'typed.js';
import './index.css';

// var options = {
//     strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//     typeSpeed: 40
// }
  
// new Typed(".element", options);

class Dialog extends Component {
    constructor(props){
        super(props);
        this.myPreMsg = [
            {msg: 'Hi, there ~', id: 1},
            {msg: '我，張和潮啦', id: 2},
            {msg: '一個愛前端的社畜', id: 3},
        ]
    }

    render(){
        return (
            <div className='dialog'>
            <center>
                <h4>與<i className='dialog-name'>Rhodri</i>對話中...</h4>
            </center>
            <div className='dialog-container'>
                <div className='dialog-message__myself'>
                    {this.mySay(this.myPreMsg)}
                </div>
                <div className='dialog-message--action'></div>
                <div className='dialog-message__youself'></div>
            </div>
        </div>
        )
    }
    
    mySay(msgs) {
        return msgs.map(item =>{
            return(
                <div className='myself-message' key={item.id}>
                    <div className='myself-message-content text'>
                        <span>{item.msg}</span>
                    </div>
                </div>
            )
        })
    }

}



export default Dialog;