import styled from 'styled-components';
import {tablet, tabletsm, } from './../../Global_Styles/global-styles';

export const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`;

export const ServiceLink = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40%;
 

  .link {
    cursor: pointer;
  }

  @media only screen and (max-width: ${tablet}) {
    width: 70%;
  }

  @media only screen and (max-width: ${tabletsm}) {
    display: none;
  }
`;