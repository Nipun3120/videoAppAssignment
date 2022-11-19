import { useState, useRef, useEffect, useCallback } from "react";
import Seekbar from "./controls/Seekbar";
import ControlButtons from "./controls/ControlButtons";
import { transformSrtTracks } from "srt-support-for-html5-videos";
import useVideoPlayer from "../hooks/useControls";
import Captions from "./captions/Captions";

export const InputSection = () => {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedSrtFile, setUploadedSrtFile] = useState(null);

  const uploadVideo = (e) => {
    let file = e.target.files[0];
    let blobURL = URL.createObjectURL(file);
    setUploadedVideo(blobURL);
    console.log("video duration: ", videoElement.current.duration);
  };
  const uploadSrtFile = (e) => {
    let file = e.target.files[0];
    let blobURL = URL.createObjectURL(file);
    setUploadedSrtFile(blobURL);
  };

  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
    skipVideo,
  } = useVideoPlayer(videoElement);

  useEffect(() => {
    transformSrtTracks(videoElement.current);
  }, [uploadedSrtFile]);
  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex-2 border-slate-700 m-4 px-4 py-2 ">
          <span
            className="px-2 font-semibold text-2xl "
            style={{ color: "#0274FE" }}
          >
            Video Input
          </span>
          <input
            className="cursor-pointer text-white"
            type="file"
            id="video"
            name="video"
            accept="video/*"
            onChange={(e) => uploadVideo(e)}
          ></input>
        </div>
        <div className="flex-2 border-slate-700 m-4 px-4 py-2">
          <span
            className="px-3 font-semibold text-2xl"
            style={{ color: "#0274FE" }}
          >
            Caption Input
          </span>
          <input
            className="cursor-pointer text-white"
            type="file"
            id="srt-file"
            name="srtFile"
            onChange={(e) => uploadSrtFile(e)}
          ></input>
        </div>
      </div>
      <div className="video-wrapper">
        <video
          src={uploadedVideo}
          height="400"
          width="1080"
          ref={videoElement}
          className="m-auto videoClass"
          loading="lazy"
          onTimeUpdate={handleOnTimeUpdate}
        >
          {uploadedSrtFile && <Captions file={uploadedSrtFile} />}
        </video>
      </div>
      {console.log("parent called")}

      <div className="w-8/12 m-auto mt-5">
        <div className="actions flex flex-row-reverse">
          <Seekbar
            videoProgress={handleVideoProgress}
            videoState={playerState}
            time={
              videoElement.current === null
                ? null
                : videoElement.current.currentTime
            }
            duration={
              videoElement.current === null
                ? null
                : videoElement.current.duration
            }
          />
          <ControlButtons
            play={togglePlay}
            mute={toggleMute}
            playerState={playerState}
            skipVideo={skipVideo}
          />
        </div>
      </div>
    </div>
  );
};
