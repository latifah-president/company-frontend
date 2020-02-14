import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrapper, NavLinks, LinkContainer, Logo } from './nav-styles';


const Nav = () => {
    return (
        <NavWrapper>
                <NavLinks>
                <Logo src={require('./../../assets/Cloud_5_logo_white.png')} alt='cloud 5 logo' />
                    <LinkContainer >
                        <NavLink className='link' activeClassName='activeRoute' exact to='/'>
                            Home
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/about'>
                            About Us
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/contact'>
                            Contact Us
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/services'>
                            Services
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/specialprojects'>
                            Special Projects
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/portfolio'>
                            Portfolio
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/careers'>
                            Careers
                        </NavLink>
                        {/* <NavLink className='link' activeClassName='activeRoute' to='/login'>
                            Command Center Login
                        </NavLink> */}
                    </LinkContainer>                    
                </NavLinks>
        </NavWrapper>
    )
}

export default Nav;