import styled from 'styled-components';

export const ServicesWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: radial-gradient(ellipse at center,#585858 0,#232323 100%); */
    /* border: 1px solid red; */
`;

export const ServicesContent = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5em;
    /* border: 1px solid black; */
`;

export const ServicesTitle = styled.h2`
    color: #3B4858;
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 1.5rem;
    /* border: 1px solid teal; */
`;

export const ServicesText = styled.h5`
    color: #999;
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-top: 1.8rem;
    font-family: 'Roboto';
    width: 50%;
    font-weight: 300;
    /* border: 1px solid orange; */
`;

export const ServiceBox = styled.article`
    display: flex;
    justify-content: space-around;
    width: 80%;
    flex-wrap: nowrap;
    margin: 2rem auto 2rem auto;
    /* border: 1px solid orange; */
`;

export const Service = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    /* border: 1px solid black; */
`;

export const ServiceLink = styled.a`
    cursor: pointer;
`;
export const ServiceBoxBgImage = styled.img`
    width: 99.9%;
    height: 15rem;
    border-radius: .5rem;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

`;

export const ServiceBoxContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    line-height: 1.5rem;
    z-index: 1;
    /* border: 1.5px solid green; */
`;

export const BottomCtnIcon = styled.div`
    /* border: 1px solid black; */
`;

export const ServiceBoxTitle = styled.h4`
    color: #3C4858;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    /* border: 1px solid orange; */
 `;

export const ServiceBoxDes = styled.p`
   color: #999;
   font-weight: 550;
   font-size: 1rem;
   margin-top: 0rem;
   margin-bottom: 3rem;
   line-height: 1.9rem;
   width: 90%;
   /* border: 1px solid salmon; */
`;