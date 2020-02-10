import React from 'react';
import { FeaturedWrapper, FeaturedContent, FeaturedTitle, FeatureCardArea,  Card, Overlay, CardBackground, CardContent, ProjectTitle, ProjectText, } from './featuredClients-styles';

const FeaturedClients = () => {
    return (
        <FeaturedWrapper>
            <FeaturedContent>
                <header>
                    <FeaturedTitle>Featured Clients</FeaturedTitle>
                </header>
            </FeaturedContent>
            <FeatureCardArea>
                <Card>
                    <Overlay></Overlay>
                    <CardBackground src={require('./../../../assets/excercise2.jpg')} alt='ReVision Training with Tyler Merren'/>
                    <CardContent>
                        <ProjectTitle>ReVision Training with Tyler Merren</ProjectTitle>
                        <ProjectText>
                        Blind and visually impaired people can get expert fitness 
                        and wellness advice from Tyler Merren, a blind Personal Trainer 
                        {/* and Paralympic Athlete. Get clearly described exercises in accessible 
                        formats, nutrition advice, equipment recommendations, a supportive community to encourage you in your fitness goals, and much more!  */}
                        </ProjectText>
                    </CardContent>
                </Card>
                <Card>
                    <Overlay></Overlay>
                    <CardBackground src={require('./../../../assets/client1.jpg')} alt='Client One Placeholder Image'/>
                    <CardContent>
                        <ProjectTitle>Client One</ProjectTitle>
                        <ProjectText>
                        Blind and visually impaired people can get expert fitness 
                        and wellness advice from Tyler Merren, a blind Personal Trainer 
                        {/* and Paralympic Athlete. Get clearly described exercises in accessible 
                        formats, nutrition advice, equipment recommendations, a supportive community to encourage you in your fitness goals, and much more!  */}
                        </ProjectText>
                    </CardContent>
                </Card>
                <Card>
                    <Overlay></Overlay>
                    <CardBackground src={require('./../../../assets/client2.jpg')} alt='Client Two Placeholder Image'/>
                    <CardContent>
                        <ProjectTitle>Client Two</ProjectTitle>
                        <ProjectText>
                        Blind and visually impaired people can get expert fitness 
                        and wellness advice from Tyler Merren, a blind Personal Trainer 
                        {/* and Paralympic Athlete. Get clearly described exercises in accessible 
                        formats, nutrition advice, equipment recommendations, a supportive community to encourage you in your fitness goals, and much more!  */}
                        </ProjectText>
                    </CardContent>
                </Card>
            </FeatureCardArea>
        </FeaturedWrapper>
    )
};

export default FeaturedClients;