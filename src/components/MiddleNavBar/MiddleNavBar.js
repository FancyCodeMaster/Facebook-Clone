import React from 'react';
import './MiddleNavBar.css';

import HomeIcon from '@mui/icons-material/Home';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const MiddleNavBar = (props) => {
    return(
        <div className="middleNavBarContainer">
            <HomeIcon className="middleNavBarContainer__homeIcon" />
            <SmartDisplayIcon className="middleNavBarContainer__watchIcon" />
            <StorefrontIcon className="middleNavBarContainer__marketPlaceIcon" />
            <GroupsIcon className="middleNavBarContainer__groupsIcon" />
            <SportsEsportsIcon className="middleNavBarContainer__gamingIcon" />
        </div>
    );
}

export default MiddleNavBar;