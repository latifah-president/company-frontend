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

const Agent = () => {
    return (
        <Aux>
            <Header>
                <HeaderImage src={require('../../../../assets/Views/careers_page.jpg')} alt='Careers'/>
            </Header>
            <Wrapper>
                    <DarkTitle>Cloud5 Agent/Project Manager</DarkTitle>
                    <JobDescArea style={{alignItems: 'flex-start'}}>
                        <DarkSubtitle>Description</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}>You will have an opportunity to grow within our organization and will work closely with a team to deliver high performance and creative projects to our clients.</LightText>
                        <DarkSubtitle style={{fontSize: '1.2rem'}}>Compensation</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}>Base pay plus commission</LightText>
                        <DarkSubtitle>Responsibilities</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}> Cloud5 Agent will handle on boarding, managing, and maintaining client relationships. Cloud5 Agents will network and act as a representative for the Cloud5 brand and mission. Cloud5 Agents may travel from time to time to network and meet with client’s in person. You will have an opportunity to grow within our organization and will work closely with a team to deliver high performance and creative projects to our clients.</LightText>
                    </JobDescArea>
                    <UploadForm/>
            </Wrapper>
        </Aux>
    )
};

export default Agent;