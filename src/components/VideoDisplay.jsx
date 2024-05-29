"use client";

import { useDispatch } from "react-redux";
import { handleError } from "./Redux/SliceProducts";
function VideoDisplay({ item, index }) {
  const dispatch = useDispatch();
  return (
    <video
      width={350}
      height={300}
      onError={() => dispatch(handleError(index))}
      autoPlay={true}
      className="mx-2"
    >
      <source src={`${item.value}`} type="video/mp4" />
      <source src={`${item.value}`} type="video/ogg" />
      <source src={`${item.value}`} type="video/webM" />
    </video>
  );
}

export default VideoDisplay;
