import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,  } from '@fortawesome/free-solid-svg-icons';
import {MobileMenu, MobileLinks, CloseMenu} from './nav-styles';

const MobileNav = (props) => {
    const [openNav, setopenNav] = useState(false);
//click close menu 
//turn props.open to false
   
    console.log('mobile props', props)
    return (
        
        <MobileMenu >
          
          {/* {props.openNav ?    <CloseMenu  >
                <FontAwesomeIcon icon={faTimes}/>
            </CloseMenu> : null} */}
            <MobileLinks>
           
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
                        <NavLink className='link' activeClassName='activeRoute' to='/webdevelopment'>
                            Development
                        </NavLink>
                        {/* <DropDownMenu aria-expanded='false' aria-haspopup="true" className={openMenu ? 'open' : ''} onClick={ () => {toggle()}}>
                            Services
                           

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
     
                        </DropDownMenu> */}
                       

                        <NavLink className='link' activeClassName='activeRoute' to='/specialprojects'>
                            Special Projects
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/portfolio'>
                            Portfolio
                        </NavLink>
                        <NavLink className='link' activeClassName='activeRoute' to='/careers'>
                            Careers
                        </NavLink>
                        </MobileLinks>
                        
                        {/* <NavLink className='link' activeClassName='activeRoute' to='/login'>
                            Command Center Login
                        </NavLink> */}
                        {/* </MobileLinks> */}
                </MobileMenu> 
    )
};

export default MobileNav;