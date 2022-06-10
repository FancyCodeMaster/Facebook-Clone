import React from 'react';
import './NavBar.css';

import LeftNavBar from '../LeftNavBar/LeftNavBar';
import MiddleNavBar from '../MiddleNavBar/MiddleNavBar';
import RightNavBar from '../RightNavBar/RightNavBar';

const NavBar = () => {
    return(
        <div className="navBarContainer">
            <div className='navBarContainer__leftNavBarContainer'>
                <LeftNavBar />
            </div>
            <div className='navBarContainer__middleNavBarContainer'>
                <MiddleNavBar />
            </div>
            <div className='navBarContainer__rightNavBarContainer'>
                <RightNavBar />
            </div>
        </div>
    );
}

export default NavBar;