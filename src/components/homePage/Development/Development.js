import React from 'react';
import {
    Wrapper, 
    LightText,
    DarkTitle,
    CardContent, 
    SmallImageCard,
    Container,
    SmallCardDes,
} from '../../../Global_Styles/global-styles';


const Development = () => {
    return (
         <Wrapper column style={{ marginTop: '2rem'}}>
            <DarkTitle left smallFont pad>WEB &amp; MOBILE DEVELOPMENT</DarkTitle>
            {/* <LightText  >
               We take pride in building websites that look good and perform even better. 
                We turn your ideas and vision into reality. 
             </LightText> */}
            <Container>
                <CardContent white outline shrink>
                    <SmallImageCard src={require('./../../../assets/Development/luxxlyco_dev.jpg')} alt='luxxly co image'/>
                    <div style={{lineHeight: '.1px'}}>
                        <SmallCardDes>
                            Luxxly Co.
                        </SmallCardDes>
                        <SmallCardDes>
                            Modern accessories, sustainably souced
                        </SmallCardDes>
                    </div>
                </CardContent>

                <CardContent white outline shrink>
                    <SmallImageCard  src={require('./../../../assets/Development/fullscalemedia_dev.jpg')} alt='luxxly co image'/>
                    <div style={{lineHeight: '.1px'}}>
                        <SmallCardDes>
                            Full Scale Media
                        </SmallCardDes>
                        <SmallCardDes>
                            A Public Relations And Social Media Firm
                        </SmallCardDes>
                    </div>
                </CardContent>

                <CardContent white outline shrink>
                    <SmallImageCard src={require('./../../../assets/Development/piccadlygroup_dev.jpg')} alt='luxxly co image'/>
                    <div style={{lineHeight: '.1px'}}>
                        <SmallCardDes>
                            Piccadilly Group
                        </SmallCardDes>
                        <SmallCardDes>
                            European-based consultancy 
                        </SmallCardDes>
                    </div>
                </CardContent>
            </Container>
        </Wrapper>
    )
}

export default Development;