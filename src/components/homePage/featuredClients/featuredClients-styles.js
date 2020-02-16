import styled from 'styled-components';
import excercise from './../../../assets/excercise2.jpg';

export const FeaturedWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    border: 1px solid red;
`;


export const FeaturedContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5em;
    /* border: 1px solid black; */
`;

export const FeatureCardArea = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2);
    grid-gap: 50px;
    margin-bottom: .5rem;
    width: 80%;

    @media only screen and (max-width: 900px) {
        /* display: flex;
        flex-direction: column; */
        display: grid;
grid-template-columns: repeat(1, 1fr);
grid-template-rows: repeat(1, 1fr);
grid-column-gap: 0px;
grid-row-gap: 30px;
/* width: 50%; */
        border: 3px solid black;
    }
`;
export const FeaturedTitle = styled.h2`
    color: #3B4858;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 1.5rem;
    /* border: 1px solid teal; */
`;

export const Card = styled.div`
    /* border: 2px solid pink; */
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
    position: relative;
    height: 250px;
  box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  &:hover {
    -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.13);
  }

  background: url(${excercise}) center center no-repeat;;
-webkit-background-size: cover;
-moz-background-size: cover;
`;

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 15.6rem;
    border-radius: .2rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    /* background-color: #4e4b4b80; */
background-color: rgba(0,0,0,0.5);
/* border: 1px solid green; */
`;

export const CardBackground = styled.img`
    width: 99.9%;
    height: 15rem;
    border-radius: .2rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const CardContent = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: 0 auto;
  z-index: 2;
  /* border: 1px solid green; */
`;

export const ProjectTitle = styled.h2`
    color: #FFFFFF;
    margin: 0;
    /* border: 1px solid red; */
    width: 100%;
    font-size: 1.4rem;
    font-weight: 550;
`;

export const ProjectText = styled.p`
    color: #FFFFFF;
    font-weight: 500;
    line-height: 1.7rem;
    /* border: 1px solid white; */
`;