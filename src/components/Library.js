import React from "react";
import LibrarySongs from "./LibrarySongs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Library = ({
  songs,
  isLibraryOpen,
  setIsLibraryOpen,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
}) => {
  const libraryHandler = () => {
    if (isLibraryOpen) {
      setIsLibraryOpen(!isLibraryOpen);
    }
  };
  return (
    <div
      className={`${
        isLibraryOpen ? "openLibrary" : "closeLibrary"
      } library-cover`}>
      <div className="library-nav">
        <h1>.Library</h1>
        <FontAwesomeIcon icon={faTimes} size="2x" onClick={libraryHandler} />
      </div>
      <div className="songs-box">
        {songs.map((song) => (
          <LibrarySongs
            key={song.id}
            song={song}
            libraryHandler={libraryHandler}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            currentSong={currentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
