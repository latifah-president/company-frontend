import React from 'react';
import {
    Wrapper, 
    Content, 
    DarkTitle, 
    LightText, 
    ThreeByThreeSec, 
    CardImage, 
    CardContent, 
    Card, 
    SmallSubTitle
} from './../../../global-styles';

const SpecialProjects = () => {
    return (
        <Wrapper>
            <Content>
                <header>
                    <DarkTitle>Upcoming Special Projects</DarkTitle>
                </header>
                
                        <LightText>
                            Most Agencies only provide marketing, most development firms only provide development.
                            We call ourselves a digital Innovation agency because we do everything!
                            We don’t just work with clients we have our own ideas.
                        </LightText>

                        <ThreeByThreeSec>
                            <Card>
                                <CardImage src={require('./../../../assets/saveenah_wireframe.jpg')} alt='Saveenah Wireframe'/>
                            </Card>
                            <Card>
                                <CardContent>
                                    <SmallSubTitle>Cloud5 Hub</SmallSubTitle>
                                    <LightText style={{width: '70%'}}>
                                        Cloud5 has partnered up with Saveenah, a womens online clothing store. 
                                        Our aim is to build a platform that can empower other small businesses 
                                        to flex their reach and create their own marketplace.
                                    </LightText>
                                </CardContent>
                            </Card>
                        </ThreeByThreeSec>
        
            </Content>
        </Wrapper>
    )
};

export default SpecialProjects;