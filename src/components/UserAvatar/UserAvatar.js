import React from 'react';
import './UserAvatar.css';

const UserAvatar = (props) => {
    let items = null;
    if(props.showText){
        items = (<div className='userAvatarAndProfile' style={props.mainDivStyle}>
        <div className={props.round?'imageContainer':'imageContainerNormal'} style={props.imageContainerStyle}><img src={require(`../../static/images/${props.url}`)} alt={props.picAlt} className={props.round?'userPicture':'userPictureNormal'} style={props.imageStyle} /></div>
        <h4 className="userName" style={props.userNameStyle}>{props.text}</h4>
    </div>);
    }else{
        items=(<div className={props.round?'imageContainer':'imageContainerNormal'} style={props.imageContainerStyle}><img src={require(`../../static/images/${props.url}`)} alt={props.picAlt} className={props.round?'userPicture':'userPictureNormal'} style={props.imageStyle} /></div>);
    }
    return items;
}

export default UserAvatar;