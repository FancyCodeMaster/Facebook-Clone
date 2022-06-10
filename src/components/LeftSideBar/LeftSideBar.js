import {React} from 'react';
import './LeftSideBar.css';
import UserAvatar from '../UserAvatar/UserAvatar';

const LeftSideBar = (props) => {
    const mainDivStyle = {
        borderRadius: '8px',
        border: '1px solid rgb(24,25,26)',
        cursor: 'pointer',
        padding : '2px',
        height: '45px',
        marginBottom : '8px',
        marginTop : '8px'
    };
    const imageContainerStyle = {
        height: '40px',
        width : '40px',
        marginRight : '15px'
    };
    const imageStyle={
        objectFit: 'cover',
        objectPosition : '0 0',
    };
    const imageStyleNormal={
        objectFit : 'cover',
        objectPosition : '-5 0'
    }
    const userNameStyle = {
        color : '#d5d7dc',
    };
    return(
        <div className='leftSideBar'>
            <UserAvatar mainDivStyle={mainDivStyle} url='DSC_4240.JPG' imageContainerStyle={imageContainerStyle} imageStyle={imageStyle} userNameStyle={userNameStyle} text='Rikesh Silwal' round={true} showText={true} />
            <UserAvatar mainDivStyle={mainDivStyle} url='friends-icon.png' imageContainerStyle={imageContainerStyle} imageStyle={imageStyleNormal} userNameStyle={userNameStyle} text='Friends' round={true} showText={true} />
            <UserAvatar mainDivStyle={mainDivStyle} url='groups-icon.jpg' imageContainerStyle={imageContainerStyle} imageStyle={imageStyleNormal} userNameStyle={userNameStyle} text='Groups' round={true} showText={true} />
            <UserAvatar mainDivStyle={mainDivStyle} url='marketplace-icon.png' imageContainerStyle={imageContainerStyle} imageStyle={imageStyleNormal} userNameStyle={userNameStyle} text='Marketplace' round={true} showText={true} />
            <UserAvatar mainDivStyle={mainDivStyle} url='watch-icon.png' imageContainerStyle={imageContainerStyle} imageStyle={imageStyleNormal} userNameStyle={userNameStyle} text='Watch' round={true} showText={true} />
            <UserAvatar mainDivStyle={mainDivStyle} url='memories-icon.webp' imageContainerStyle={imageContainerStyle} imageStyle={imageStyleNormal} userNameStyle={userNameStyle} text='Memories' round={true} showText={true} />
            <UserAvatar mainDivStyle={mainDivStyle} url='seemore-icon.png' imageContainerStyle={imageContainerStyle} imageStyle={imageStyleNormal} userNameStyle={userNameStyle} text='See More' round={true} showText={true} />
        </div>
    );
}

export default LeftSideBar;