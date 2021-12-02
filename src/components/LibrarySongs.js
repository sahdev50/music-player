import React from "react";

const LibrarySongs = ({
  song,
  libraryHandler,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
}) => {
  const songType = () => {
    if (song.type === "Melodic Dubstep" || song.type === "EDM") {
      return (
        <p className="song-type" style={{ background: "#4361ee" }}>
          #{song.type}
        </p>
      );
    }
    if (song.type === "Electronic" || song.type === "Chill") {
      return (
        <p className="song-type" style={{ background: "#7b2cbf" }}>
          #{song.type}
        </p>
      );
    }
    if (song.type === "Future House" || song.type === "House") {
      return (
        <p
          className="song-type"
          style={{ background: "#ffbc42", color: "#333" }}>
          #{song.type}
        </p>
      );
    }
    return <p className="song-type">#{song.type}</p>;
  };
  const songHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      className={`card ${song.id === currentSong.id ? "selectedSong" : ""}`}
      onClick={(event) => [libraryHandler(), songHandler()]}>
      <img src={song.cover} alt={song.name} />
      <div className="content">
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
        {songType()}
      </div>
    </div>
  );
};

export default LibrarySongs;
