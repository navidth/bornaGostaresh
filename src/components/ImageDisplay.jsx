"use client";

import { useDispatch } from "react-redux";
import { handleError } from "./Redux/SliceProducts";
import { useState } from "react";

function ImageDisplay({ item, index }) {
  const dispatch = useDispatch();
  const [Isabsolute, setIsAbsolute] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState(position);
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseDown = (e) => {
    setIsMoving(true);
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
    document.addEventListener("mousemove", handleMouseMove); // Add event listener once
    document.addEventListener("mouseup", handleMouseUp); // Add event listener once
  };
  const handleMouseMove = (e) => {
    setIsAbsolute(true);

    if (isMoving) {
      var deltaX = e.clientX - position.x;
      var deltaY = e.clientY - position.y;
      var newPosition = {
        x: currentPosition.x + deltaX,
        y: currentPosition.y + deltaY,
      };
      setCurrentPosition(newPosition);
    }
  };
  const handleMouseUp = () => {
    setIsMoving(false);
    document.removeEventListener("mousemove", handleMouseMove); // Remove event listener
    document.removeEventListener("mouseup", handleMouseUp); // Remove event listener
  };
  return (
    <div
      className="position-relative"
      onDrag={handleMouseDown}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        left: `${currentPosition.x}px`,
        top: `${currentPosition.y}px`,
        cursor: "move",
        userSelect: "none",
      }}
    >
      <img
        className="shadoww "
        src={item.value}
        width={200}
        height={300}
        alt="image"
        onError={() => dispatch(handleError(index))}
      />
    </div>
  );
}

export default ImageDisplay;
