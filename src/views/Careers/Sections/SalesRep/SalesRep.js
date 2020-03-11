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
                    <DarkTitle>Sales Rep</DarkTitle>
                    <JobDescArea style={{alignItems: 'flex-start'}}>
                        <DarkSubtitle>Description</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}>
                            Cloud5 sales reps will have the option to work remotely from home. 
                        </LightText>
                        <DarkSubtitle style={{fontSize: '1.2rem'}}>Compensation</DarkSubtitle>
                        <LightText style={{fontSize: '1rem'}}>Commission only</LightText>
                        <DarkSubtitle>Responsibilities</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}> 
                            Sales reps will be in charge of prospecting and delivering qualified clients to the organization. 
                            They will be in charge of working with prospects to offer a clear understanding of each and every product and service offered under Cloud5, 
                            and they will work with the prospect to insure that the entire team has a clear understanding of the project so that we can deliver the best possible results.                        </LightText>
                    </JobDescArea>
                    <UploadForm/>
            </Wrapper>
        </Aux>
    )
};

export default SMM;