import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import MobileNav from './MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { 
    NavWrapper, 
    NavLinks, 
    LinkContainer, 
    Logo,
    DropDownMenu,
    DropDown,
    ListItem,
    Menu,
    CloseMenu, 
} from './nav-styles';


const Nav = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    //FOR MOBILE
    const [openNav, setopenNav] = useState(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
    console.log('toggling', openMenu)
  }


  const toggleMobileNav = () => {
      setopenNav(!openNav);
      // console.log('toggling', openMenu)
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

                    {openNav ? 
                    //MAKE CLOSE MENU FADE IN 
                    <CloseMenu onClick={() => {toggleMobileNav()}}> <FontAwesomeIcon icon={faTimes}/></CloseMenu> : 
                     <Menu onClick={() => {toggleMobileNav()}} role='menu' aria-expanded={openNav}  aria-controls='mobile nav'>
                     <FontAwesomeIcon  icon={ faBars }/>
                     
                 </Menu>
                    }
                   
                      {openNav ? <MobileNav open={openNav} aria-label='mobile navigation' id='mobile nave'/> : null}
                      {/* <MobileNav/> */}
                </NavLinks>
        </NavWrapper>
    )
}


export default Nav;