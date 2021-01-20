import React , {Component} from 'react';
import Dialog from './component/dialog/index';
import './about.css'

class About extends Component {
    
    render() {
        return(
            <div className='about-content'>
                <h3 className='about-content__title'>關於</h3>
                <center>茫茫人海 <span className='about-content__meet'>遇見你</span> 真好</center>
                <Dialog />
                <center>
                    <i className='about-content__time'>Last updated in Jan. 20, 2021</i>
                </center>
            </div>
        )
    }
}

export default About;