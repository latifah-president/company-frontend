import styled from 'styled-components';
import { accentColor, whiteColor, darkColor} from '../../global-styles';

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

export const NavLinks = styled.section`
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