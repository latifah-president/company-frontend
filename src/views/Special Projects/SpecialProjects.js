import React from 'react';
import LazyLoad from 'react-lazy-load';
import Aux from './../../HOC/Aux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTwitter, faLinkedinIn, faGithub, faFacebookF} from '@fortawesome/fontawesome-free-brands';
import {
    Wrapper, 
    ImageHeader, 
    Content, DarkTitle,
    LightText,
    HeaderImage,
    OverlayLight,
    SmallSubTitle,
} from './../../global-styles';


const SpecialProjects = () => {
    return (
        <Aux>
            <ImageHeader >
                <OverlayLight></OverlayLight>
                <LazyLoad  
                    debounce={false}
                    offsetVertical={500}>
                        <HeaderImage src={require('./../../assets/about_image.jpg')} alt='Special Projects'/>
                </LazyLoad>
            </ImageHeader>
                <Wrapper>
                    <Content>
                        <header>
                            <DarkTitle>Welcome To Our Special Projects Division</DarkTitle>
                        </header>
                        <LightText>
                        Most Agencies only provide marketing, most development firms only provide development.
  We call ourselves a digital Innovation agency because we do everything!!!!
  But we don’t just work with clients we have our own ideas. And what better way to show clients how successful we can make them then to build our own projects, who needs case studies when you can have real time examples. We’re super excited for the world to see our ideas. We have the the developers, we have the marketers... honestly why wouldn’t we?
  Check out some of the projects we’re currently working on. All projects under our special projects devision are Cloud5 concepts.  We’ve found ways to innovate on a whole new level and we cant wait for you to see what we have cooking.

                        </LightText>
                        <SmallSubTitle>What We Focus On</SmallSubTitle>
                        <LightText>
                            When we build a project for ourselves we like to focus on a few details to really insure we stand out, because if you haven’t noticed already. We’re super unique. 
                        </LightText>

                        <SmallSubTitle>Accessibility</SmallSubTitle>
                        <LightText>
                        All of our special projects focus on accessibility first. 
                        Our main mission with our projects is to insure that anyone and everyone can access them. All of our developers are skilled at screen reader optimization, 
                        and we try to makes sure that everything is easy to understand and navigate.
                        </LightText>
                        <SmallSubTitle>People First</SmallSubTitle>
                        <LightText>
                        The problem with most apps and software is that they don’t take into consideration 
                        all aspects of how they are used in everyday life. Real time experience is much different than any testing you can do. We try our best to look at all of our projects from the consumers point of view first. Because if our projects are the most accessible, and the most user friendly and easy to use. 
                        People will choose our products first. Every time.
                        </LightText>
                        <SmallSubTitle>Game Changing Ideas</SmallSubTitle>
                        <LightText>
                        When ever we build something. We pack all the ideas we know we would want to see as a 
                        consumer into them. We like to take our projects in a direction that should be a know brainer with most developers, but... In most cases, the focus is to follow the mold. Build what works, we don’t ever follow a mold. Our slogan isn’t 
                        “Creating The Future” for nothing. We really mean that.
                        </LightText>
                        <SmallSubTitle>Have An Idea?</SmallSubTitle>
                        <LightText>
                        If you’re interested in partnering up with us, or if you have some ideas to help us make our projects even better than they already are please reach out to our CTO, we’re always open to suggestions.
  latifah@cloud5hub.io
                        </LightText>
                        {/* <LightText>
                            Most Agencies only provide marketing, most development firms only provide development.
                            We call ourselves a digital Innovation agency because we do everything!!!!
                            But we don’t just work with clients we have our own ideas. And what better way to show clients how successful we can make them then to build our own projects, 
                            who needs case studies when you can have real time examples. We’re super excited for the world to see our ideas. We have the the developers, we have the marketers... honestly why wouldn’t we?
                            <br/>
                            Check out some of the projects we’re currently working on. All projects under our special projects devision are Cloud5 concepts.  
                            We’ve found ways to innovate on a hole other level and we cant wait for you to see what we have cooking.
                            What We Focus On.
                           
     
                        </LightText> 
                        <LightText>
                            When we build a project for ourselves we like to focus on a few details to really insure we stand out, because if you haven’t noticed already. We’re super unique. Accessibility. All of our special projects focus on accessibility first. Our main mission with our projects is to insure that anyone and everyone can access them. All of our developers are skilled at screen reader optimization, and we try to makes sure that everything is easy to understand and navigate.
                            People First. The problem with most apps and software is that they don’t take into consideration all aspects of how they are used in everyday life. Real time experience is much different then any testing you can do. We try our best to look at all of our projects from the consumers point of view first. Because if our projects are the most accessible, and the most user friendly and easy to use. People will choose our products first. Every time.
                            Game Changing Ideas.  When ever we build something. We pack all the ideas we know we would want to see as a consumer into them. We like to take our projects in a direction that should be a know brainer with most developers, but... In most cases, the focus is to follow the mold. Build what works, we don’t ever follow a mold. Our slogan isn’t “Creating The Future” for nothing. We really mean that.
                            If you’re interested in partnering up with us, or if you have some ideas to help us make our projects even better then they already are. Please reach out to our CTO we’re always open to suggestions.
                            Latifah@cloud5hub.io
                        </LightText>                                */}
                    </Content>                   
                </Wrapper>
        </Aux>
    )
}

export default SpecialProjects;

