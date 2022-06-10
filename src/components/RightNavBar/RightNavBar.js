import React from 'react';
import './RightNavBar.css';

import WidgetsIcon from '@mui/icons-material/Widgets';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserAvatar from '../UserAvatar/UserAvatar';


const RightNavBar = (props) => {
    const mainDivStyle = {
        width : '100px',
        height : '35px',
        borderRadius: '20px',
        border: '1px solid #242526',
        cursor: 'pointer',
        padding : '4px'
    }
    const imageContainerStyle = {
        height: '40px',
        width : '40px',
    }
    const imageStyle={
        objectFit: 'cover',
        objectPosition : '0 0',
    }
    const userNameStyle = {
        color : '#d5d7dc',
    }
    return(
        <div className='rightNavBarContainer'>
            {/* <div className='rightNavBarContainer__userAvatarAndProfile'>
                <div className='imageContainer'><img src={require('../../images/DSC_4240.JPG')} alt='user profile' className='rightNavBarContainer__userAvatarAndProfile__profilePicture' /></div>
                <h4 className="userAvatarAndProfile__userName">Rikesh</h4>
            </div> */}
            <UserAvatar url='DSC_4240.JPG' text='Rikesh' picAlt='user profile picture' userName='Rikesh' mainDivStyle={mainDivStyle} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} userNameStyle={userNameStyle} round={true} showText={true}/>
            <WidgetsIcon className='widgetsIcon' />
            <ChatIcon className='chatIcon' />
            <NotificationsIcon className='notificationsIcon' />
            <ArrowDropDownIcon className='arrowDropDownIcon' />
        </div>
    );
}

export default RightNavBar;