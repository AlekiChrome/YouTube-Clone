// import { Link } from 'react-router-dom';
// import React from "react";
// import YouTube from "react-youtube";
// import "../styles/_video.css";

// function selectVideo(videoIdObj, onVideoSelected) {
//   onVideoSelected(videoIdObj.videoId);
// }
// function getCss(imageurl) {
//   const _styles = {
//     backgroundImage: `url(${imageurl})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center center",
//     height: "180px",
//     position: "relative"
//   };
//   return _styles;
// }
// // function constructVideoTitles(vidoesData, onVideoSelected) {
// //   return vidoesData.map((video) => {
// //     return (
// //       <Link
// //         className="video"
// //         key={video.id.videoId}
// //         to={`/video/${video.id.videoId}`}>
// //          {/* onClick={() => selectVideo(id, onVideoSelected)}> */}
// //         <div style={getCss(snippet.thumbnails.high.url)} key={index} />
// //         <p className="title">{snippet.title}</p>
// //       </Link>
// //     );
// //   });
// // }
// const Video = ({ data, onVideoSelected }) => {
//   return (
//   <>
//    {constructVideoTitles(data, onVideoSelected)}
//   </>
//   )
// };

// export default Video;
