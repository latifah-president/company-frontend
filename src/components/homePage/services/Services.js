import React from 'react';
import LazyLoad from 'react-lazy-load'
import { 
    ServicesWrapper, 
    ServicesContent, 
    ServicesTitle, 
    ServicesText, 
    ServiceBox,
    Service,
    ServiceLink,
    ServiceBoxBgImage,
    ServiceBoxContent,
    ServiceBoxTitle,
    ServiceBoxDes, 
} from './services-styles'

const Services = () => {
    return (
        <ServicesWrapper>
            <ServicesContent>
                <header>
                    <ServicesTitle>Why Our Services Are The Best</ServicesTitle>
                </header>
                <ServicesText>
                    When our clients trust us with their projects, 
                    it feels like they are trusting a friend,and a partner, while 
                    also obtaining the power of working with a team of experienced developers 
                    and problem solvers.
                </ServicesText>
            </ServicesContent>
            <ServiceBox>
                <Service>
                    {/* <ServiceLink href='/development'> */}
                    <LazyLoad>
                        <ServiceBoxBgImage src={require('./../../../assets/web_development.jpg')} alt='Our services: Web design and development'/>
                    </LazyLoad>
                    {/* </ServiceLink> */}
                <ServiceBoxContent>
                    <header>
                        <ServiceBoxTitle>Web Design and Development</ServiceBoxTitle>
                    </header>
                    <ServiceBoxDes>
                            At some Digital agencies, website development is a second thought. 
                            At Cloud5, we take pride in building websites that look good and perform even better. 
                            We turn your ideas and vision into reality.
                        </ServiceBoxDes>
                </ServiceBoxContent>
                </Service>

                <Service>
                    {/* <ServiceLink href='/development'> */}
                    <LazyLoad>
                    <ServiceBoxBgImage src={require('./../../../assets/mobile_solutions.jpg')} alt='Our services: Mobile Solutions'/>

                    </LazyLoad>
                    {/* </ServiceLink> */}
                    <ServiceBoxContent>
                        <header>
                            <ServiceBoxTitle>Mobile Solutions</ServiceBoxTitle>
                        </header>
                        <ServiceBoxDes>
                            Our app development team has created countless high performance 
                            mobile applications on both IOS and Android We pride ourselves
                            on delivering products quickly and on time, 
                            while having fun throughout the process of creation.
                        </ServiceBoxDes>
                    </ServiceBoxContent>
                </Service>

                <Service>
                    {/* <ServiceLink href='/development'> */}
                    <LazyLoad>
                    <ServiceBoxBgImage src={require('./../../../assets/ecommerce3.jpg')} alt='Our services: Custom E-Commerce Store'/>

                    </LazyLoad>
                    {/* </ServiceLink> */}
                    <ServiceBoxContent>
                        <header>
                            <ServiceBoxTitle>Custom E-commerce Store</ServiceBoxTitle>
                        </header>
                            <ServiceBoxDes>
                            The E-commerce boom is sweeping the internet like a wave. 
                            Allot of people have a dream of owning and running their own store. 
                            Here at Cloud5 we can make that dream a reality.
                        </ServiceBoxDes>
                    </ServiceBoxContent>
                </Service>
            </ServiceBox>
            <ServiceBox>
                <Service>
                {/* <ServiceLink href='/marketing'> */}
                <LazyLoad>
                <ServiceBoxBgImage src={require('./../../../assets/social_media.jpg')} alt='Our services: Socail Media'/>

                </LazyLoad>
                {/* </ServiceLink> */}
                <ServiceBoxContent>
                    <header>
                        <ServiceBoxTitle>Social Media Management</ServiceBoxTitle>
                    </header>
                    <ServiceBoxDes>
                            At some Digital agencies, website development is a second thought. 
                            At Cloud5, we take pride in building websites that look good and perform even better. 
                            We turn your ideas and vision into reality.
                        </ServiceBoxDes>
                </ServiceBoxContent>
                </Service>

                <Service>
                    {/* <ServiceLink href='/marketing'> */}
                    <LazyLoad>
                    <ServiceBoxBgImage src={require('./../../../assets/seo_keyword.jpg')} alt='Our services: SEO and Keyword Ranking'/>

                    </LazyLoad>
                    {/* </ServiceLink> */}
                    <ServiceBoxContent>
                        <header>
                            <ServiceBoxTitle>SEO and Keyword Ranking</ServiceBoxTitle>
                        </header>
                        <ServiceBoxDes>
                            Our app development team has created countless high performance 
                            mobile applications on both IOS and Android We pride ourselves
                            on delivering products quickly and on time, 
                            while having fun throughout the process of creation.
                        </ServiceBoxDes>
                    </ServiceBoxContent>
                </Service>

                <Service>
                    {/* <ServiceLink href='/marketing'> */}
                        <LazyLoad>
                        <ServiceBoxBgImage src={require('./../../../assets/marketing.jpg')} alt='Our services: Full Scale Marketing Campaigns'/>

                        </LazyLoad>
                    {/* </ServiceLink> */}
                    <ServiceBoxContent>
                        <header>
                            <ServiceBoxTitle>Full Scale Marketing Campaigns</ServiceBoxTitle>
                        </header>
                        <ServiceBoxDes>
                            The E-commerce boom is sweeping the internet like a wave. 
                            Allot of people have a dream of owning and running their own store. 
                            Here at Cloud5 we can make that dream a reality.
                        </ServiceBoxDes>
                    </ServiceBoxContent>
                </Service>
            </ServiceBox>
        </ServicesWrapper>
    )
};

export default Services;