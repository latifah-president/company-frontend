import React from 'react';
import WebIcon from './../../components/Icons/Web';
import MobileIcon from './../../components/Icons/Mobile';
import SpecialProjectsIcon from './../../components/Icons/SpecialProjects';
import MarketingIcon from './../../components/Icons/Marketing';
import BusinessDevIcon from './../../components/Icons/BussinessDev';
import Aux from './../../HOC/Aux';
// import Advantages from './../../components/homePage/Advantages/Advantages';
import {
    Wrapper,
    Container,
    ContentArea, 
 Header,
    DarkTitle, 
    WhiteTitle,
    LightText,
    HeaderImage,
   SmallImageCard,
   ColoredHeader,
   SmallWhiteText,
   HeaderText,
   HeaderTextMobile,
   PillButton,
} from './../../Global_Styles/global-styles';
import {ServicesLinks, ServicesTitle, ServiceContainer, ServiceContent, Image} from './services-style';

const Development = () => {

    return (
        <Aux>
            <Header >
                <HeaderImage src={require('./../../assets/Views/Services/wireframes.jpg')} alt='image'/>
                <div className='box'>
                    <ColoredHeader>
                    <WhiteTitle>SERVICES</WhiteTitle>
                    <HeaderText>
                        We strive to deliver the best service possible to our clients. 
                        We 
                        <br/>are a one stop shop for everything you need to conceptualize, <br/>
                        build, market, and launch your ideas into the market place. <br/> Your a big deal to us!
                    </HeaderText>
                    <HeaderTextMobile>
                        We strive to deliver the best service possible to our clients. 
                        We 
                        are a one stop shop for everything you need to conceptualize, 
                        build, market, and launch your ideas into the market place.  Your a big deal to us!
                    </HeaderTextMobile>
                    </ColoredHeader>
                </div>
            </Header>
                <Wrapper column>
                    <ServicesLinks>
                       <li>Social Media Management <span>.</span></li>
                       <li>Marketing <span>.</span></li>
                       <li>Web Development <span>.</span></li>
                       <li>E-Commerce <span>.</span></li>
                       <li>Branding <span>.</span></li>
                       <li>Mobile Solutions <span>.</span></li>
                       <li>Strategies <span>.</span></li>
                       <li>User Experience Design<span>.</span></li>
                       <li>Business Development <span>.</span></li>
                       <li>Search Engine Optimization<span>.</span></li>
                       <li>Keyword Ranking <span>.</span></li>
                    </ServicesLinks>
                    <Container icon style={{background: '#FBE6C3', width: '100%', padding: '3rem'}}>
                        <WebIcon/>
                        <MobileIcon/>
                        <MarketingIcon/>
                        <BusinessDevIcon/>
                        <SpecialProjectsIcon/>
                    </Container>

                    <ServiceContainer reverse>

                        <ServiceContent>
                            <DarkTitle left>WEB DEVELOPMENT</DarkTitle>
                            <LightText left small>
                                We will build a custom user friendly website for your business/brand. We work with you to create engaging content for your site, 
                                and all of our designs are custom to help you stand out from the competition. Connect with us today and we can provide you with a custom quote.
                            </LightText>
                            <PillButton href='/contact'>Let's Chat</PillButton>
                        </ServiceContent>
                        <ServiceContent image>
                        <Image src={require('./../../assets/Views/Services/web dev.jpg')} alt='web development image' />

                        </ServiceContent>
                    </ServiceContainer>

                    <ServiceContainer>
                        <ServiceContent image>
                            <Image src={require('./../../assets/Views/Services/app dev.jpg')} alt=' app development image' />
                        </ServiceContent>
                            <ServiceContent >
                            <DarkTitle left>APP DEVELOPMENT</DarkTitle>
                            <LightText left small>
                                Our app development team has created countless high performance mobile applications on both IOS and Android We pride ourselves on delivering products quickly and on time. 
                                Let’s talk more about your amazing App idea.
                            </LightText>
                            <PillButton  href='/contact'>Get in Touch</PillButton>
                        </ServiceContent>
                    </ServiceContainer>

                     <ServiceContainer reverse >
                            <ServiceContent>
                            <DarkTitle left>MARKETING</DarkTitle>
                            <LightText left small>
                            The beginning of your marketing journey to grow your company doesn’t have to cost thousands 
                            of dollars and a team of experts to help you. Social media campaigns, ads, 
                            SEO & keyword ranking, we do it all. Let’s grow your business together.
                            </LightText>
                            <PillButton href='/contact'>Let's Grow</PillButton>
                        </ServiceContent>
                        <ServiceContent image>
                        <Image src={require('./../../assets/Views/Services/special projects.jpg')} alt='marketing image' />
                        </ServiceContent>
                    </ServiceContainer>

                    <ServiceContainer>
                        <ServiceContent image>
                            <Image src={require('./../../assets/Views/Services/workflow.jpg')} alt='bussiness development image' />
                        </ServiceContent>
                            <ServiceContent >
                            <DarkTitle left>BUSSINESS DEVELOPMENT</DarkTitle>
                            <LightText left small>
                                If you have a dream of owning and running your own business. 
                                Here at Cloud5 we can make that dream a reality. Let us help you build your business from the ground up. The sooner you reach out, 
                                the quicker you can turn that dream into a reality.
                            </LightText>
                            <PillButton href='/contact'>Let's Do It</PillButton>
                        </ServiceContent>
                    </ServiceContainer>
                    <ServiceContainer reverse style={{border: 'none'}}>
                            <ServiceContent >
                            <DarkTitle left>SPECIAL PROJECTS</DarkTitle>
                            <LightText left small>
                                We don’t just work with clients we have our own ideas. 
                                What better way to show clients how successful we can make them than to build our own projects. 
                                All of our special projects focus on accessibility first. Our main mission with our projects 
                                is to insure that anyone and everyone can access them.
                            </LightText>
                            <PillButton href='/contact'>Let's Grow</PillButton>
                        </ServiceContent>
                        <ServiceContent image>
                        <Image src={require('./../../assets/Views/Services/goals.jpg')} alt=' goals image' />
                        </ServiceContent>
                    </ServiceContainer>
                    {/* <ContentArea>
                        <DarkTitle>Website Design and Development</DarkTitle>
                        <ContentArea column reverse>
                            <LightText small >
                            Cloud5 will build a custom  user friendly website for your business/ brand. We work with you to create engaging content for your site, and all of our designs are custom. We like to make sure Cloud5 clients stand out from their competition. Let the little guys work with themes, we want to build you a site as unique as your business. 
                            Contact us today and we can provide you with a custom quote and work out a payment arrangement to fit your budget.
                            </LightText>
                            <SmallImageCard  src={require('./../../assets/wordpress-ex1.png')} atl='image' />

                        </ContentArea>
                    </ContentArea> */}

                    {/* <ContentArea>
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
                    </ContentArea> */}
                </Wrapper>
                </Aux>
    )
}

export default Development