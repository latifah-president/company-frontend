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
    /* flex-direction: column; */
    /* align-items: center; */
    position: absolute;
    width: 100%;
    z-index: 5;
    color: white;
    /* border: 1px solid red; */

 

    @media only screen and (max-width: ${smrtphn}) and (max-width: ${tablet}) {
     
        display: none;
        margin: 0 auto;

    }

/* @media only screen and (min-width: ${laptop}) {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    z-index: 5;
    color: white;
} */
`;

export const Logo = styled.img`
    width: 15%;
    /* border: 1px solid white; */
`;

export const NavLinks = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    /* justify-content: space-between; */
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
    @media only screen and (max-width: ${smrtphn}){
        display: none;
        /* padding: 0; */
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

@media only screen and (max-width: ${tablet}) {
    /* border: 1px solid red;
    width:95%; */
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
 
  /* &:hover .dropdown-content {
  display: block;
} */
    /* background: #ffffffa1;
    list-style-type: none;
    position: absolute;
    top: 8rem;
    right: 34rem;
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 10%;
    justify-content: space-around;
    align-self: center;
    border-radius: .5rem;
    height: 100px;
    box-shadow: 0 16px 10px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); */
  
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
    /* display: none; */
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
    /* @media only screen and (max-width: ${smrtphn}) { */
     
        /* background: none;
        color: ${whiteColor};
        font-size: 1.5rem;  */

     
/* } */

/* @media only screen and (max-width: ${laptop}) {
        background: none;
        color: ${whiteColor};
        font-size: 1.5rem; 
} */
`;

export const MobileMenu = styled.nav`
  /* overflow: hidden; */
  /* background-color: #333; */
  display: none;
 
    /* flex-direction: column; */
    /* align-items: center; */
    position: absolute;
    width: 100%;
    z-index: 5;
    /* border: 1px solid green; */
    /* display: flex; */
    /* flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Montserrat' sans-serif; */
  
  

    /* margin: 1rem 1.7rem; */
    /* position: absolute;
    background: ${whiteColor}; */
    /* top: 10rem; */
     z-index: 4;

    /* width: 50%; */ 
    margin: 0 auto;

    .activeRoute {
    border-bottom: 1.5px solid ${accentColor};
 }
    @media only screen and (max-width: ${smrtphn}) and (max-width: ${tablet}) {
        /* left: 17rem;
        height: 56.2rem; */
        /* display: block; */
        /* border: 1px solid white; */
        display: flex;
  /* padding: 1rem; */
  /* width: 90%; */
  justify-content: space-between;
    }
    
`;

export const MobileLinks = styled.section`
    /* margin-top: 5rem;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; */
    margin: 0;
    color: ${darkColor};
     position: absolute;
     /* top: 38px; */
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 58vh;
     width: 100%;
     justify-content: space-between;
     background-color: ${whiteColor};
     border: 1px solid ${darkColor};
     animation: ${slideInRight} 1s ease-in-out forwards;

/*      
    @media only screen and (min-width: ${smrtphn}) {
     color: ${darkColor};
     position: absolute;
     top: 38px;
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 38vh;
     width: 100%;
     justify-content: space-between;
     background-color: ${whiteColor};
     border: 1px solid red;

    } */
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
    /* top: 3.8rem; */
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