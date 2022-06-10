import {React} from 'react';
import StoriesContainer from '../StoriesContainer/StoriesContainer';
import StatusBox from '../StatusBox/StatusBox';
import './MiddleBar.css';
import RoomBox from '../RoomBox/RoomBox';

const MiddleBar = (props) => {
    return(
        <div className='middleBarContainer'>
            <div className='middleBarContainer__storiesContainer'>
                <StoriesContainer />
            </div>
            <div className='middleBarContainer__statusBoxContainer'>
                <StatusBox />
            </div>
            <div className='middleBarContainer__roomBoxContainer'>
                <RoomBox />
            </div>
        </div>
    );
}

export default MiddleBar;