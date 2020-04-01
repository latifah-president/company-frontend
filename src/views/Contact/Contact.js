import React from 'react';
import ContactForm from './../../container/Forms/ContactForm';
import Aux from './../../HOC/Aux';
import {
    Wrapper,
    Container, 
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
                        <HeaderImage src={require('./../../assets/Views/development/development.jpg')} alt='image'/>
            </Header>
                <Wrapper column>
                    <Container column>
                        <DarkTitle>Get In Touch</DarkTitle>
                        <LightText >	
                        Contact us today and we can provide you with a 
                        custom quote and work out a payment arrangement to fit your budget
                        </LightText>
                       
                    </Container>
                        <ContactForm/>
                </Wrapper>
                </Aux>
    )
}

export default Contact