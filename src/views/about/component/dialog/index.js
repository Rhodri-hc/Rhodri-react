import React , {Component} from 'react';
import { connect } from "react-redux"; 
// import Typed from 'typed.js';
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
                    {this.mySay(this.props.myPreMsg)}
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