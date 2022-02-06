import React, { useState, useEffect } from "react";
import axios from "axios";
import Player from "../components/Player";
import Playlist from "../components/Playlist";

function App() {
  let currentIndexSong = 0;
  const [nameHeading, setNameHeading] = useState("Playing Now")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [musicData, setMusicData] = useState([])

  const handlePlay = () => {
      setIsPlaying(!isPlaying)
  }

  const handleRepeat = () => {
      setIsRepeat(!isRepeat)
  }

  const handleShuffle = () => {
      setIsShuffle(!isShuffle)
  }

  const handleChangeHeading = (isSwipe) => {
    setTimeout(() => {
      if (isSwipe) {
        setNameHeading("Playlist")
      } else {
        setNameHeading("Playing Now")
      }
    }, 1000)
  }

  useEffect(() => {
    axios.get("http://localhost:3000/data")
    .then((response) => {
      setMusicData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="app width-500">
      <Player
        nameHeading={nameHeading}
        handlePlay={handlePlay}
        handleRepeat={handleRepeat}
        handleShuffle  = {handleShuffle}
        isPlaying = {isPlaying}
        isRepeat={isRepeat}
        isShuffle={isShuffle}
        musicData={musicData}
        currentIndexSong={currentIndexSong}
      />
      <Playlist 
        handleChangeHeading={ (isSwipe) => handleChangeHeading(isSwipe)} 
        isPlaying={isPlaying}
        musicData={musicData}
        currentIndexSong={currentIndexSong}
      />
    </div>
  );
}

export default App;
