import React from 'react';
import {Wrapper, Content, DarkTitle, LightText} from './../../../global-styles';
import { MissionWrapper, MissionContent, MissionTitle, MissionHeader, MissionText, MissionImage, } from './ourMission-styles';

const OurMission = () => {
    return (
        <Wrapper>
            <Content>
                <header>
                    <DarkTitle>Our Mission</DarkTitle>
                </header>
                <LightText>
                    Cloud5 was created with the idea that innovative and creative thinkers will change the game. 
                    We wanted to integrate the freelance market with the reach and capabilities of a corporation. 
                    The success of our company is shown with the success of the clients we serve, and we don’t stop until its perfect!

                </LightText>
            </Content>
        </Wrapper>
        
    )
}

export default OurMission;