import React from 'react';
import Aux from './../../HOC/Aux';
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { 
    Header, 
    LightOverlay, 
    HeaderImage, 
    Wrapper, 
    ContentArea,
    DarkTitle, 
    LightText,
    JobsContainer,
    JobsLinks,
    JobsLink,
    DarkSubtitle,
} from './../../Global_Styles/global-styles';

const Careers = (props) => {
    console.log('props', props.match.path, )
    return (
        <Aux>
            <Header>
                <LightOverlay></LightOverlay>
                <HeaderImage src={require('./../../assets/Views/careers_page.jpg')} alt='Careers'/>
            </Header>
            <Wrapper>
                <ContentArea>
                    <DarkTitle>Join Us</DarkTitle>
                    <LightText>
                        Cloud5 is growing at an exponential rate.  Because of this, we are consistently 
                        looking for experienced applicants to join our team. 
                      
                       
                    </LightText>
                    <LightText>
                            If you’re interested in joining a fast paced, high performing team. 
                            And helping to grow a unique small business. Please browse the jobs we have available below 
                            and send us an email with your resume.
                        </LightText>
                        <LightText>
                            A member of our team will reach out to you to set up an interview. 
                            Thank you for considering Cloud5 as your new corporate family. We hope to see you on the other side.
                            Let’s create the future together.
                        </LightText>
                        <JobsContainer>
                            <DarkSubtitle style={{fontSize: '1.3rem', padding: '.5rem'}}> Available Position</DarkSubtitle>
                            <JobsLinks>
                                <JobsLink>
                                    <Link exact to='/careers/agent' aria-label='Cloud5 Agent' className='jobTitle'>Cloud5 Agent/Project manager <FontAwesomeIcon icon={faChevronRight} className='icon'/></Link>
                                </JobsLink>
                            </JobsLinks>
                            <JobsLinks>
                                <JobsLink>
                                    <Link to='careers/smm' aria-label='Social Media Manager' className='jobTitle'>Social Media Manager<FontAwesomeIcon icon={faChevronRight} className='icon'/></Link>
                                </JobsLink>
                            </JobsLinks>
                            <JobsLinks>
                                <JobsLink>
                                    <Link to='careers/seo' aria-label='SEO Manager' className='jobTitle'>SEO Manager<FontAwesomeIcon icon={faChevronRight} className='icon'/></Link>
                                </JobsLink>
                            </JobsLinks>
                            <JobsLinks>
                                <JobsLink>
                                    <Link to='careers/webdev' aria-label='Read more and the Jr. Full Stack Developer job' className='jobTitle'>Jr Full Stack Developer<FontAwesomeIcon icon={faChevronRight} className='icon'/></Link>
                                </JobsLink>
                            </JobsLinks>
                            <JobsLinks>
                                <JobsLink>
                                    <Link to='careers/salesrep' aria-label='Sales Rep' className='jobTitle'>Sales Rep<FontAwesomeIcon icon={faChevronRight} className='icon'/></Link>
                                </JobsLink>
                            </JobsLinks>
                            <JobsLinks>
                                <JobsLink>
                                    <Link to='careers/assistant' aria-label='Executive Assistant' className='jobTitle'>Executive Assistant<FontAwesomeIcon icon={faChevronRight} className='icon'/></Link>
                                </JobsLink>
                            </JobsLinks>
                        </JobsContainer>
                </ContentArea>
            </Wrapper>
        </Aux>
    )
};

export default Careers;