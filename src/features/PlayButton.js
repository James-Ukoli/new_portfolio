import sound from "../media/audio/JUvoice.mp3";
import playBtn from "../images/imagesSet1/play1.avif";
import pauseBtn from "../images/imagesSet1/pause1.png";
import { useState } from "react";
import "./PlayButton.css";
import { useRef } from "react";

const PlayButton = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      console.log("is NOT playing");
      audio.pause();
    } else {
      console.log("is playing");
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={sound} />
      <img
        id="play-button"
        onClick={togglePlayback}
        src={isPlaying ? pauseBtn : playBtn}
        alt="play-button"
      />
    </div>
  );
};

export default PlayButton;
