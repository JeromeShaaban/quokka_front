import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import "../../style/musicPlayer.css";

export default function App() {
  return (
    <div >
      <h1 className="music_title">Let the music play</h1>
      <div className="youtube_player">
        <YoutubeVideo embedId="videoseries?list=PLQ_PIlf6OzqKdBTuABBCzazB4i732pNTa" />          
      </div>

    </div>
  );
}