import React from 'react';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import "./SongItem.scss"

export default function SongItem({ isPlaying, musicData }) {
    return (
        <div className='song-item'>
            {
                isPlaying ? <PauseCircleOutlined className='play-song' /> : <PlayCircleOutlined className='play-song' />
            }
            <h3 className='name-song'> { musicData.name } </h3>
            <span className='name-singer'> { musicData.singer } </span>
        </div>
    );
}
