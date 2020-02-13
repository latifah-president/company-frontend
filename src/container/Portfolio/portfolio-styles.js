import styled from 'styled-components';
import {grayGradient, whiteColor, accentColor} from './../../global-styles';

export const TabsWrapper = styled.section`
    width: 70%;
    /* border: 1px solid red; */
`;

export const TabContainer = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    /* border: 1px solid orange; */
  
    border-radius: .5rem;
    background-color: ${accentColor};
`;

export const Tabs = styled.button`
    /* width: 80%; */
    background: none;
    border: none;
    text-align: center;
    color: ${whiteColor}
    /* border: 1px solid pink; */
    /* background: green; */
`;

export const TabsContent = styled.section`
    /* display: none; */
    /* color: green;
    display: ${props => props.active ? 'block' : 'none' }; */
    border: 1px solid teal;


`;