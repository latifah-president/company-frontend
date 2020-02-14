import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { 
    NavWrapper, 
    NavLinks, 
    LinkContainer, 
    Logo,
    DropDownMenu,
    DropDown,
    ListItem 
} from './nav-styles';


const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
    console.log('toggling', openMenu)
  }

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
                        <DropDownMenu aria-expanded='false' aria-haspopup="true" className={openMenu ? 'open' : ''} onClick={ () => {toggle()}}>
                        {/* <NavLink  className='link' activeClassName='activeRoute' to='/services'> */}
                            Services
                           
                        {/* </NavLink> */}

                        <FontAwesomeIcon icon={faChevronDown} className='chevron' onClick={ () => {toggle()}}/>
                        {openMenu ?                    
                        <DropDown>
                            <ListItem>
                                <NavLink className='dropdownLink' to='/marketing'>Marketing</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink  className='dropdownLink' to='/webdevelopment'>Web Development</NavLink>
                            </ListItem>
                        </DropDown> : null}
     
                        </DropDownMenu>
                       

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