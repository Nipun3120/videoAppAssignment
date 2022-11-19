import { memo, useState } from "react";

const VideoTime = () => {
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(setSeconds(0));
    document.querySelector("#counter").remove();
  };

  const currentCount = seconds;
  return <p id="counter">{currentCount}</p>;
};
export default memo(VideoTime);
