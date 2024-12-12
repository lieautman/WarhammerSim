import { useState } from "react";
import GameMap from "./GameMap";

function GameBoard() {
  const [zoom, setZoom] = useState(2);
  const [isMovingMap, setIsMovingMap] = useState(false);
  const [mapOffset, setMapOffset] = useState({ X: 0, Y: 0 });
  const [startMouseOffset, setStartMouseOffset] = useState({ X: 0, Y: 0 });
  const [endMouseOffset, setEndMouseOffset] = useState({ X: 0, Y: 0 });
  const [figurineState, setFigurineState] = useState({
    X: 0,
    Y: 0,
    isSelected: false
  });
  const [figurineStartMouseOffset, setFigurineStartMouseOffset] = useState({
    X: 0,
    Y: 0
  });
  const [figurineEndMouseOffset, setFigurineEndMouseOffset] = useState({
    X: 0,
    Y: 0
  });

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
        if (event.shiftKey && figurineState.isSelected) {
          setFigurineState({
            ...figurineState,
            X:
              event.clientX -
              figurineStartMouseOffset.X +
              figurineEndMouseOffset.X,
            Y:
              event.clientY -
              figurineStartMouseOffset.Y +
              figurineEndMouseOffset.Y
          });
        } else {
          setFigurineStartMouseOffset({ X: event.clientX, Y: event.clientY });
          setFigurineEndMouseOffset({
            X: figurineState.X,
            Y: figurineState.Y
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
