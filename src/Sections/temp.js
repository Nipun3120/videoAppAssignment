// const videoElement = useRef(null);
// const [uploadedVideo, setUploadedVideo] = useState(null);
// const [uploadedSrtFile, setUploadedSrtFile] = useState(null);
// const [videoState, setVideoState] = useState({
//   isPlaying: false,
//   isMuted: false,
//   videoPlaybackSpeed: 1,
//   progress: 0,
// });

// const [videoProgress, setVideoProgress] = useState(0);

// const uploadVideo = (e) => {
//   let file = e.target.files[0];
//   let blobURL = URL.createObjectURL(file);
//   setUploadedVideo(blobURL);
// };
// const uploadSrtFile = (e) => {
//   let file = e.target.files[0];
//   let blobURL = URL.createObjectURL(file);
//   setUploadedSrtFile(blobURL);
// };

// const play = useCallback(() => {
//   if (videoElement.current.paused) {
//     //   setVideoState({ ...videoState, isPlaying: false });
//     videoElement.current.play();
//   } else {
//     //   setVideoState({ ...videoState, isPlaying: true });
//     videoElement.current.pause();
//   }
//   // videoElement.current.ontimeupdate = 6;
// }, [videoElement]);

// //   useEffect(() => {
// //     transformSrtTracks(videoElement.current);
// //     videoState.isPlaying
// //       ? videoElement.current.play()
// //       : videoElement.current.pause();
// //     videoState.isMuted
// //       ? (videoElement.current.muted = true)
// //       : (videoElement.current.muted = false);
// //   }, [videoState.isPlaying, videoElement, videoState.isMuted]);

// //   useEffect(() => {
// //     videoState.isMuted
// //       ? (videoElement.current.muted = true)
// //       : (videoElement.current.muted = false);
// //   }, [videoState.isMuted, videoElement]);

// const handleOnTimeUpdate = useCallback(() => {
//   const progress =
//     (videoElement.current.currentTime / videoElement.current.duration) * 100;
//   setVideoProgress(progress);
//   // setVideoState({
//   //   ...videoState,
//   //   progress,
//   // });
// }, [videoProgress]);

// const handleSeek = useCallback(
//   (value) => {
//     const seek = Number(value);
//     videoElement.current.currentTime =
//       (videoElement.current.duration / 100) * seek;
//     setVideoState({
//       ...videoState,
//       progress: seek,
//     });
//   },
//   [videoElement, videoState]
// );

// const skipVideo = useCallback(
//   (value) => {
//     let currentTime = videoElement.current.currentTime;

//     if (value < 0 && currentTime < 10) {
//       currentTime = 0;
//     } else {
//       currentTime += value;
//     }

//     videoElement.current.currentTime = currentTime;

//     setVideoState({
//       ...videoState,
//       progress:
//         (videoElement.current.currentTime / videoElement.current.duration) *
//         value,
//     });
//   },
//   [videoElement, videoState]
// );

// const toggleMute = useCallback(() => {
//   setVideoState({
//     ...videoState,
//     isMuted: !videoState.isMuted,
//   });
// }, [videoState, videoElement]);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import { useState, useRef, useEffect, useCallback } from "react";
// import Seekbar from "./controls/Seekbar";
// import ControlButtons from "./controls/ControlButtons";
// import { ControlSection } from "./ControlSection";
// import { transformSrtTracks } from "srt-support-for-html5-videos";
// import Video from "./video/Video";

// export const InputSection = () => {
//   const videoElement = useRef(null);
//   const [uploadedVideo, setUploadedVideo] = useState(null);
//   const [uploadedSrtFile, setUploadedSrtFile] = useState(null);
//   const [videoState, setVideoState] = useState({
//     isPlaying: false,
//     isMuted: false,
//     videoPlaybackSpeed: 1,
//     progress: 0,
//   });

//   const [videoProgress, setVideoProgress] = useState(0);

//   const uploadVideo = (e) => {
//     let file = e.target.files[0];
//     let blobURL = URL.createObjectURL(file);
//     setUploadedVideo(blobURL);
//   };
//   const uploadSrtFile = (e) => {
//     let file = e.target.files[0];
//     let blobURL = URL.createObjectURL(file);
//     setUploadedSrtFile(blobURL);
//   };

//   // play, pause
//   // mute
//   // seek

//   return (
//     <div>
//       <button className="border-2 border-slate-700 m-4 px-4 py-2">
//         Video Input
//       </button>
//       <input
//         type="file"
//         id="video"
//         name="video"
//         accept="video/*"
//         onChange={(e) => uploadVideo(e)}
//       ></input>
//       <button className="border-2 border-slate-700 m-4 px-4 py-2">
//         SRT Input
//       </button>
//       <input
//         type="file"
//         id="srt-file"
//         name="srtFile"
//         onChange={(e) => uploadSrtFile(e)}
//       ></input>
//       <div className="mt-5 video-wrapper">
//         <Video />
//         {/* <video
//           src={uploadedVideo}
//           height="480"
//           width="1080"
//           ref={videoElement}
//           className="m-auto videoClass"
//           loading="lazy"
//           //   onTimeUpdate={handleOnTimeUpdate}
//         >
//           <track
//             src={uploadedSrtFile}
//             label="English"
//             kind="captions"
//             data-encoding="iso-8859-2"
//             srcLang="en-us"
//             default
//           ></track>
//         </video> */}
//       </div>
//       {console.log("parent called")}

//       <div className="controls">
//         <div className="actions">
//           <Seekbar />
//           <ControlButtons />
//         </div>
//       </div>
//       {/* <ControlSection
//         playing={play}
//         videoState={videoState}
//         displayControls={videoElement ? true : false}
//         handleSeek={handleSeek}
//         skipVideo={skipVideo}
//         toggleMute={toggleMute}
//    progressLength={
//      videoElement.current === null ? 0 : videoElement.current.duration
//    }
//       /> */}
//     </div>
//   );
// };
