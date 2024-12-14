import { useState } from "react";
import GameMap from "./GameMap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  modifyMapCoordinates,
  resetMapCoordinates
} from "../GameState/GameStateSlice";
import { selectMap } from "../GameState/GameStateSlice";

function GameBoard() {
  const [zoom, setZoom] = useState(1);
  const [isMovingMap, setIsMovingMap] = useState(false);
  const [startMouseOffset, setStartMouseOffset] = useState({ X: 0, Y: 0 });
  const [endMouseOffset, setEndMouseOffset] = useState({ X: 0, Y: 0 });
  const dispatch = useDispatch();
  const map = useSelector(selectMap);

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
        setEndMouseOffset({ X: map.X, Y: map.Y });
      }}
      onMouseMove={(event) => {
        event.preventDefault();
        if (isMovingMap) {
          dispatch(
            modifyMapCoordinates({
              X: event.clientX - startMouseOffset.X + endMouseOffset.X,
              Y: event.clientY - startMouseOffset.Y + endMouseOffset.Y
            })
          );
        }
      }}
      onMouseLeave={(event) => {
        event.preventDefault();
        setIsMovingMap(false);
        setEndMouseOffset({ X: map.X, Y: map.Y });
      }}
    >
      <button
        style={{
          position: "absolute",
          left: "50vw",
          top: "50vh"
        }}
        onClick={() => {
          dispatch(resetMapCoordinates());
          setEndMouseOffset({ X: 0, Y: 0 });
        }}
      >
        Reset map
      </button>
      <GameMap zoom={zoom} />
    </div>
  );
}

export default GameBoard;
