import styled from 'styled-components';
import {grayGradient, whiteColor, accentColor} from './../../global-styles';

export const TabsWrapper = styled.section`
    width: 75%;
    /* border: 1px solid green; */
    height: 80px;
    margin-top: 1rem;
`;

export const TabContainer = styled.section`
    /* display: flex;
    justify-content: space-between; */
    /* padding: 1rem 0; */
    /* border: 2px solid orange; */
  /* height: 100px; */
    border-radius: .5rem;
    /* background-color: ${accentColor}; */

    
display: grid;
grid-template-columns: repeat(8, 1fr);
/* grid-template-rows: repeat(5, 1fr); */
grid-column-gap: .5rem;
/* grid-row-gap: 0px; */
text-align: center;
justify-content: center;

/* .div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }
.div5 { grid-area: 1 / 5 / 2 / 6; }
.div6 { grid-area: 1 / 6 / 2 / 7; }
.div7 { grid-area: 1 / 7 / 2 / 8; }
.div8 { grid-area: 1 / 8 / 2 / 9; } */
`;

export const Tabs = styled.div`
    /* width: 100%; */
    background: transparent;
    cursor: pointer;
    /* height: 100px; */
/* 
    .activeBtn {
    border-bottom: 1px solid ${whiteColor};

} */
    color: ${whiteColor};
    /* border-top: none;
    border-left: none;
    border-right: 1px solid pink;
    border-bottom: 1px solid pink;
    border-bottom-right-radius: .5rem; */
    background-color: ${accentColor};

    /* border: 1px solid pink; */
    height: 60px;
    text-align: center;
    /* border-radius: .5rem; */

    /* background: green; */
`;

export const TabsContent = styled.section`
    /* margin-top: 10rem; */
    /* display: none; */
    /* color: green;
    display: ${props => props.active ? 'block' : 'none' }; */
    border: 1px solid teal;


`;