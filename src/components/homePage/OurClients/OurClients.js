import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Development from './../Development/Development';
import Marketing from './../Marketing/Marketing';
import {Wrapper, Container, ImageCard, LightText, DarkTitle, } from '../../../Global_Styles/global-styles';
import {BrandsContainer} from  './our-clients-style'
const OurClients = () => {
    return (
            <Wrapper column style={{position: 'relative', marginBottom: '2rem'}}>
                <DarkTitle>OUR CLIENTS</DarkTitle>
                <LightText small>
                Cloud5 takes pride in building websites that look good and perform even better. 
                Our job is to ensure you receive the highest quality product 
                and a seamless design that will showcase your company brand. 
                </LightText>
                <Development/>
                <Marketing/>
                <DarkTitle  small smallFont style={{ marginTop: '6rem', width: '40%', lineHeight: '2.5rem'}}>
                    OUR WORK SPEAKS FOR ITSELF, 
                CHECK OUT WHO ELSE WORKED WITH US
                </DarkTitle>

                <BrandsContainer large  small brands>
                    <ImageCard brand src={require('./../../../assets/Brands/precision_brand.png')} atl='precision painting plus'/>
                    <ImageCard brand src={require('./../../../assets/Brands/b.everly_brand.png')} alt='beverly'/>
                    <ImageCard brand small src={require('./../../../assets/Brands/autocrit_brands.png')} alt='auto crit'/>
                    <ImageCard brand small src={require('./../../../assets/Brands/Screen Shot 2020-03-15 at 3.54.41 PM.png')} alt='luxxly'/>              
                    <ImageCard brand src={require('./../../../assets/Brands/the_quad.png')} alt='BET the quad'/>
                    <ImageCard brand  src={require('./../../../assets/Brands/admiremyskin_brand.png')} alt='admire my skin'/>
                    <ImageCard brand src={require('./../../../assets/Brands/ASR_brands.png')} alt='asr'/>
                    <ImageCard brand src={require('./../../../assets/Brands/funkmeyers_brand.png')} alt='funkmeyers'/>
                    <ImageCard brand src={require('./../../../assets/Brands/lb_brand.png')} alt='l and b'/>
                </BrandsContainer>
                             {/* <div className='box'></div> */}

            </Wrapper>
    )
};

export default OurClients;