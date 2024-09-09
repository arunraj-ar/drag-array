import { useState } from "react";

const Card = ({ id, w = 150, h = 150, color = "black" }) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <div
      id={id}
      onDragStart={(e) => {
        e.dataTransfer.effectAllowed = "copyMove";
        setIsDragging(true);
      }}
      onDragEnd={() => {
        setIsDragging(false);
      }}
      draggable
      key={id}
      className={`rounded-3xl mb-[10px] lg:mr-[10px] lg:mb-0 transition-opacity ${
        isDragging ? "opacity-30" : "opacity-100"
      }`}
      style={{
        height: h,
        width: w,
        background: color,
        cursor: `${isDragging ? "-webkit-grabbing" : "-webkit-grab"}`,
        cursor: `${isDragging ? "grabbing" : "grab"}`,
      }}
    ></div>
  );
};

export default Card;
