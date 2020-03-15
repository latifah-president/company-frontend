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
    console.log('nav open?', openMenu)
  }
    return (
        <InnerNavWrapper id='nav'>
            <NavLink className='link' activeClassName='activeRoute' to='/'>
            <TempLogo>cloud5</TempLogo>
            </NavLink>
            
            <NavLinks>
                <NavLink  className='link' activeClassName='activeRoute' to='/about'>
                    About 
                </NavLink>
                <NavLink  className='link' activeClassName='activeRoute' to='/services'>
                    Services
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' exact to='/specialprojects'>
                    Special Projects
                </NavLink>
                <NavLink  className='link' activeClassName='activeRoute' to='/contact'>
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
                <NavLink onClick={ () => {toggle()}} className='mobilelink' activeClassName='activeRoute' to='/about'>
                    About 
                </NavLink>
                <NavLink onClick={ () => {toggle()}} className='mobilelink' activeClassName='activeRoute' to='/development'>
                    Services
                </NavLink>
                <NavLink onClick={ () => {toggle()}} className='mobilelink' activeClassName='activeRoute' exact to='/specialprojects'>
                    Special Projects
                </NavLink>
                <NavLink onClick={ () => {toggle()}} className='mobilelink' activeClassName='activeRoute' to='/contact'>
                    Contact
                </NavLink>
            </MobileLinks>
        </InnerNavWrapper>
    )
}

export default withRouter(Nav);