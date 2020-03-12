import styled, {keyframes} from 'styled-components';
import { accentColor, whiteColor, darkColor, tablet, smrtphn, laptop} from '../../Global_Styles/global-styles';

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
    position: fixed;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
    color: white;
    margin-top: 1rem;
    /* border: 1px solid red; */


 .changeNav {
     display: none
 }
 
 

    @media only screen and (max-width: ${smrtphn}) and (max-width: ${tablet}) {
     
    

    }


`;

export const Logo = styled.img`
    width: 15%;
    /* border: 1px solid white; */
`;

export const NavLinks = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: ${props => props.inner ? '40%' : '80%'};
    font-family: 'Montserrat' sans-serif;
    margin: 1rem 1.7rem;
    /* border: 1px solid orange; */
    .close {
        display: none;
    }
    .open {
        display: block;
    }
    /*new styles */
    .link {
        text-decoration: none;
        color: ${whiteColor};
        padding: 0 1rem .5rem;
       
    }

    .activeRoute {
    border-bottom: 1.5px solid ${accentColor};
 }
`;

export const LinkContainer = styled.nav`
    @media only screen and (max-width: ${smrtphn}){
        display: none;
        /* padding: 0; */
}

  

@media only screen and (max-width: ${tablet}) {
    display: none;
}
`;

export const DropDown = styled.ul`
display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1; 
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
    background: none;
    font-size: 1.5rem;
    /* border: 1px solid red; */
    z-index: 6;
    border: none;
    .close {
        display: none;
    }

    .closeButton {
        color: ${darkColor};
        align-self: flex-end;
        /* border: 1px solid green; */
        margin-top: 1rem;
        right: 2rem;
        position: absolute;
    }

    .openButton {
        color: ${whiteColor};
        margin-right: 2rem;
        /* border: 1px solid orange; */

    }
`;

export const MobileMenu = styled.nav`
  display: none;
    position: absolute;
    width: 100%;
    z-index: 5;
    margin: 0 auto;

    .activeRoute {
    border-bottom: 1.5px solid ${accentColor};
 }
    @media only screen and (max-width: ${smrtphn}) and (max-width: ${tablet}) {
        display: flex;
  justify-content: space-between;
    }
    
`;

export const MobileLinks = styled.section`
    margin: 0;
    color: ${darkColor};
     position: absolute;
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 58vh;
     width: 100%;
     justify-content: space-between;
     background-color: ${whiteColor};
     border: 1px solid ${darkColor};
     animation: ${slideInRight} 1s ease-in-out forwards;
    .link {
        font-size: 1.3rem;
        text-decoration: none;
        color: ${darkColor};
        padding: .5rem 1rem;

        /* border: 1px solid white; */
    }

    .close {
        display: none;
    }
`;

export const CloseMenu = styled.button`
    color: pink;
    background: none;
    position: absolute;
    right: 2rem;
    color: ${darkColor};
    font-size: 1.5rem; 
    z-index: 5;
    /* border: 2px solid green; */
`;

export const MobileLogo = styled.img`
    width: 30%;
    padding-top: 1rem;
    /* border: 1px solid red; */
`;

/*INNER NAV */

export const InnerNavWrapper = styled.nav`
    background-color: ${whiteColor};
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    /* box-shadow:  0px 4px 15px rgba(0, 0, 0, 0.07); */
    box-shadow: 0 16px 10px -12px rgba(38, 148, 232, 0.056), 0 4px 25px 0px  rgba(38, 148, 232, 0.12), 0 8px 10px -5px  rgba(38, 148, 232, 0.2);

    z-index: 1000;
    /* box-shadow: 0 16px 10px -12px rgba(37, 232, 121, 0.056), 0 4px 25px 0px rgba(37, 232, 121, 0.12), 0 8px 10px -5px rgba(37, 232, 121, 0.2); */
    .link {
        text-decoration: none;
        color:  ${darkColor};
        padding: 0 1rem .5rem;
    }

  
`;