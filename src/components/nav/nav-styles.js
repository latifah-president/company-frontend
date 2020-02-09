import styled from 'styled-components';

export const NavWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 2;
    color: white;

    /* border: 1px solid red; */
`;

export const NavContainer = styled.div`
        margin: 1rem auto;
        width: 100%;
        
        /* border: 1px solid orange; */
`;
export const Logo = styled.img`
    width: 20%;
    /* border: 1px solid red; */
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    font-family: 'Montserrat' sans-serif;
    /* align-items: center; */
    /* border: 1px solid red; */
`;

export const LinkContainer = styled.div`
    width: 60%; 
    margin-left: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid green; */

    .link {
        text-decoration: none;
        color: white;
    }
`;