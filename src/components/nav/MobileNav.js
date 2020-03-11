import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import {MobileMenu, MobileLinks, Menu, MobileLogo} from './nav-styles';

const MobileNav = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
//click close menu 
//turn props.open to false
const toggle = () => {
    setOpenMenu(!openMenu);
    console.log('toggling', openMenu)
  }
    return (
        
        <MobileMenu >
            <MobileLogo src={require('./../../assets/Cloud_5_logo_white.png')} alt='cloud 5 logo' />
          <Menu 
        // aria-haspopup="true"
          aria-expanded="false"
          aria-controls="menu"
          type="button" 
          data-toggle="dropdown" 
          aria-label='menu' 
          id='menu' 
          onClick={() => {toggle()}}>
              {/* {openMenu ? <FontAwesomeIcon icone={faTimes} className='closeButton'/> :   <FontAwesomeIcon  className='openButton' icon={  faBars } /> } */}
              <FontAwesomeIcon icon={faBars} className={openMenu ? 'close' : 'openButton'}/>
          </Menu>
            {openMenu ? <MobileLinks >
           <Menu onClick={() => {toggle()}}>
               <FontAwesomeIcon icon={faTimes} className='closeButton' />
           </Menu>
                <NavLink className='link' activeClassName='activeRoute' exact to='/'>
                    Home
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' to='/about'>
                    About Us
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' to='/contact'>
                    Contact Us
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' to='/marketing'>
                    Marketing
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' to='/development'>
                    Development
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
           </MobileLinks> : null}
        </MobileMenu> 
    )
};

export default MobileNav;