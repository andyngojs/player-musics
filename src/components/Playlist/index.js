import { useState } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons'

import './Playlist.scss';
import SongItem from './SongItem';

function Playlist({ handleChangeHeading, isPlaying }) {
    const [isSwipe, setIsSwipe] = useState(false)

    const swipeUp = () => {
        setIsSwipe(!isSwipe)
        handleChangeHeading(!isSwipe)
    }

    return ( 
        <div className= {`music-playlist ${isSwipe ? 'swipeTop' : '' }`} >
            <div className='btn-up' onClick={ e => swipeUp(e)}>
            {
                isSwipe ? <DownOutlined /> : <UpOutlined />
            }
            </div>
            <div className='wrapper'>
                <SongItem isPlaying={isPlaying} />
            </div>
        </div>
    );
}

export default Playlist;