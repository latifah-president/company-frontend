import React from 'react';
import WebIcon from './../../components/Icons/Web';
import MobileIcon from './../../components/Icons/Mobile';
import SpecialProjectsIcon from './../../components/Icons/SpecialProjects';
import MarketingIcon from './../../components/Icons/Marketing';
import BusinessDevIcon from './../../components/Icons/BussinessDev';
import Aux from './../../HOC/Aux';
import {
    Wrapper,
    Container,
    Header,
    DarkTitle, 
    WhiteTitle,
    LightText,
    HeaderImage,
    ColoredHeader,
    HeaderText,
    HeaderTextMobile,
    PillButton,
    CardContent,
} from './../../Global_Styles/global-styles';
import {ServicesLinks, ServiceContainer, ServiceContent, Image, ServicesText} from './services-style';

const Services = () => {

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
                        <CardContent icon shrink className='grow shrink' >
                            <WebIcon/>
                        </CardContent>
                        <CardContent icon shrink className='grow'>
                            <MobileIcon/>
                        </CardContent>
                        <CardContent icon shrink className='grow'> 
                        <BusinessDevIcon/>
                        </CardContent>  

                        <CardContent icon shrink  className='grow'>
                            <MarketingIcon/>
                        </CardContent> 

                        <CardContent icon shrink className='grow'>
                            <SpecialProjectsIcon/>

                        </CardContent>                                                                                         
                       
                       
                    </Container>

                    <ServiceContainer reverse>

                        <ServiceContent>
                            <DarkTitle left>WEB DEVELOPMENT</DarkTitle>
                            <ServicesText left>
                                We will build a custom user friendly website for your business/brand. We work with you to create engaging content for your site, 
                                and all of our designs are custom to help you stand out from the competition. Connect with us today and we can provide you with a custom quote.
                            </ServicesText>
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
                            <ServicesText left >
                                Our app development team has created countless high performance mobile applications on both IOS and Android We pride ourselves on delivering products quickly and on time. 
                                Let’s talk more about your amazing App idea.
                            </ServicesText>
                            <PillButton  href='/contact'>Get in Touch</PillButton>
                        </ServiceContent>
                    </ServiceContainer>

                     <ServiceContainer reverse >
                            <ServiceContent>
                            <DarkTitle left>MARKETING</DarkTitle>
                            <ServicesText left >
                            The beginning of your marketing journey to grow your company doesn’t have to cost thousands 
                            of dollars and a team of experts to help you. Social media campaigns, ads, 
                            SEO &amp; keyword ranking, we do it all. Let’s grow your business together.
                            </ServicesText>
                            <PillButton href='/contact'>Let's Grow</PillButton>
                        </ServiceContent>
                        <ServiceContent image>
                        <Image src={require('./../../assets/Views/Services/special projects.jpg')} alt='marketing image' />
                        </ServiceContent>
                    </ServiceContainer>

                    <ServiceContainer none>
                        <ServiceContent image>
                            <Image src={require('./../../assets/Views/Services/workflow.jpg')} alt='bussiness development image' />
                        </ServiceContent>
                            <ServiceContent  >
                            <DarkTitle left>BUSSINESS DEVELOPMENT</DarkTitle>
                            <ServicesText left >
                                If you have a dream of owning and running your own business. 
                                Here at Cloud5 we can make that dream a reality. Let us help you build your business from the ground up. The sooner you reach out, 
                                the quicker you can turn that dream into a reality.
                            </ServicesText>
                            <PillButton href='/contact'>Let's Do It</PillButton>
                        </ServiceContent>
                    </ServiceContainer>
                    {/* <ServiceContainer reverse style={{border: 'none'}}>
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
                    </ServiceContainer> */}
                </Wrapper>
                </Aux>
    )
}

export default Services;