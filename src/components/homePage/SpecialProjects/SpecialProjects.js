import React from 'react';
import {
    Wrapper, 
    ContentArea, 
    DarkTitle, 
    LightText, 
    SmallImageCard,
} from './../../../Global_Styles/global-styles';

const SpecialProjects = () => {
    return (
        <Wrapper>
            <ContentArea>
                <header>
                    <DarkTitle>Upcoming Special Projects</DarkTitle>
                </header>
                    <ContentArea horizontal reverse>
                        <LightText>
                                Most Agencies only provide marketing, most development firms only provide development.
                                We call ourselves a digital Innovation agency because we do everything!
                                We don’t just work with clients we have our own ideas.
                        </LightText>
                        <SmallImageCard src={require('./../../../assets/saveenah_wireframe.jpg')} alt='Saveenah Wireframe'/>
                    </ContentArea>
            </ContentArea>
        </Wrapper>
    )
};

export default SpecialProjects;