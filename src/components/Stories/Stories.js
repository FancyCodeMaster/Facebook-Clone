import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './Stories.css';

const Stories = (props) => {
    let imageContainerStyle={
        height: '40px',
        width : '40px',
    };
    let imageStyle={
        objectFit: 'cover',
        objectPosition : '0 0',
    };
    return(
        <div className='storiesBox'>
            <div className='storiesBox__userAvatar'>
                <UserAvatar round={true} showText={false} imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} url={props.url} picAlt='user-avatar' />
            </div>
            <div className='storiesBox__userName'>
                <h4>{props.userName}</h4>
            </div>
        </div>
    );
}

export default Stories;