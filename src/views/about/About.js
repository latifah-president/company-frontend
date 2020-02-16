import React from 'react';
import LazyLoad from 'react-lazy-load';
import Aux from './../../HOC/Aux';
import './../../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faTwitter, faLinkedinIn, faGithub, faFacebookF} from '@fortawesome/fontawesome-free-brands';
import {
    Wrapper, 
    ImageHeader, 
    Content, DarkTitle, 
    ThreeByThreeSec, 
    Card, 
    CardImage,
    CardContent,
    SmallSubTitle,
    SmallCardDes,
    LightText,
    HeaderImage,
    OverlayLight,
    ImageWithSubTitle,
    ThreeColumnGrid, 
    AboutImage
} from './../../global-styles';


const About = () => {
    return (
        <Aux>
            <ImageHeader >
                <OverlayLight></OverlayLight>
                <LazyLoad  
                    debounce={false}
                    offsetVertical={500}>
                        <HeaderImage src={require('./../../assets/about_image.jpg')} alt='About Us'/>
                </LazyLoad>
            </ImageHeader>
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
                        {/* <ThreeColumnGrid> */}
                        {/* <ThreeByThreeSec> */}
                            {/* <Card style={{width: '100%'}}>
                                <ImageWithSubTitle>
                                <CardImage src={require('./../../assets/Dailan-Cooper-img.jpg')} alt='Our CEO: Dailan Cooper'/>

                                    <header>
                                        <SmallSubTitle>Dailan Cooper</SmallSubTitle>
                                        <SmallCardDes >Chief Executive Officer</SmallCardDes>
                                        <Icons>
                                            <FontAwesomeIcon icon={faFacebookF}  className='facebook'/>
                                            <FontAwesomeIcon icon={faLinkedinIn}  className='linkedin'/>
                                        </Icons>
                                    </header>

                                <CardContent>
                                <CardImage src={require('./../../assets/Kathryn Domako.jpg')} alt='Our CMO: Kathryn Domako'/>
                                    <header>
                                        <SmallSubTitle>Kathryn Domako</SmallSubTitle>
                                        <SmallCardDes >Chief Marketing Officer</SmallCardDes>
                                    </header>
                                </CardContent>
                                <CardImage src={require('./../../assets/Latifah.jpg')} alt='Our CTO: Latifah President'/>
                                <CardContent>
                                    <header>
                                        <SmallSubTitle>Latifah President</SmallSubTitle>
                                        <SmallCardDes >Chief Technology Officer</SmallCardDes>
                                    </header>
                                </CardContent>
                                </ImageWithSubTitle>
                            </Card> */}
                            <ThreeColumnGrid className='threecolumgrid'>
                                <ImageWithSubTitle>
                                <AboutImage src={require('./../../assets/Dailan-Cooper-img.jpg')} alt='Our CEO: Dailan Cooper'/>
                                <CardContent>
                                <header>
                                        <SmallSubTitle>Dailan Cooper</SmallSubTitle>
                                        <SmallCardDes >Chief Executive Officer</SmallCardDes>
                                        
                                    </header>
                                </CardContent>
</ImageWithSubTitle>
<ImageWithSubTitle>
                                <AboutImage src={require('./../../assets/Kathryn Domako.jpg')} alt='Our CMO: Kathryn Domako'/>
                                <CardContent>
                                    <header>
                                        <SmallSubTitle>Kathryn Domako</SmallSubTitle>
                                        <SmallCardDes >Chief Marketing Officer</SmallCardDes>
                                    </header>
                                </CardContent> 
                                </ImageWithSubTitle>
                            {/* <ImageWithSubTitle> 
                                <CardImage src={require('./../../assets/Kathryn Domako.jpg')} alt='Our CMO: Kathryn Domako'/>
                                <CardContent>
                                    <header>
                                        <SmallSubTitle>Kathryn Domako</SmallSubTitle>
                                        <SmallCardDes >Chief Marketing Officer</SmallCardDes>
                                    </header>
                                </CardContent> 
                             </ImageWithSubTitle> */}
                             
                            <ImageWithSubTitle>
                                <AboutImage src={require('./../../assets/Latifah.jpg')} alt='Our CTO: Latifah President'/>
                                <CardContent>
                                    <header>
                                        <SmallSubTitle>Latifah President</SmallSubTitle>
                                        <SmallCardDes >Chief Technology Officer</SmallCardDes>
                                    </header>
                                </CardContent>
                            </ImageWithSubTitle>
                            </ThreeColumnGrid>
                        {/* </ThreeByThreeSec>                         */}
                    </Content>                   
                </Wrapper>
        </Aux>
    )
}

export default About;

