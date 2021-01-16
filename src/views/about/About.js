import React , {Component} from 'react';
import Dialog from '../../components/dialog/index';
import './about.css'

class About extends Component {
    
    render() {
        return(
            <div className='about-content'>
                <h3 className='about-content__title'>關於</h3>
                <center>茫茫人海 <span className='about-content__meet'>遇見你</span> 真好</center>
                <Dialog />
            </div>
        )
    }
}

export default About;