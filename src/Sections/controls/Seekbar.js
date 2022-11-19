import { useCallback, useRef, useState, memo } from "react";

const Seekbar = ({ videoProgress, videoState, duration }) => {
  return (
    <div className="px-10 py-2 flex flex-row w-full mt-1">
      {/* <div className="mr-3 text-lg"></div> */}
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
    </div>
  );
};

export default memo(Seekbar);
