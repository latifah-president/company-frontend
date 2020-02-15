import styled from 'styled-components';
// import bg from '../../assets/elia-clerici-XIrIWKCQykg-unsplash.jpg';
import { blackColor } from '../../global-styles';



export const LandingPageWrapper = styled.section`
    /* background: linear-gradient(to bottom right, #3ca5ee 47%, #05fbfd 94%); */
    /* background-size: cover; */
    /* height: 100vh; */
    /* display: flex; */
    flex-direction: column;
    /* border: 1px solid red; */
`;
export const Overlay = styled.div`
     /* position: absolute;
        width: '100%';
        height: '100%';
        top: '0';
        left: '0';
        right: '0';
        bottom: '0';
        z-index: '2';
        background-color: '#4e4b4b80'; */
        &:before {
        background: ${blackColor}
      }
      &:after,&:before {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: block;
        left: 0;
        top: 0;
        /* border: 2px solid orange; */
        }
`;

//This is the wrapper for all the info after splash screen
export const ContentSection = styled.main`
  /* padding: 0 1rem; */
  /* display: flex;
  flex-direction: column; */
  background-color: #FFF;
  /* background-image: linear-gradient(to right top, #e5eafe, #c0c8e3, #9ca7c9, #7987b0, #556997); */
  /* border: 1px solid orange; */
`;
