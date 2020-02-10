import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrapper, NavContainer, NavLinks, LinkContainer, Logo } from './nav-styles';


const Nav = () => {
    return (
        <NavWrapper>
            {/* <NavContainer> */}
                <NavLinks>
                <Logo src={require('./../../assets/Cloud_5_logo_white.png')} alt='cloud 5 logo' />
                    <LinkContainer >
                        <NavLink className='link' activeClassName='activeRoute' to='/'>
                            Home
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/contact'>
                            Contact Us
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/services'>
                            Services
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/portfolio'>
                            Portfolio
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/login'>
                            Command Center
                        </NavLink>
                    </LinkContainer>
                    
                </NavLinks>
            {/* </NavContainer> */}
        </NavWrapper>
    )
}

export default Nav;