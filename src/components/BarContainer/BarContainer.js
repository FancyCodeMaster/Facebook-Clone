import {React} from 'react';
import './BarContainer.css';

import LeftSideBar from '../LeftSideBar/LeftSideBar';
import MiddleBar from '../MiddleBar/MiddleBar';
import RightSideBar from '../RightSideBar/RightSideBar';

const BarContainer = (props) => {
    return(
        <div className='barContainer'>
            <div className='barContainer__leftSideBar'>
                <LeftSideBar />                
            </div>
            <div className='barContainer__middleBar'>
                <MiddleBar />
            </div>
            <div className='barContainer__rightSideBar'>
                <RightSideBar />
            </div>
        </div>
    );
}

export default BarContainer;