import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import './StatusBox.css';

const StatusBox = (props) => {
    let imageContainerStyle={
        height: '40px',
        width : '40px',
    };
    let imageStyle={
        objectFit: 'cover',
        objectPosition : '0 0',
    };
  return (
    <div className='statusBoxContainer'>
        <div className='statusBoxContainer__postBox'>
            <UserAvatar imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} round={true} showText={false} url='DSC_4240.JPG' picAlt='user-avatar' />
            <h4>What's on your mind , Rikesh?</h4>
        </div>
        <hr />
        <div className='statusBoxContainer__postOptions'>
            <div className='statusBoxContainer__postOptions__liveVideo'>
                <PhotoCameraFrontIcon style={{marginRight : '5px' , color : '#b5394e'}} />Live Video
            </div>
            <div className='statusBoxContainer__postOptions__photoOrVideo'>
                <PhotoLibraryIcon style={{marginRight : '5px' , color : '#45bd62'}} />Photo/Video
            </div>
            <div className='statusBoxContainer__postOptions__activity'>
                <EmojiEmotionsIcon style={{marginRight : '5px' , color : '#f7b928'}} />Feeling/Activity
            </div>
        </div>
    </div>
  )
}

export default StatusBox;