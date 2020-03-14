import React from 'react';
import {NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import SocialMediaIcon from './../../Icons/SocialMedia'
import WebIcon from './../../Icons/Web';
import MobileIcon from './../../Icons/Mobile';
import {Wrapper, ThreeColumnGrid, LightText, ContentArea, DarkTitle, SmallImageCard, CardArea, CardContent, SmallCardDes, CardImage} from './../../../Global_Styles/global-styles';

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
   
    return (
        <Wrapper>
            <ContentArea>
                <header>
                     <DarkTitle>Our Services</DarkTitle>
                </header>
                 <LightText>
                     When our clients trust us with their projects, 
                     it feels like they are trusting a friend,and a partner, while 
                     also obtaining the power of working with a team of experienced developers 
                    and problem solvers.
                </LightText>
             </ContentArea>
             
             <ThreeColumnGrid>
                 <NavLink to='/development'>
                 <CardContent>
                        <WebIcon/>
                    <SmallCardDes>
                    Cloud5 will build a custom  user friendly website for your business/brand. We work with you to create engaging content for your site, and all of our designs are custom. 
                    </SmallCardDes>
                 </CardContent>
                 </NavLink>

                 <NavLink to='/development'>
                 <CardContent  >
                    <MobileIcon/>
                    <SmallCardDes>
                    Our app development team has created countless high performance 
                       mobile applications on both IOS and Android. 
                    </SmallCardDes>
                 </CardContent>
                 </NavLink>
             <NavLink to='/marketing'>
           
                 <CardContent  >
                    <SocialMediaIcon/>
                    <SmallCardDes>
                     There are four available packages depending on your needs and wants. 
                    We are ready to help scale your business on whatever timeline you have created.
                    </SmallCardDes>
                 </CardContent>
                 </NavLink>
             </ThreeColumnGrid>
                 
               
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider> */}
      </Wrapper>
        // <Wrapper>
        //     <ContentArea>
        //         <header>
        //             <DarkTitle>Why Our Services Are The Best</DarkTitle>
        //         </header>
        //         <LightText>
        //             When our clients trust us with their projects, 
        //             it feels like they are trusting a friend,and a partner, while 
        //             also obtaining the power of working with a team of experienced developers 
        //             and problem solvers.
        //         </LightText>
        //     </ContentArea>

        //     <ContentArea>
        //         <DarkTitle>Website Design and Development</DarkTitle>
        //         <ContentArea horizontal>
        //             <SmallImageCard src={require('./../../../assets/web_development.jpg')} alt='image'/>
        //             <LightText horizontal>
        //             Cloud5 will build a custom  user friendly website for your business/ brand. We work with you to create engaging content for your site, and all of our designs are custom. We like to make sure Cloud5 clients stand out from their competition. Let the little guys work with themes, we want to build you a site as unique as your business. 
        //                     Contact us today and we can provide you with a custom quote and work out a payment arrangement to fit your budget.
        //             </LightText>
        //         </ContentArea>
        //     </ContentArea>


        //     <ContentArea>
        //         <DarkTitle>Mobile Solutions</DarkTitle>
        //         <ContentArea horizontal reverse>
        //             <LightText horizontal>
        //                 Our app development team has created countless high performance 
        //                 mobile applications on both IOS and Android We pride ourselves
        //                 on delivering products quickly and on time, 
        //                 while having fun throughout the process of creation.
        //                 Contact us today and we can provide you with a custom quote and work out a payment arrangement to fit your budget.
        //             </LightText>
        //             <SmallImageCard src={require('./../../../assets/mobile_solutions.jpg')} alt='image'/>
        //         </ContentArea>
        //     </ContentArea>


        //     <ContentArea>
        //         <DarkTitle>Custom E-commerce Store</DarkTitle>
        //         <ContentArea horizontal>
        //             <SmallImageCard src={require('./../../../assets/ecommerce3.jpg')} alt='image'/>
        //             <LightText horizontal>
        //                 The E-commerce boom is sweeping the internet like a wave. 
        //                 Allot of people have a dream of owning and running their own store. 
        //                 Here at Cloud5 we can make that dream a reality.
        //             </LightText>
        //         </ContentArea>
        //     </ContentArea>



        //     <ContentArea>
        //         <DarkTitle>Social Media Management</DarkTitle>
        //         <ContentArea horizontal reverse>
        //             <LightText horizontal>
        //             There are four available packages depending on your needs and wants. 
        //             We are ready to help scale your business on whatever timeline you have created. We will take on the stress of posts, blogs, advertising, customer service and much more. 
        //             Take a look at our <a href='/marketing'>marketing page</a> for each package and send us a message at any point to get started or answer any questions you may have.
        //             </LightText>
        //             <SmallImageCard src={require('./../../../assets/social_media.jpg')} alt='image'/>
        //         </ContentArea>
        //     </ContentArea>

        //     <ContentArea>
        //         <DarkTitle>SEO and Keyword Ranking</DarkTitle>
        //         <ContentArea horizontal>
        //             <SmallImageCard src={require('./../../../assets/seo_keyword.jpg')} alt='image'/>
        //             <LightText horizontal>
        //             The complicated world that is search engine optimization just got a lot easier. 
        //             Our team of experts is ready to take all the necessary steps to make your business rank higher when customers need your services. 
        //             Who is searching for you, who’s your competition, and how can you beat them are all questions that we want to answer for you. 
        //             {/* So, answer a few questions for us by clicking below and we can get started on making your online presence one to remember.  */}
        //             </LightText>
        //         </ContentArea>
        //     </ContentArea>

        //     <ContentArea>
        //         <DarkTitle>Single Marketing Campaigns</DarkTitle>
        //         <ContentArea horizontal reverse>
        //             <LightText horizontal>
        //             The beginning of your marketing journey to grow your company doesn’t have to cost thousands of dollars and a team of experts to help you. 
        //             This journey can start with as little as a simple Facebook ad or email campaign to your current subscribers. 
        //             Cloud5 is prepared to collaborate to create innovative ideas at the ideal rate you envisioned. 
        //             </LightText>
        //             <SmallImageCard src={require('./../../../assets/marketing.jpg')} alt='image'/>
        //         </ContentArea>
        //     </ContentArea>
            // {/* <ServiceBox>
               

            
    )
};

export default Services