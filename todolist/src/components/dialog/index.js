import React from 'react';
import './index.css'
import Typed from 'typed.js';

var options = {
    strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
    typeSpeed: 40
}
  
new Typed(".element", options);

function Dialog() {
    return (
        <div className='dialog'>
            <center>
                <h4>与<i className='dialog-name'>Rhodri</i>对话中...</h4>
            </center>
            <div >
            <span className='element'></span>
            </div>
        </div>
    )
}


export default Dialog;