import React  from 'react';

import ControlMusic from './ControlMusic';
import "./Player.scss";

function Player({ nameHeading, handlePlay, handleRepeat, handleShuffle, isPlaying, isRepeat, isShuffle, musicData }) {
    let currentIndexSong = 0;
    return (
        <div className="music">
            <div className="header">
                <p className="name-header"> { nameHeading } </p>
            </div>
            <div className="music-thumb">
                <img src="https://source.unsplash.com/random" alt="" />
            </div>
            {
                // eslint-disable-next-line array-callback-return
                musicData.map((item, index) => {
                    if (index === currentIndexSong) {
                        return (
                            <div key={index}>
                                <h3 className="music-name">{ item.name }</h3>
                                <p className="music-singer"> { item.singer } </p>
                            </div>
                        )
                    }
                })
            }
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
