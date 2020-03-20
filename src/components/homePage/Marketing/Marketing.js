import React from 'react';
import { 
    Wrapper, 
    Container, 
    CardContent, 
    SmallImageCard, 
    SmallCardDes,
    DarkTitle,
    LightText,
    Button,
    SmallWhiteText,
    SmallWhiteTitle, 
} from './../../../Global_Styles/global-styles';

const Marketing= () => {
    return (
        <Wrapper column style={{position: 'relative'}}>
            <DarkTitle>Marketing</DarkTitle>
            <LightText left style={{width: '82%'}}>
                Our job is to ensure the highest quality product, and a seamless 
                design that will showcase your company brand the way it deserves to be showcased.
            </LightText>

            <Container cards mobile>
                <CardContent white outline shadow>
                    <SmallImageCard src={require('./../../../assets/Marketing/cosmetic surgeon.jpg')} alt='luxxly co image'/>
                   
                        <SmallCardDes>
                            SEO for Plastic Surgeon Office
                        </SmallCardDes>
                
                    <Button href='/plastic-surgean-casestudy'><SmallWhiteTitle>View Case Study</SmallWhiteTitle></Button>
                </CardContent>
                <CardContent white outline shadow>
                    <SmallImageCard style={{width: '90%'}} src={require('./../../../assets/Marketing/Gaming-wandermonkey-feature-image.jpg')} alt='luxxly co image'/>
                        <SmallCardDes>
                            Marketing for Audio Game
                        </SmallCardDes>
                </CardContent>

                <CardContent white outline shadow>
                    <SmallImageCard src={require('./../../../assets/Marketing/eye clinic.jpg')} alt='luxxly co image'/>
                        <SmallCardDes>
                            SEO for Eye Doctor's Office
                        </SmallCardDes>
                        <Button href='/plastic-surgean-casestudy'><SmallWhiteTitle>View Case Study</SmallWhiteTitle></Button>

                </CardContent>

                <CardContent white outline shadow margin>
                    <SmallImageCard src={require('./../../../assets/Marketing/luxxlyinfluencer_marketing.jpg')} alt='luxxly co image'/>
                        <SmallCardDes>
                            Infulencer Campaign for Luxxly Co.
                        </SmallCardDes>

                </CardContent>
                {/* <CardContent white outline shadow margin style={{zIndex: 100}}>
                    <SmallImageCard src={require('./../../../assets/Marketing/cosmetic surgeon.jpg')} alt='luxxly co image'/>
                        <SmallCardDes>
                            Infulencer Campaign for Luxxly Co.
                        </SmallCardDes>
                </CardContent> */}

            </Container>
            <div className='box'></div>
        </Wrapper>
    )
};

export default Marketing;


