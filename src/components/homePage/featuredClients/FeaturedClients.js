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
                    <CardBackground src={require('./../../../assets/excercise2.jpg')} alt='Featured Client: ReVision Training with Tyler Merren'/>
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
                    <CardBackground src={require('./../../../assets/featured_client1.png')} alt='Featured Client: Gold Crude Research'/>
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
                    <CardBackground src={require('./../../../assets/featured_client2.png')} alt='Featured Client: News Nation'/>
                    <CardContent>
                        <ProjectTitle>Client Two</ProjectTitle>
                        <ProjectText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis, 
                            velit vitae mattis convallis, eros felis sollicitudin urna, a ultricies 
                            leo felis sit amet justo. 
                        </ProjectText>
                    </CardContent>
                </Card>
            </FeatureCardArea>
        </FeaturedWrapper>
    )
};

export default FeaturedClients;