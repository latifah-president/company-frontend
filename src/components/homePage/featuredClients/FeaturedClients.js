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
                    <CardBackground src={require('./../../../assets/excercise2.jpg')} alt='Featured Client 1'/>
                    <CardContent>
                        <ProjectTitle>ReVision Training with Tyler Merren</ProjectTitle>
                        <ProjectText>
                        Blind and visually impaired people can get expert fitness 
                        and wellness advice from Tyler Merren, a blind Personal Trainer 
                        </ProjectText>
                    </CardContent>
                </Card>
                <Card>
                    <Overlay></Overlay>
                    <CardBackground src={require('./../../../assets/featured_client1.png')} alt='Featured Client 2'/>
                    <CardContent>
                        <ProjectTitle>Gold Crude Research</ProjectTitle>
                        <ProjectText>
                            GoldCrudeResearch was initially established in 2007 as GoldCrudeAdvisory, a provider of premium advisory 
                            {/* services in the commodities and forex space. After acquiring a forex signals provider for the technology expertise,
                            GoldCrudeResearch expanded its portfolio of services to include trading signals for commodities, forex, and indices. */}
                        </ProjectText>
                    </CardContent>
                </Card>
                <Card>
                    <Overlay></Overlay>
                    <CardBackground src={require('./../../../assets/featured_client2.png')} alt='Featured Client 3'/>
                    <CardContent>
                        <ProjectTitle>News Nation</ProjectTitle>
                        <ProjectText>
                        Always keep abreast of the latest in news with News Nation. 
                        Stay connected with top stories from India and around the World. 
                        </ProjectText>
                    </CardContent>
                </Card>
            </FeatureCardArea>
        </FeaturedWrapper>
    )
};

export default FeaturedClients;