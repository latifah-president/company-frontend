import React from 'react';
import ContactForm from './../../container/Forms/ContactForm';
import Aux from './../../HOC/Aux';
import {
    Wrapper,
    ContentArea, 
    Header,
    LightOverlay, 
    DarkTitle, 
    LightText,
    HeaderImage,
} from './../../Global_Styles/global-styles';


const Contact = () => {

    return (
        <Aux>
            <Header >
                <LightOverlay></LightOverlay>
                        <HeaderImage src={require('./../../assets/Views/development/development.jpg')} alt='image'/>
            </Header>
                <Wrapper>
                    <ContentArea>
                        <DarkTitle>Get In Touch</DarkTitle>
                        <LightText >	
                        Contact us today and we can provide you with a 
                        custom quote and work out a payment arrangement to fit your budget
                        </LightText>
                       
                    </ContentArea>
                        <ContactForm/>
                </Wrapper>
                </Aux>
    )
}

export default Contact