import { useCallback, useRef, useState, memo } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
import { GrBackTen, GrForwardTen } from "react-icons/gr";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { VscDebugStepBack, VscDebugStepOver } from "react-icons/vsc";

const ControlButtons = ({ play, mute, playerState, skipVideo }) => {
  return (
    <div className="flex flex-row justify-center items-center px-10">
      <VscDebugStepBack
        size={30}
        className="cursor-pointer m-2"
        onClick={() => skipVideo(-10)}
        style={{ color: "#0274FE" }}
      />
      <div>
        {playerState.isPlaying ? (
          <AiOutlinePauseCircle
            size={40}
            className="cursor-pointer m-2"
            onClick={play}
            style={{ color: "#0274FE" }}
          />
        ) : (
          <AiOutlinePlayCircle
            size={40}
            className="cursor-pointer m-2"
            onClick={play}
            style={{ color: "#0274FE" }}
          />
        )}
      </div>
      <VscDebugStepOver
        size={30}
        className="cursor-pointer m-2"
        onClick={() => skipVideo(10)}
        style={{ color: "#0274FE" }}
      />
      {playerState.isMuted ? (
        <GoMute
          size={30}
          className="cursor-pointer m2"
          onClick={mute}
          style={{ color: "#0274FE" }}
        />
      ) : (
        <GoUnmute
          size={30}
          className="cursor-pointer m2 "
          onClick={mute}
          style={{ color: "#0274FE" }}
        />
      )}
    </div>
  );
};

export default memo(ControlButtons);
