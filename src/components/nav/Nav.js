import React, {useState, useEffect} from 'react';
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
import { DarkTitle } from '../../Global_Styles/global-styles';
// import './../../App.css';

const Nav = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [moved, setMoved] = useState(false);
    //FOR MOBILE
 

  const toggle = () => {
    setOpenMenu(!openMenu);
    console.log('toggling', openMenu)
  }

  const [ scrolled, setScrolled ] = useState()

  useEffect(_ => {
      const handleScroll = document.addEventListener('scroll', e => {
          let scrolled = document.scrollingElement.scrollTop;
          
          if (scrolled >= 128) {
              setMoved(true)
          } else {
              setMoved(false)
          }
      })

      document.removeEventListener('scroll', handleScroll)
  }, [])



    return (
      
        <NavWrapper style={{display: moved ? 'none' : null}}>
       <DarkTitle style={{ color: 'white'}}>Cloud5</DarkTitle>
       <NavLinks>
                <NavLink className='link' activeClassName='activeRoute' exact to='/'>
                    Home
                </NavLink>
                    <NavLink className='link' activeClassName='activeRoute' to='/about'>
                        About 
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute' to='/contact'>
                        Services
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute' to='/contact'>
                        Contact
                    </NavLink>
                    </NavLinks>
                {/* <NavLinks>
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
                    {/* </LinkContainer> 

                </NavLinks> */} 
        </NavWrapper>
    )
}


export default Nav;