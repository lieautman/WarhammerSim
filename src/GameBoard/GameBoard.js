import { useState } from "react";

function GameBoard() {
  const [zoom, setZoom] = useState(2);
  const [isMovingMap, setIsMovingMap] = useState(false);
  const [mapXOffset, setMapXOffset] = useState(0);
  const [mapYOffset, setMapYOffset] = useState(0);
  return (
    <div
      style={{
        width: "70vw",
        height: "100vh",
        backgroundColor: "green",
        overflow: "hidden"
      }}
      onWheel={(event) => {
        if (event.deltaY > 0) setZoom(zoom - 0.05);
        else setZoom(zoom + 0.05);
      }}
    >
      <button
        style={{
          position: "relative",
          left: "35vw",
          top: "50vh"
        }}
        onClick={() => {
          setMapXOffset(0);
          setMapYOffset(0);
        }}
      >
        Reset map
      </button>
      <div
        style={{
          width: `${44 * zoom}vh`,
          height: `${60 * zoom}vh`,
          backgroundColor: "black",
          position: "relative",
          left: `${mapYOffset}vw`,
          top: `${mapXOffset}vh`
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          setIsMovingMap(true);
        }}
        onMouseUp={(event) => {
          event.preventDefault();
          setIsMovingMap(false);
        }}
        onMouseMove={(event) => {
          event.preventDefault();
          if (isMovingMap) {
            setMapXOffset(mapXOffset + event.movementY / 5);
            setMapYOffset(mapYOffset + event.movementX / 5);
          }
        }}
        onMouseLeave={() => setIsMovingMap(false)}
      >
        <div
          style={{
            width: `${0.984251969 * zoom}vh`,
            height: `${0.984251969 * zoom}vh`,
            borderRadius: "100%",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        ></div>
        <div
          style={{
            width: `${1.1023622 * zoom}vh`,
            height: `${1.1023622 * zoom}vh`,
            borderRadius: "100%",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        ></div>
        <div
          style={{
            width: `${1.25984252 * zoom}vh`,
            height: `${1.25984252 * zoom}vh`,
            borderRadius: "100%",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        ></div>
        <div
          style={{
            width: `${1.57480315 * zoom}vh`,
            height: `${1.57480315 * zoom}vh`,
            borderRadius: "100%",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        ></div>
      </div>
    </div>
  );
}

export default GameBoard;
