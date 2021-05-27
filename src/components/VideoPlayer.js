import React, { Component } from "react";
import YouTube from "react-youtube";
// import CK from "./CK.gif";


class Videoplayer extends Component {

  videoOnReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },
    };

    return  <YouTube
            videoId={this.props.match.params.id}
            opts={opts}
            videoOnReady={this.videoOnReady}
          />;


  }
}

export default Videoplayer;
