import React from 'react';

import {Wrapper, LightText, ContentArea, DarkTitle, SmallImageCard} from './../../../Global_Styles/global-styles';

const Services = () => {
    return (
        <Wrapper>
            <ContentArea>
                <header>
                    <DarkTitle>Why Our Services Are The Best</DarkTitle>
                </header>
                <LightText>
                    When our clients trust us with their projects, 
                    it feels like they are trusting a friend,and a partner, while 
                    also obtaining the power of working with a team of experienced developers 
                    and problem solvers.
                </LightText>
            </ContentArea>

            <ContentArea>
                <DarkTitle>Website Design and Development</DarkTitle>
                <ContentArea horizontal>
                    <SmallImageCard src={require('./../../../assets/web_development.jpg')} alt='image'/>
                    <LightText horizontal>
                    Cloud5 will build a custom  user friendly website for your business/ brand. We work with you to create engaging content for your site, and all of our designs are custom. We like to make sure Cloud5 clients stand out from their competition. Let the little guys work with themes, we want to build you a site as unique as your business. 
                            Contact us today and we can provide you with a custom quote and work out a payment arrangement to fit your budget.
                    </LightText>
                </ContentArea>
            </ContentArea>


            <ContentArea>
                <DarkTitle>Mobile Solutions</DarkTitle>
                <ContentArea horizontal reverse>
                    <LightText horizontal>
                        Our app development team has created countless high performance 
                        mobile applications on both IOS and Android We pride ourselves
                        on delivering products quickly and on time, 
                        while having fun throughout the process of creation.
                        Contact us today and we can provide you with a custom quote and work out a payment arrangement to fit your budget.
                    </LightText>
                    <SmallImageCard src={require('./../../../assets/mobile_solutions.jpg')} alt='image'/>
                </ContentArea>
            </ContentArea>


            <ContentArea>
                <DarkTitle>Custom E-commerce Store</DarkTitle>
                <ContentArea horizontal>
                    <SmallImageCard src={require('./../../../assets/ecommerce3.jpg')} alt='image'/>
                    <LightText horizontal>
                        The E-commerce boom is sweeping the internet like a wave. 
                        Allot of people have a dream of owning and running their own store. 
                        Here at Cloud5 we can make that dream a reality.
                    </LightText>
                </ContentArea>
            </ContentArea>



            <ContentArea>
                <DarkTitle>Social Media Management</DarkTitle>
                <ContentArea horizontal reverse>
                    <LightText horizontal>
                    There are four available packages depending on your needs and wants. 
                    We are ready to help scale your business on whatever timeline you have created. We will take on the stress of posts, blogs, advertising, customer service and much more. 
                    Take a look at our <a href='/marketing'>marketing page</a> for each package and send us a message at any point to get started or answer any questions you may have.
                    </LightText>
                    <SmallImageCard src={require('./../../../assets/social_media.jpg')} alt='image'/>
                </ContentArea>
            </ContentArea>

            <ContentArea>
                <DarkTitle>SEO and Keyword Ranking</DarkTitle>
                <ContentArea horizontal>
                    <SmallImageCard src={require('./../../../assets/seo_keyword.jpg')} alt='image'/>
                    <LightText horizontal>
                    The complicated world that is search engine optimization just got a lot easier. 
                    Our team of experts is ready to take all the necessary steps to make your business rank higher when customers need your services. 
                    Who is searching for you, who’s your competition, and how can you beat them are all questions that we want to answer for you. 
                    {/* So, answer a few questions for us by clicking below and we can get started on making your online presence one to remember.  */}
                    </LightText>
                </ContentArea>
            </ContentArea>

            <ContentArea>
                <DarkTitle>Single Marketing Campaigns</DarkTitle>
                <ContentArea horizontal reverse>
                    <LightText horizontal>
                    The beginning of your marketing journey to grow your company doesn’t have to cost thousands of dollars and a team of experts to help you. 
                    This journey can start with as little as a simple Facebook ad or email campaign to your current subscribers. 
                    Cloud5 is prepared to collaborate to create innovative ideas at the ideal rate you envisioned. 
                    </LightText>
                    <SmallImageCard src={require('./../../../assets/marketing.jpg')} alt='image'/>
                </ContentArea>
            </ContentArea>
            {/* <ServiceBox>
                <Service>
                        <ServiceBoxBgImage src={require('./../../../assets/web_development.jpg')} alt='Our services: Web design and development'/>
                <ServiceBoxContent>
                    <header>
                        <ServiceBoxTitle>Web Design and Development</ServiceBoxTitle>
                    </header>
                    <CardDes>
                            At some Digital agencies, website development is a second thought. 
                            At Cloud5, we take pride in building websites that look good and perform even better. 
                            We turn your ideas and vision into reality.
                    </CardDes>
                </ServiceBoxContent>

                </Service>
                    <Service style={{marginTop: '2rem'}}>
                        <ServiceBoxBgImage src={require('./../../../assets/mobile_solutions.jpg')} alt='Our services: Web design and development'/>
                <ServiceBoxContent>
                    <header>
                        <ServiceBoxTitle>Mobile Solutions</ServiceBoxTitle>
                    </header>
                    <CardDes>
                    Our app development team has created countless high performance 
                            mobile applications on both IOS and Android We pride ourselves
                            on delivering products quickly and on time, 
                            while having fun throughout the process of creation.
                    </CardDes>
                </ServiceBoxContent>
                </Service>

                    <Service>
                    <ServiceBoxBgImage src={require('./../../../assets/ecommerce3.jpg')} alt='Our services: Custom E-Commerce Store'/>
                    <ServiceBoxContent>
                        <header>
                            <ServiceBoxTitle>Custom E-commerce Store</ServiceBoxTitle>
                        </header>
                            <CardDes>
                            The E-commerce boom is sweeping the internet like a wave. 
                            Allot of people have a dream of owning and running their own store. 
                            Here at Cloud5 we can make that dream a reality.
                        </CardDes>
                    </ServiceBoxContent>
                </Service>
            </ServiceBox> */}

            {/* <ServiceBox>
               <Service>
                <ServiceBoxBgImage src={require('./../../../assets/social_media.jpg')} alt='Our services: Socail Media'/>
                <ServiceBoxContent>
                    <header>
                        <ServiceBoxTitle>Social Media Management</ServiceBoxTitle>
                    </header>
                    <CardDes>
                    There are four available packages depending on your needs and wants. 
                    We are ready to help scale your business on whatever timeline you have created. We will take on the stress of posts, blogs, advertising, customer service and much more. 
                    Take a look below at our simple lay out of each package and send us a message at any point to get started or answer any questions you may have.
                        </CardDes>
                </ServiceBoxContent>
                </Service>

                <Service style={{marginTop: '3.5rem'}}> 
                    <ServiceBoxBgImage src={require('./../../../assets/seo_keyword.jpg')} alt='Our services: SEO and Keyword Ranking'/>
                    <ServiceBoxContent>
                        <header>
                            <ServiceBoxTitle>SEO and Keyword Ranking</ServiceBoxTitle>
                        </header>
                        <CardDes>
                        The complicated world that is search engine optimization just got a lot easier. 
                        Our team of experts is ready to take all the necessary steps to make your business rank higher when customers need your services. 
                        Who is searching for you, who’s your competition, and how can you beat them are all questions that we want to answer for you. 
                        </CardDes>
                    </ServiceBoxContent>
                </Service>

                <Service>
                        <ServiceBoxBgImage src={require('./../../../assets/marketing.jpg')} alt='Our services: Full Scale Marketing Campaigns'/>
                    <ServiceBoxContent>
                        <header>
                            <ServiceBoxTitle>Single Marketing Campaigns</ServiceBoxTitle>
                        </header>
                        <CardDes>
                        The beginning of your marketing journey to grow your company doesn’t have to cost thousands of dollars and a team of experts to help you. This journey can start with as little as a simple Facebook ad or email campaign to your current subscribers. Cloud5 is prepared to collaborate to create innovative ideas at the ideal rate you envisioned. 
                        </CardDes>
                    </ServiceBoxContent>
                </Service>
            </ServiceBox> */}
        </Wrapper>
    )
};

export default Services