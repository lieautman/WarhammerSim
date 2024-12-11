import { useState } from "react";
import GameMap from "./GameMap";

function GameBoard() {
  const [zoom, setZoom] = useState(2);
  const [isMovingMap, setIsMovingMap] = useState(false);
  const [mapOffset, setMapOffset] = useState({ X: 0, Y: 0 });
  const [startMouseOffset, setStartMouseOffset] = useState({ X: 0, Y: 0 });
  const [endMouseOffset, setEndMouseOffset] = useState({ X: 0, Y: 0 });

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
      onMouseDown={(event) => {
        event.preventDefault();
        setIsMovingMap(true);
        setStartMouseOffset({ X: event.clientX, Y: event.clientY });
      }}
      onMouseUp={(event) => {
        event.preventDefault();
        setIsMovingMap(false);
        setEndMouseOffset({ X: mapOffset.X, Y: mapOffset.Y });
      }}
      onMouseMove={(event) => {
        event.preventDefault();
        if (isMovingMap) {
          setMapOffset({
            X: event.clientX - startMouseOffset.X + endMouseOffset.X,
            Y: event.clientY - startMouseOffset.Y + endMouseOffset.Y
          });
        }
      }}
      onMouseLeave={(event) => {
        event.preventDefault();
        setIsMovingMap(false);
        setEndMouseOffset({ X: mapOffset.X, Y: mapOffset.Y });
      }}
    >
      <button
        style={{
          position: "absolute",
          left: "50vw",
          top: "50vh"
        }}
        onClick={() => {
          setMapOffset({
            X: 0,
            Y: 0
          });
          setEndMouseOffset({ X: 0, Y: 0 });
        }}
      >
        Reset map
      </button>
      <GameMap zoom={zoom} mapOffset={mapOffset} />
    </div>
  );
}

export default GameBoard;
