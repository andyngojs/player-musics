import React from 'react';
import {
    PlayCircleFilled,
    StepBackwardFilled,
    StepForwardFilled,
    SwapOutlined,
    RetweetOutlined ,
    PauseCircleFilled
} from '@ant-design/icons';
import './Player.scss';

export default function ControlMusic(props) {

    return (
        <div className="controls">
            <SwapOutlined onClick={props.handleShuffle} className={props.isShuffle ? 'active' : ''} />
            <StepBackwardFilled />
        <div className="play" onClick={props.handlePlay} >
        {
            props.isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />
        }
        </div>
            <StepForwardFilled />
            <RetweetOutlined onClick={props.handleRepeat} className={props.isRepeat ? 'active' : ''} />
    </div>
    );
}
