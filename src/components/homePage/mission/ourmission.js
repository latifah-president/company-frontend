import React from 'react';
import { MissionWrapper, MissionContent, MissionTitle, MissionHeader, MissionText, MissionImage, } from './ourMission-styles';

const OurMission = () => {
    return (
        <MissionWrapper>
            <MissionContent>
                <MissionHeader>
                    <MissionTitle>Our Mission</MissionTitle>
                </MissionHeader>
                <MissionText>
                        Cloud5 was created by innovative and creative thinkers that wanted to mesh the freelance market with the large scale reach of a corporation.
                </MissionText>
                <MissionText>
                    Insuring that when our clients trust us with their projects, it feels like they are trusting a friend, and a partner, 
                    while also obtaining the power of working with a team of experienced developers and problem solvers.
                    Founded in February 2018 by Dailan Cooper and Arielle Felix. Cloud5 has grown into a fast paced, 
                    creative, and multifaceted platform where backyard barbecue ideas become reality.
                </MissionText>
            </MissionContent>
            <MissionImage>content</MissionImage>
        </MissionWrapper>
        
    )
}

export default OurMission;