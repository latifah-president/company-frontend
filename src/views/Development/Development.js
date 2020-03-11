import React from 'react';
import Contact from './../../container/Forms/ContactForm';
import Aux from './../../HOC/Aux';
import Advantages from './../../components/homePage/Advantages/Advantages';
import {
    Wrapper,
    ContentArea, 
    Header,
    LightOverlay, 
    DarkTitle, 
    LightText,
    HeaderImage,
   SmallImageCard,
} from './../../Global_Styles/global-styles';


const Development = () => {

    return (
        <Aux>
            <Header >
                <LightOverlay></LightOverlay>
                        <HeaderImage src={require('./../../assets/Views/development/development.jpg')} alt='image'/>
            </Header>
                <Wrapper>
                    <ContentArea>
                        <DarkTitle>Development</DarkTitle>
                        <LightText >	
                        Here at Cloud5 we are really proud of our development department. 
                        We have a very large team consisting of 68 very  talented developers and experienced coders.
                        For this reason we are capable of delivering projects quickly, while also  insuring 
                        that all of our projects have a clean look and  high performing design, User friendly functionality, and that all of our projects are optimized for accessibility. 
                        When you choose  Cloud5, you’re choosing perfection, we just won’t stand for anything less. 
                        The proof is in the pudding, take a look at our <a href='/portfolio'>portfolio</a> page to check out a 
                        few of our past clients. Our services are listed below.
                        </LightText>
                       
                    </ContentArea>

                    <Advantages/>

                    <ContentArea>
                        <DarkTitle>Website Design and Development</DarkTitle>
                        <ContentArea horizontal reverse>
                            <LightText horizontal >
                            Cloud5 will build a custom  user friendly website for your business/ brand. We work with you to create engaging content for your site, and all of our designs are custom. We like to make sure Cloud5 clients stand out from their competition. Let the little guys work with themes, we want to build you a site as unique as your business. 
                            Contact us today and we can provide you with a custom quote and work out a payment arrangement to fit your budget.
                            </LightText>
                            <SmallImageCard horizontal src={require('./../../assets/wordpress-ex1.png')} atl='image' />

                        </ContentArea>
                    </ContentArea>

                    <ContentArea>
                        <DarkTitle>E commerce Design and Development</DarkTitle>
                        <ContentArea horizontal>
                            <SmallImageCard horizontal src={require('./../../assets/shopify_ex1.png')} atl='image' />
                            <LightText horizontal >
                            E-commerce is a very competitive market. Our aim as a developer is not only to build a custom 
                            store front  that will outshine your competition. But to assist you in building a   Strategic plan on how to beat out your competitors. In the e-commerce realm it’s not enough to have a beautiful site anymore. You also have to think about the market, what product to choose, distribution, product creation, marketing, manufacturing, venders, and so on. With our partners and experience. We don’t just help you build your store, we help you build your business. 
                            Reach out to one of our agents to learn more.                            
                            </LightText>
                        </ContentArea>
                    </ContentArea>

                    <ContentArea>
                        <DarkTitle>Mobile App Creation</DarkTitle>
                        <ContentArea horizontal reverse>
                            <LightText horizontal >
                                We have a lot of fun building mobile apps. We like getting the creative clients with a bold idea.
                                Our team can assist you in conceptualizing, developing, marketing, launching, and even managing your mobile app. What most people don’t realize is mobile app creation is like building a micro business that is going to have allot of moving parts like any business. By choosing Cloud5, you’re choosing a partner that understands not only the technical side of things, but also the business as well. We take you by the hand and help you build a masterpiece, and we assist in implementing multiple forms of monetization. 
                                You just don’t get this from any other developer.                           
                            </LightText>
                            <SmallImageCard horizontal src={require('./../../assets/featured_client2.png')} atl='image' />

                        </ContentArea>
                    </ContentArea>

                    <ContentArea>
                        <DarkTitle>Lets Create Something Amazing Together</DarkTitle>
                            <LightText>
                            Here at Cloud5, we can build a pretty product on IOS, Android or web, and we can promise you this. You won’t be walking away with an app. You’ll be walking away with a business. 
                            Reach out to us for a custom quote, we cant wait to hear about your idea.                 
                            </LightText>
                            <Contact/>
                    </ContentArea>
                </Wrapper>
                </Aux>
    )
}

export default Development