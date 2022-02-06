import { useState } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons'

import './Playlist.scss';
import SongItem from './SongItem';

function Playlist({ handleChangeHeading, isPlaying, musicData }) {
    const [isSwipe, setIsSwipe] = useState(false)

    const swipeUp = () => {
        setIsSwipe(!isSwipe)
        handleChangeHeading(!isSwipe)
    }

    return ( 
        <div className= {`music-playlist ${isSwipe ? 'swipeTop' : '' }`} >
            <div className='btn-up' onClick={swipeUp}>
            {
                isSwipe ? <DownOutlined /> : <UpOutlined />
            }
            </div>
            <div className='wrapper'>
                {
                    musicData.map((item, index) => {
                        return <SongItem isPlaying={isPlaying} musicData={item} key={index} />
                    })
                }
            </div>
        </div>
    );
}

export default Playlist;