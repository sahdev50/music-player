import React, { useState, useRef } from "react";

//components
import Song from "./components/Song";
import Player from "./components/Player";
import Mode from "./components/Mode";
import Library from "./components/Library";

//data
import data from "./data";

//styling
import "./styles/main.scss";

const App = () => {
  const audioRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[currentIndex + 1] || songs[0]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`${isDarkMode ? "light" : "dark"}`}>
      <Mode
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isLibraryOpen={isLibraryOpen}
        setIsLibraryOpen={setIsLibraryOpen}
      />
      <Song currentSong={currentSong} songInfo={songInfo} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        isLibraryOpen={isLibraryOpen}
        setIsLibraryOpen={setIsLibraryOpen}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onEnded={songEndHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audioFile}></audio>
    </div>
  );
};

export default App;
