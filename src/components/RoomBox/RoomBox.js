import React from 'react';
import './RoomBox.css';

import VideoCallIcon from '@mui/icons-material/VideoCall';
import UserAvatar from '../UserAvatar/UserAvatar';

const RoomBox = (props) => {
    let imageContainerStyle={
        height: '40px',
        width : '40px',
    };
    let imageStyle={
        objectFit: 'cover',
        objectPosition : '0 0',
    };
  return (
    <div className='roomBoxContainer'>
        <div className='roomBoxContainer__createRoom'>
            <VideoCallIcon style={{marginRight : '8px'}} />Create Room
        </div>
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
        <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url='DSC_4240.JPG' picAlt='user-avatar' />
    </div>
  )
}

export default RoomBox;