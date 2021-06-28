import React from "react";
import PropTypes from "prop-types";

const YoutubeVideo = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      title="Embedded youtube"
    ></iframe>
  </div>
);

YoutubeVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeVideo;
