import styled, {keyframes} from 'styled-components';
import { accentColor, whiteColor, darkColor, overlayColor, tablet, smrtphn} from '../../global-styles';

const slideInRight = keyframes`
    {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const NavWrapper = styled.header`
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    position: absolute;
    width: 100%;
    z-index: 5;
    color: white;
    /* border: 1px solid red; */

    @media only screen and (max-width: ${tablet}) {
        flex-direction: flex-end;
        border: 1px solid white;
    }

    @media only screen and (min-width: ${smrtphn}) {
        flex-direction: flex-end;
        /* border: 1px solid orange; */
    }

`;

export const Logo = styled.img`
    width: 15%;
    /* border: 1px solid white; */
`;

export const NavLinks = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-family: 'Montserrat' sans-serif;
    margin: 1rem 1.7rem;
    /* border: 1px solid orange; */
    .close {
        display: none;
    }
    .open {
        display: block;
    }
`;

export const LinkContainer = styled.nav`
    width: 60%; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid green; */
    @media only screen and (max-width: ${tablet}) {
        display: none;
        border: 1px solid red;    
}

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

export const DropDown = styled.ul`
    background: #ffffffa1;
    list-style-type: none;
    position: absolute;
    top: 8rem;
    right: 34rem;
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 10%;
    /* align-items: center; */
    justify-content: space-around;
    align-self: center;
    border-radius: .5rem;
    height: 100px;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    /* border: 1.5px solid #ffffff81; */
    /* border: 1px solid red; */
  
`;

export const ListItem = styled.li`
text-decoration: none;
margin: 0 auto;
    /* border: 1px solid green; */

    .dropdownLink {
        color: ${darkColor};

    }
    
`;

export const DropDownMenu = styled.button`
    border: none;
    background: none;
    color: ${whiteColor};
        font-size: 1.11rem;

    /* border: 1.5px solid white; */

    .chevron {
     margin-left: 1rem;
     /* border: 2px solid orange; */
 }

`;

export const Menu = styled.button`
    border: 1px solid red;
    display: none;
    z-index: 6;

    .close {
        display: none;
    }
    @media only screen and (max-width: ${tablet}) {
        display: block;
        border: 1px solid red;
        background: none;
        color: ${whiteColor};
        font-size: 1.5rem;    
}

`;

export const MobileMenu = styled.nav`
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat' sans-serif;
    left: 53rem;
    top: 0;
    height: 91.2vh;
    animation: ${slideInRight} 1s ease-in-out forwards;
    padding-top: 1.5rem;
    /* margin: 1rem 1.7rem; */
    position: absolute;
    background: ${whiteColor};
    /* top: 10rem; */
    z-index: 4;

    width: 50%;
    .link {
        text-decoration: none;
        color: ${darkColor};
        padding: 0 1rem .5rem;

        /* border: 1px solid white; */
    }
    .activeRoute {
    border-bottom: 1.5px solid ${accentColor};
 }
    @media only screen and (min-width: ${smrtphn}) {
        left: 17rem;
        height: 56.2rem;

    }
`;

export const MobileLinks = styled.section`
    margin-top: 5rem;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;

`;

export const CloseMenu = styled.button`
    color: pink;
    background: none;
    position: absolute;
    /* top: 3.8rem; */
    right: 2rem;
    color: ${darkColor};
    font-size: 1.5rem; 
    z-index: 5;
    border: 2px solid green;
`;