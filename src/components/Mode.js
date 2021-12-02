import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Mode = ({
  isDarkMode,
  setIsDarkMode,
  isLibraryOpen,
  setIsLibraryOpen,
}) => {
  const modeHandler = () => {
    if (isDarkMode) {
      setIsDarkMode(!isDarkMode);
    } else {
      setIsDarkMode(!isDarkMode);
    }
  };

  const librarHandler = () => {
    if (!isLibraryOpen) {
      setIsLibraryOpen(!isLibraryOpen);
    }
  };

  return (
    <div className="dark-light-mode">
      <h2>Dx</h2>
      <div className="library-button">
        <h3 onClick={librarHandler}>Library</h3>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          size="2x"
          onClick={modeHandler}
        />
      </div>
    </div>
  );
};

export default Mode;
