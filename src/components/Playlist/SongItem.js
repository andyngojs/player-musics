import React from 'react';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import "./SongItem.scss"

export default function SongItem({ isPlaying }) {
    return (
        <div className='song-item'>
            {
                isPlaying ? <PauseCircleOutlined className='play-song' /> : <PlayCircleOutlined className='play-song' />
            }
            <h3 className='name-song'>Anh Da Tim Duoc Em</h3>
            <span className='name-singer'>AC Xuan Tai</span>
        </div>
    );
}
