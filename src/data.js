import { v4 as uuidv4 } from "uuid";

//IMAGES
import oneCover from "./song-data/song-images/one.jpg";
import twoCover from "./song-data/song-images/two.jpg";
import threeCover from "./song-data/song-images/three.jpg";
import fourCover from "./song-data/song-images/four.jpg";
import fiveCover from "./song-data/song-images/five.jpg";
import sixCover from "./song-data/song-images/six.jpg";
import sevenCover from "./song-data/song-images/seven.jpg";
import eightCover from "./song-data/song-images/eight.jpg";
import nineCover from "./song-data/song-images/nine.jpg";
import tenCover from "./song-data/song-images/ten.jpg";
import elevenCover from "./song-data/song-images/eleven.jpg";
import twelveCover from "./song-data/song-images/twelve.jpg";
import thirteenCover from "./song-data/song-images/thirteen.jpg";
import fourteenCover from "./song-data/song-images/fourteen.jpg";

//MP3 FILES
import oneFile from "./song-data/song-files/one.mp3";
import twoFile from "./song-data/song-files/two.mp3";
import threeFile from "./song-data/song-files/three.mp3";
import fourFile from "./song-data/song-files/four.mp3";
import fiveFile from "./song-data/song-files/five.mp3";
import sixFile from "./song-data/song-files/six.mp3";
import sevenFile from "./song-data/song-files/seven.mp3";
import eightFile from "./song-data/song-files/eight.mp3";
import nineFile from "./song-data/song-files/nine.mp3";
import tenFile from "./song-data/song-files/ten.mp3";
import elevenFile from "./song-data/song-files/eleven.mp3";
import twelveFile from "./song-data/song-files/twelve.mp3";
import thirteenFile from "./song-data/song-files/thirteen.mp3";
import fourteenFile from "./song-data/song-files/fourteen.mp3";

const chillHop = () => {
  return [
    {
      //== ONE ==
      id: uuidv4(),
      name: "Heart",
      artist: "Alex Skrinda, Severin & Like Lions",
      type: "Melodic Dubstep",
      color: ["#595047", "#6b93ad"],
      cover: oneCover,
      audioFile: oneFile,
      active: true,
    },
    {
      //== TWO ==
      id: uuidv4(),
      name: "Symphony",
      artist: "Arc North(feat. Donna Tella)",
      type: "Chill",
      color: ["#34505e", "#e5b37e"],
      cover: twoCover,
      audioFile: twoFile,
      active: false,
    },
    {
      //== THREE ==
      id: uuidv4(),
      name: "Biology",
      artist: "Cartoon x nublu x Gameboy Tetris",
      type: "Drum & Bass",
      color: ["#c65a5a", "#013741"],
      cover: threeCover,
      audioFile: threeFile,
      active: false,
    },
    {
      //== FOUR ==
      id: uuidv4(),
      name: "You & I",
      artist: "Culture Code(feat. Alexis Donn)",
      type: "Melodic Dubstep",
      color: ["#c1986a", "#b8563d"],
      cover: fourCover,
      audioFile: fourFile,
      active: false,
    },
    {
      //== FIVE ==
      id: uuidv4(),
      name: "What You Like",
      artist: "Curbi",
      type: "Bass",
      color: ["#1f3532", "#2fd825"],
      cover: fiveCover,
      audioFile: fiveFile,
      active: false,
    },
    {
      //== SIX ==
      id: uuidv4(),
      name: "FOR YOU",
      artist: "Le Malls",
      type: "Trap",
      color: ["#2e3847", "#95948f"],
      cover: sixCover,
      audioFile: sixFile,
      active: false,
    },
    {
      //== SEVEN ==
      id: uuidv4(),
      name: "Vision pt.2",
      artist: "Lost Sky(feat. She Is Jules)",
      type: "Electronic",
      color: ["#4eacb5", "#644be7"],
      cover: sevenCover,
      audioFile: sevenFile,
      active: false,
    },
    {
      //== EIGHT ==
      id: uuidv4(),
      name: "Home",
      artist: "Mo Falk & OVSKY",
      type: "Future House",
      color: ["#180e6f", "#bd2dc2"],
      cover: eightCover,
      audioFile: eightFile,
      active: false,
    },
    {
      //== NINE ==
      id: uuidv4(),
      name: "Phoenix",
      artist: "Netrum & Halvorsen",
      type: "Indie",
      color: ["#292929", "#c74842"],
      cover: nineCover,
      audioFile: nineFile,
      active: false,
    },
    {
      //== TEN ==
      id: uuidv4(),
      name: "Superhero In My Sleep",
      artist: "Rival x Asketa x Netan Chaim",
      type: "Electronic",
      color: ["#051a2d", "#67181e"],
      cover: tenCover,
      audioFile: tenFile,
      active: false,
    },
    {
      //== ELEVEN ==
      id: uuidv4(),
      name: "Only You",
      artist: "ROY KNOX x Derpcat(feat. imallryt)",
      type: "Dubstep",
      color: ["#5e5bf4", "#2a2d62"],
      cover: elevenCover,
      audioFile: elevenFile,
      active: false,
    },
    {
      //== TWELVE ==
      id: uuidv4(),
      name: "Love Me",
      artist: "Sam Ourt & FERGO",
      type: "House",
      color: ["#802fd6", "#000b87"],
      cover: twelveCover,
      audioFile: twelveFile,
      active: false,
    },
    {
      //== THIRTEEN ==
      id: uuidv4(),
      name: "Crazy",
      artist: "Simbai & Frizzy The Streetz",
      type: "Chill",
      color: ["#2c2c2c", "#9a932b"],
      cover: thirteenCover,
      audioFile: thirteenFile,
      active: false,
    },
    {
      //== FOURTEEN ==
      id: uuidv4(),
      name: "SLASH",
      artist: "Tokyo Machine",
      type: "EDM",
      color: ["#472660", "#dd2525"],
      cover: fourteenCover,
      audioFile: fourteenFile,
      active: false,
    },
  ];
};

export default chillHop;
