import { useCallback, useRef, useState, memo } from "react";
// import VideoTime from "./VideoTime";

const Seekbar = ({ videoProgress, videoState, duration, time }) => {
  const getTotalDuration = (totalTimeDuration) => {
    if (isNaN(totalTimeDuration)) {
      return "0:0";
    }

    return `${Math.floor(totalTimeDuration / 60)}:${Math.round(
      (totalTimeDuration / 60 - Math.floor(totalTimeDuration / 60)) * 60
    )}`;
  };

  const currentTime = (time) => {
    let mins = time / 60;
    let secs = time % 60;
    return `${Math.floor(mins)}:${Math.floor(secs)}`;
  };
  return (
    <div className="px-10 py-2 flex flex-row w-full mt-1 text-lg text-white">
      <div className="mr-3 text-lg">{currentTime(time)}</div>
      <div className="mt-1" style={{ width: "90%" }}>
        <input
          className="w-full"
          type="range"
          min="0"
          max="100"
          value={videoState.progress}
          onChange={(event) => videoProgress(event)}
        />
      </div>
      <div className="ml-3 text-lg text-white">
        {getTotalDuration(duration)}
      </div>
    </div>
  );
};

export default memo(Seekbar);
