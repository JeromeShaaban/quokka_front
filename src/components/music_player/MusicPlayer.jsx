import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import "../../style/musicPlayer.css";

export default function App() {
  return (
    <div className="App">
      <h1 class="music_title">Let the music play</h1>
      <YoutubeVideo embedId="videoseries?list=PLQ_PIlf6OzqKdBTuABBCzazB4i732pNTa" />
    </div>
  );
}