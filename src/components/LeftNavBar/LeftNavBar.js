import React from 'react';
import './LeftNavBar.css';

const LeftNavBar = () => {
    return(
        <div className='leftNavBarContainer'>
            <img src={require('../../static/images/logo/fb_logo.png')} alt="facebook logo" className="fb-logo"></img>
            <input type="text" placeholder="Search Facebook" className='search_inputBox'/>
        </div>
    );
}

export default LeftNavBar;