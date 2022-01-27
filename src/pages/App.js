import React, { useState } from "react";
import Player from "../components/Player";
import Playlist from "../components/Playlist";

function App() {
  const [nameHeading, setNameHeading] = useState("Playing Now")
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)

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
      />
      <Playlist 
        handleChangeHeading={ (isSwipe) => handleChangeHeading(isSwipe)} 
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
