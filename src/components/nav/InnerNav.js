import React, {useState, useEffect} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { 
    InnerNavWrapper, 
    NavLinks, 
} from './nav-styles';
import { DarkTitle } from '../../Global_Styles/global-styles';

const InnerNav = () => {
    const [stick, setStick] = useState(false);
    useEffect(() => {
        const nav = document.getElementById('nav');
        const sticky = nav.offsetTop;
        console.log(sticky, 'sticky')
        const scrollCallBack = window.addEventListener("scroll", () => {
          if (window.pageYOffset > sticky) {
            setStick(true)
           
          } else {
           setStick(false)
          }
        });
        return () => {
          window.removeEventListener("scroll", scrollCallBack);
        };
      }, []);

    console.log(stick, 'stick')
    return (
        <InnerNavWrapper id='nav' className={stick ? 'stick' : null}>
            <DarkTitle>cloud5</DarkTitle>
            <NavLinks inner>
               
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
        </InnerNavWrapper>
    )
}

export default withRouter(InnerNav);