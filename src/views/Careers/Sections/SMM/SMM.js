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

const SMM = () => {
    return (
        <Aux>
            <Header>
                <LightOverlay></LightOverlay>
                <HeaderImage src={require('../../../../assets/Views/careers_page.jpg')} alt='Careers'/>
            </Header>
            <Wrapper>
                    <DarkTitle>Social Media Manager</DarkTitle>
                    <JobDescArea style={{alignItems: 'flex-start'}}>
                    <DarkSubtitle>Description</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}>
                        The social media manager will be in charge of the overall management of Social Media services offered by Cloud5. 
                        </LightText>
                        <DarkSubtitle style={{fontSize: '1.2rem'}}>Compensation</DarkSubtitle>
                        <LightText style={{fontSize: '1rem'}}>Project based only</LightText>
                        <DarkSubtitle>Responsibilities</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}> 
                            They will handle a number of different client accounts, post daily to social media platforms, as well as create content and blog post. 
                            Additionally the social media manager will develop and execute social media campaigns, lead the Content Calendar, and manage customer service. 
                            A qualified social media manager must be able to manage a number of clients, and communicate effectively with other marketing team members to accomplish goals and plans. 
                        </LightText>
                    </JobDescArea>
                    <UploadForm/>
            </Wrapper>
        </Aux>
    )
};

export default SMM;