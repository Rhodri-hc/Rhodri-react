import React , {Component} from 'react'; 
// import Typed from 'typed.js';
import './index.css';
import {
    DialogContent,
    DialogWith,
    DialogContainer,
    MessageMyself,
    MySays,
    MySaysContent,
    ActionContent,
    ActionButton
} from './style'

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
        <DialogContent>
            <center>
                <h4>與
                    <DialogWith>Rhodri</DialogWith>
                    對話中...
                </h4>
            </center>
            <DialogContainer>
                <MessageMyself>
                    {this.mySay(this.myPreMsg)}
                </MessageMyself>
                <ActionContent>
                    <ActionButton> 然後呢？ 😃</ActionButton>
                    <ActionButton> 少廢話！ 🙄</ActionButton>
                </ActionContent>
                <div className='dialog-message__youself'></div>
            </DialogContainer>
        </DialogContent>
        )
    }
    
    mySay(msgs) {
        return msgs.map(item =>{
            return(
                <MySays key={item.id}>
                    <MySaysContent>
                        <span>{item.msg}</span>
                    </MySaysContent>
                </MySays>
            )
        })
    }

}



export default Dialog;