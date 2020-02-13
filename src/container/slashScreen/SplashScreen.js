import React from 'react';
import Overlay from './../Overlay';
import {  HomeWrapper, } from './splashScreen-styles';
import './splashScreen.css';

const LandingPage = () => {
    return (
    <HomeWrapper>
            <div className='cf'>
                <img className="bottom" src={require("./../../assets/austin-skyline.png" )} alt='Austin Skyline'/>
                <img className="top" src={require('./../../assets/future-cityscape.png')} alt='Future City'/>
                <Overlay/>
            </div> 
        <header className='content'>
            <h1 className='content_title'>Cloud5 Innovation <br/> <span className='content_tag'>Creating the future.</span></h1>
            <h4 className='content_body'>
            Welcome to the first, and the only Digital Innovation Agency in the world. 
            <br/>Let’s build something amazing together.

                {/* Welcome to the most innovative Digital Creations Agency in the US. 
            <br/> We’re creating the future. */}
            {/* If you have a creative and innovative mind, and you’re  ready 
            to <br/> build something amazing.You’ve come to the right place. <br/>
            Welcome to the most innovative Creation Agency in the U.S. We’re creating the future. */}
            </h4>
            <a href='/contact' className='content_cta-btn'>Let's Get Started</a>
        </header>
    </HomeWrapper>
    )
}


export default LandingPage;


