import React from "react";

const Song = ({ currentSong, songInfo }) => {
  const currentSongType = () => {
    if (currentSong.type === "Melodic Dubstep" || currentSong.type === "EDM") {
      return <p style={{ background: "#4361ee" }}>#{currentSong.type}</p>;
    }
    if (currentSong.type === "Electronic" || currentSong.type === "Chill") {
      return <p style={{ background: "#7b2cbf" }}>#{currentSong.type}</p>;
    }
    if (currentSong.type === "Future House" || currentSong.type === "House") {
      return (
        <p style={{ background: "#ffbc42", color: "#333" }}>
          #{currentSong.type}
        </p>
      );
    }
    return <p>#{currentSong.type}</p>;
  };
  return (
    <div className="song-container">
      <div className="image-box">
        <img
          style={{ transform: `rotate(${songInfo.currentTime * 20}deg)` }}
          src={currentSong.cover}
          alt={currentSong.name}
        />
        <div className="img-hole"></div>
      </div>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
      {currentSongType()}
    </div>
  );
};

export default Song;
