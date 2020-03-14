import React, {useState} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { 
    InnerNavWrapper, 
    NavLinks, 
    Menu,
    TempLogo,
    MobileLinks
} from './nav-styles';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggle = () => {
    setOpenMenu(!openMenu);
    console.log('toggling', openMenu)
  }
    return (
        <InnerNavWrapper id='nav'>
            <TempLogo>cloud5</TempLogo>
            <NavLinks>
                <NavLink className='link' activeClassName='activeRoute' to='/about'>
                    About 
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' to='/contact'>
                    Services
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' exact to='/specialprojects'>
                    Special Projects
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' to='/contact'>
                    Contact
                </NavLink>
            </NavLinks>
            <Menu
                aria-expanded='false'
                aria-controls='menu'
                type='button' 
                data-toggle='dropdown' 
                aria-label='menu' 
                id='menu' 
                onClick={() => {toggle()}}
            >
              <FontAwesomeIcon icon={faBars} className='icon'/>
          </Menu>
          <MobileLinks className={openMenu ? 'open' : 'close'}>
                <NavLink className='mobilelink' activeClassName='activeRoute' to='/about'>
                    About 
                </NavLink>
                <NavLink className='mobilelink' activeClassName='activeRoute' to='/contact'>
                    Services
                </NavLink>
                <NavLink className='mobilelink' activeClassName='activeRoute' exact to='/specialprojects'>
                    Special Projects
                </NavLink>
                <NavLink className='mobilelink' activeClassName='activeRoute' to='/contact'>
                    Contact
                </NavLink>
            </MobileLinks>
        </InnerNavWrapper>
    )
}

export default withRouter(Nav);