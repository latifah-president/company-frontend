import styled from 'styled-components';
import { accentColor, } from '../../global-styles';

export const NavWrapper = styled.header`
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    position: absolute;
    width: 100%;
    z-index: 3;
    color: white;
    /* border: 1px solid red; */
`;

export const Logo = styled.img`
    width: 15%;
    /* border: 1px solid white; */
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-family: 'Montserrat' sans-serif;
    margin: 1rem 1.7rem;
    /* border: 1px solid orange; */
`;

export const LinkContainer = styled.nav`
    width: 60%; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid green; */

    .link {
        text-decoration: none;
        color: white;
        padding: 0 1rem .5rem;
        /* border: 1px solid white; */
    }

    .activeRoute {
    border-bottom: 1.5px solid ${accentColor};
 }
`;