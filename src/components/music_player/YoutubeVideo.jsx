import React from "react";
import PropTypes from "prop-types";
import "../../style/youtubeVideo.css";

const YoutubeVideo = ({ embedId }) => (
 <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}&index=4`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      title="Relaxation music"
    ></iframe>
 </div>
);

YoutubeVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeVideo;
