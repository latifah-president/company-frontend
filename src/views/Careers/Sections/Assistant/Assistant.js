import React from 'react';
import Aux from './../../../../HOC/Aux';
import { 
    Header, 
    LightOverlay, 
    HeaderImage, 
    Wrapper,
    DarkTitle, 
    LightText,
    DarkSubtitle,
    JobDescArea,
} from './../../../../Global_Styles/global-styles';
import UploadForm from './../../../../container/Forms/UploadForm';

const Assistant = () => {
    return (
        <Aux>
            <Header>
                <LightOverlay></LightOverlay>
                <HeaderImage src={require('../../../../assets/Views/careers_page.jpg')} alt='Careers'/>
            </Header>
            <Wrapper>
                    <DarkTitle>Executive Assistant</DarkTitle>
                    <JobDescArea style={{alignItems: 'flex-start'}}>
                    <DarkSubtitle>Description</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}>
                            The CEO of Cloud5 is currently looking to hire an assistant to help out with business and personal tasks.
                            This is a fast paced job that requires exceptional organizational skills, the ability to travel, and adapt to a constantly changing work environment.
                            The CEO is looking for someone with youthful energy that is comfortable navigating both a corporate work flow as well as a more relaxed non traditional work flow.                        
                        </LightText>
                        <DarkSubtitle style={{fontSize: '1.2rem'}}>Compensation</DarkSubtitle>
                        <LightText style={{fontSize: '1rem'}}>Base Pay</LightText>
                        <DarkSubtitle>Responsibilities</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}> 
                            Keeping track of appointments and schedules, business contacts, making/ receiving calls on his behalf, driving to various locations for events, meetings, appointments, and/or personal matters.
                            The Executive Assistant will be required to act as a travel buddy for various business trips, take notes during meetings, and any other tasks the CEO asks of you within moral and ethic.
                        </LightText>
                    </JobDescArea>
                    <UploadForm/>
            </Wrapper>
        </Aux>
    )
};

export default Assistant;