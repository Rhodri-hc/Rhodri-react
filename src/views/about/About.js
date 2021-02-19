import React , {Component} from 'react';
import Dialog from './component/dialog/index';
import {
    AboutContent,
    Swapper,
    HIRhodri,
    AboutBlock,
    AboutTitle,
    AboutMeet,
    UpdatedTime
} from './style'

class About extends Component {
    render() {
        return(
          <AboutContent>
            <Swapper>
                <HIRhodri>HI,RHODRI!</HIRhodri>
            </Swapper>
            <AboutBlock>
                <AboutTitle>關於</AboutTitle>
                <center>茫茫人海 
                    <AboutMeet>遇見你</AboutMeet> 
                    真好
                </center>
                <Dialog />
                <center>
                    <UpdatedTime>Last updated in Jan. 20, 2021</UpdatedTime>
                </center>
            </AboutBlock>
          </AboutContent>
            
        )
    }
}

export default About;