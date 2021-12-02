import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  setCurrentSong,
}) => {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkip = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[currentIndex + 1] || songs[0]);
    }
    if (direction === "skip-back") {
      await setCurrentSong(songs[currentIndex - 1] || songs[songs.length - 1]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(45deg, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}>
          <input
            type="range"
            name="player"
            id="player"
            max={songInfo.duration}
            min={0}
            onChange={dragHandler}
            value={songInfo.currentTime}
          />
          <div
            style={{ transform: `translateX(${animationPercentage}%)` }}
            className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          className="previous-button"
          onClick={() => handleSkip("skip-back")}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          className="play-button"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          className="next-button"
          onClick={() => handleSkip("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
