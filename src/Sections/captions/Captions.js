import { useCallback, useRef, useState, memo } from "react";

const Captions = ({ file }) => {
  return (
    <track
      src={file}
      label="English"
      kind="captions"
      data-encoding="iso-8859-2"
      srcLang="en-us"
      default
    ></track>
  );
};

export default memo(Captions);
