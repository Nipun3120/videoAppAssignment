import { useState, useEffect, useCallback } from "react";

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay = useCallback(() => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  }, [playerState]);

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setPlayerState({
      ...playerState,
      progress,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);

  const skipVideo = (value) => {
    let currentTime = videoElement.current.currentTime;

    if (value < 0 && currentTime < 10) {
      currentTime = 0;
    } else {
      currentTime += value;
    }

    videoElement.current.currentTime = currentTime;

    setPlayerState({
      ...playerState,
      progress:
        (videoElement.current.currentTime / videoElement.current.duration) *
        value,
    });
  };

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
    skipVideo,
  };
};

export default useVideoPlayer;
