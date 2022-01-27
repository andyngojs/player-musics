import React  from 'react';

import ControlMusic from './ControlMusic';
import "./Player.scss";

function Player({ nameHeading, handlePlay, handleRepeat, handleShuffle, isPlaying, isRepeat, isShuffle }) {
    return (
        <div className="music">
            <div className="header">
                <p className="name-header"> { nameHeading } </p>
            </div>
            <div className="music-thumb">
                <img src="https://source.unsplash.com/random" alt="" />
            </div>
            <h3 className="music-name">We doing pending response datas from backend</h3>
            <p className="music-singer">So sorry</p>
            <input type="range" name="range" className="range" />
            <div className="timer">
                <div className="duration"> --:-- </div>
                <div className="remaining"> --:-- </div>
            </div>
            <ControlMusic 
                handlePlay={handlePlay}
                handleRepeat={handleRepeat}
                handleShuffle  = {handleShuffle}
                isPlaying = {isPlaying} 
                isRepeat={isRepeat}
                isShuffle={isShuffle} 
            />
        </div>
    );
}

export default Player;
