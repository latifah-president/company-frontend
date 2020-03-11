import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
// import MobileNav from './MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown,  } from '@fortawesome/free-solid-svg-icons';
import { 
    NavWrapper, 
    NavLinks, 
    LinkContainer, 
    // Logo,
    DropDownMenu,
    DropDown,
    ListItem,
} from './nav-styles';

const Nav = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    //FOR MOBILE
 

  const toggle = () => {
    setOpenMenu(!openMenu);
    console.log('toggling', openMenu)
  }


//   const toggleMobileNav = () => {
//       setopenNav(!openNav);
//       // console.log('toggling', openMenu)
//     }
    return (
        <NavWrapper>
                        {/* <Logo src={require('./../../assets/Cloud_5_logo_white.png')} alt='cloud 5 logo' /> */}

                <NavLinks>
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
                        {/* <DropDownMenu class="dropdown">
    <div class="dropbtn">
        Services
        <FontAwesomeIcon icon={faChevronDown} className='chevron' onClick={ () => {toggle()}}/>

      <i class="fa fa-caret-down"></i>
    </div>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </DropDownMenu>  */}
                        <DropDownMenu aria-expanded='false' aria-haspopup="true" className={openMenu ? 'open' : ''} onClick={ () => {toggle()}}>
                            Services
                           

                        <FontAwesomeIcon icon={faChevronDown} className='chevron' onClick={ () => {toggle()}}/>
                        {openMenu ?                    
                        <DropDown>
                            <ListItem>
                                <NavLink className='dropdownLink' to='/marketing'>Marketing</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink  className='dropdownLink' to='/development'>Development</NavLink>
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

                    {/* {openNav ? 
                    //MAKE CLOSE MENU FADE IN 
                    <CloseMenu onClick={() => {toggleMobileNav()}}> <FontAwesomeIcon icon={faTimes}/></CloseMenu> : 
                     <Menu onClick={() => {toggleMobileNav()}} role='menu' aria-expanded={openNav}  aria-controls='mobile nav'>
                     <FontAwesomeIcon  icon={ faBars }/>
                     
                 </Menu>
                    } */}
                   
                      {/* {openNav ? <MobileNav open={openNav} aria-label='mobile navigation' id='mobile nave'/> : null} */}
                      {/* <MobileNav/> */}
                </NavLinks>
        </NavWrapper>
    )
}


export default Nav;