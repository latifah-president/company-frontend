import React from 'react';
import { 
    ServicesWrapper, 
    ServicesContent, 
    ServicesHeader, 
    ServicesTitle, 
    ServicesText, 
    ServiceBox,
    ServiceBoxImage,
    ServiceBoxContent,
    ServiceBoxHeader,
    BottomCtnIcon,
    ServiceBoxTitle,
    ServiceBoxDes, 
} from './services-styles'
const Services = () => {
    return (
        <ServicesWrapper>
            <ServicesContent>
                <ServicesHeader>
                    <ServicesTitle>Why Our Services Are The Best</ServicesTitle>
                </ServicesHeader>
                <ServicesText>
                Insuring that when our clients trust us with their projects, 
                it feels like they are trusting a friend,and a partner, while 
                also obtaining the power of working with a team of experienced developers 
                and problem solvers.
                </ServicesText>
            </ServicesContent>
            <ServiceBox>
                
                <ServiceBoxContent>
                    <ServiceBoxHeader>
                        <ServiceBoxTitle>Web design and development</ServiceBoxTitle>
                    
                    </ServiceBoxHeader>
                    <ServiceBoxDes>
                            At some Digital agencies, website development is a second thought. 
                            At Cloud5, we take pride in building websites that look good and perform even better. 
                            We turn your ideas and vision into reality.
                        </ServiceBoxDes>
                </ServiceBoxContent>
            </ServiceBox>
        </ServicesWrapper>
    )
};

export default Services;