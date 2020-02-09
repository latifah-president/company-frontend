import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper, NavContainer, NavLinks, LinkContainer, Logo } from './nav-styles';

const Nav = () => {
    return (
        <NavWrapper>
            <NavContainer>
                <NavLinks>
                <Logo src={require('./../../assets/Cloud_5_logo_white.png')} alt='cloud 5 logo' />
                    <LinkContainer >
                        <Link className='link' to='/'>
                            Home
                        </Link>
                        <Link className='link' to='/contact'>
                            Contact Us
                        </Link>
                        <Link className='link' to='/services'>
                            Services
                        </Link>
                        <Link className='link' to='/portfolio'>
                            Portfolio
                        </Link>
                        <Link className='link' to='/login'>
                            Command Center
                        </Link>
                    </LinkContainer>
                    
                </NavLinks>
            </NavContainer>
        </NavWrapper>
    )
}

export default Nav;