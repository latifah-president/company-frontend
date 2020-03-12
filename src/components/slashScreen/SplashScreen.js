import React from 'react';
import Overlay from '../../container/Overlay'
// import {  HomeWrapper, Tag, TagLineContent} from './../../Global_Styles/global-styles';
import { HomeWrapper, Tag, TagLineContent} from './splashScreen-styles';
import './splashScreen.css';

const LandingPage = () => {
    return (
    <HomeWrapper>
          <Tag>
            <TagLineContent>We Build</TagLineContent>
            <TagLineContent bottom id='bottom' ></TagLineContent>
           

        </Tag>

        {/* OLD SITE */}
            {/* <div className='cf'>
                
                <img className="bottom" src={require("./../../assets/austin-skyline.png" )} alt='Austin Skyline'/>
              
                    <img className="top" src={require("./../../assets/future-cityscape.png" )} alt='Future City'/>
             
                <Overlay/>
            </div> 
      

        <header className='content'>
            <h1 className='content_title'>Cloud5 Innovation <br/> <span className='content_tag'>Creating the future.</span></h1>
            <h4 className='content_body'>
            Welcome to the first, and the only <br/> Digital Innovation Agency in the world. 
            <br/>Let’s build something amazing together.
            </h4>
            <a href='/contact' className='content_cta-btn'>Let's Get Started</a>
        </header> */}

    </HomeWrapper>
    )
}


export default LandingPage;


