import { useState } from "react";

function GameFigurine({ zoom, size, figurineOffset }) {
  const sizeDict = new Map([
    [25, 0.984251969],
    [28, 1.1023622],
    [32, 1.25984252],
    [40, 1.57480315]
  ]);

  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      style={{
        width: `${sizeDict.get(size) * zoom}vh`,
        height: `${sizeDict.get(size) * zoom}vh`,
        borderRadius: "100%",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: `${figurineOffset.X}px`,
        top: `${figurineOffset.Y}px`,
        border: `${isSelected ? "solid blue" : "none"}`
      }}
      onClick={() => {
        setIsSelected(!isSelected);
      }}
    ></div>
  );
}

export default GameFigurine;
