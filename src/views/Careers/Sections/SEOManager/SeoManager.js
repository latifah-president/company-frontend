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

const SeoManager = () => {
    return (
        <Aux>
            <Header>
                <LightOverlay></LightOverlay>
                <HeaderImage src={require('../../../../assets/Views/careers_page.jpg')} alt='Careers'/>
            </Header>
            <Wrapper>
                    <DarkTitle>SEO Manager</DarkTitle>
                    <JobDescArea style={{alignItems: 'flex-start'}}>
                        <DarkSubtitle>Description</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}>
                            An SEO manager will be in charge of the overall management of SEO services offered by Cloud5. They will plan and execute SEO packaged services
                        </LightText>
                        <DarkSubtitle style={{fontSize: '1.2rem'}}>Compensation</DarkSubtitle>
                        <LightText style={{fontSize: '1rem'}}>Project based only</LightText>
                        <DarkSubtitle>Responsibilities</DarkSubtitle>
                        <LightText style={{fontSize: '1rem', width: '100%'}}> 
	Keyword Research
	Link Building
	Market Research
	Create and execute On-page and Off-page SEO strategies
	Conduct audits
	Fix technical SEO issues
	Content Creation
	Analyzing clients’ web analytics accounts to support the client’s SEO campaigns	Analyze analytics and measurements to support the client's SEO strategy. 

                        </LightText>
                    </JobDescArea>
                    <UploadForm/>
            </Wrapper>
        </Aux>
    )
};

export default SeoManager;