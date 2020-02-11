import React, {Component } from 'react';
import Aux from './../../HOC/Aux';
import {Wrapper, ImageHeader, Content, DarkTitle, LightTex, LightText, ThreeByThreeSec, Card, CardImage, CardContent, CardTitle, SmallSubTitle, LightParagraph, SmallCardDes} from './../../global-styles';
import Layout from './../../components/Layout/Layout';
import {dailan} from './../../assets/Dailan-Cooper-img.jpg';
import {katie} from './../../assets/Kathryn Domako.jpg';

// class About extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         console.log(this.props.title, 'about props')
//         return (
//             // <Layout>
//             //     thisis the title
//             // </Layout>
//         <div>{this.props.title}</div>
//         )
//     }
// };

const About = (props) => {
    console.log(props, 'props from about')
    return (
        // <Wrapper>
        <Aux>
            <ImageHeader about></ImageHeader>
                <Wrapper>
                    <Content>
                        <header>
                            <DarkTitle>About Us</DarkTitle>
                        </header>
                        <LightText>
                            Cloud5 was created with the idea that innovative and creative thinkers will change the game. We wanted to integrate the freelance market with the reach and capabilities of a corporation. The success of our company is shown with the success of the clients we serve, and we don’t stop until its perfect!
                        </LightText>
                        <LightText>  
                            In February of 2018 Dailan and Arielle Cooper created a business based on the concept that anyone can change any game, with simply an idea. Cloud5 has been successful because of our affordability, creative freethinkers, youthful excitement, and the drive to overachieve while beating the deadline! When you work with Cloud5, you get access to the most innovative tools and services in the IT industry.
                        </LightText>
                       
                        {/* <LightText>
                        </LightText>
                        <LightText>
                        </LightText> */}
                        {/* <LightText>
                            Offering services such as websites, apps, and e-commerce stores has been our solution this far, and it’s working. But what else can we be doing? Moving into 2020 we asked ourselves, are we doing everything we can to help our clients fully succeed? we have transitioned into offering new services this year to make Cloud5 the complete package when building your business. Services such as social media management and all other marketing needs are now available. Together, we are creating the future. There is no need to be spending time looking for company after company with different services that will help you, when all you need is Cloud5. You should be spending that time using your passion for your business where it is actually needed. Every client should be growing as fast as we are!
                        </LightText> */}
                        <LightText>
                            Since the beginning we have been focused on finding the answer to every client’s question,
                            “How can I turn my great idea into a business that makes money?”

                            Cloud5 is no ordinary development agency. We threw the blue print out the window to create a company that brings the passion and motivation back into building a business. We have helped over 300 clients build their dreams into a reality, so the only question left is, how can we help you create your future? 

                        </LightText>
                        
                        <header>
                            <DarkTitle>Meet The Team</DarkTitle>
                        </header>
                        
                        <LightText>
                            We are based out of the new and fast paced IT paradise of Austin, Texas. But don’t think that we can’t work all over the world, remember that corporate reach? We have worked with clients all over the country, there is no geographical limit on the ideas that can come to life! We have a powerhouse team including CEO Dailan Cooper, CTO Latifah President, CMO Kathryn Domako, and a dedicated team ready to create the future. 
                        </LightText>
                        <LightText>
                        Our team includes over 60 developers with at least 5 years of experience, a marketing team committed to the vision of each and every client, and a growing sales team ready to overcome every challenge thrown their way.

                        </LightText>
                        {/* <div style={{ border: '2px solid green' }}> */}
                        <ThreeByThreeSec>
                            <Card>
                                <CardImage src={require('./../../assets/Dailan-Cooper-img.jpg')} alt='Our CEO: Dailan Cooper'/>
                                <CardContent>
                                    <header>
                                        <SmallSubTitle>Dailan Cooper</SmallSubTitle>
                                        <SmallCardDes >Chief Executive Officer</SmallCardDes>
                                    </header>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardImage src={require('./../../assets/Kathryn Domako.jpg')} alt='Our CMO: Kathryn Domako'/>
                                <CardContent>
                                    <header>
                                        <SmallSubTitle>Kathryn Domako</SmallSubTitle>
                                        <SmallCardDes >Chief Marketing Officer</SmallCardDes>
                                    </header>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardImage src={require('./../../assets/Latifah.jpg')} alt='Our CTO: Latifah President'/>
                                <CardContent>
                                    <header>
                                        <SmallSubTitle>Latifah President</SmallSubTitle>
                                        <SmallCardDes >Chief Technology Officer</SmallCardDes>
                                    </header>
                                </CardContent>
                            </Card>
                        </ThreeByThreeSec>
                        {/* </div> */}
                        
                    </Content>
                    
                </Wrapper>
        </Aux>
            
            
        // </Wrapper>
    )
}

export default About;

