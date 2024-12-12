import GameFigurine from "./GameFigurine";
import { useSelector } from "react-redux";
import { selectArmy1, selectArmy2 } from "../GameState/GameStateSlice";

function GameMap({ zoom, mapOffset }) {
  const army1 = useSelector(selectArmy1);
  const army2 = useSelector(selectArmy2);

  return (
    <div
      style={{
        width: `${440 * zoom}px`,
        height: `${700 * zoom}px`,
        backgroundColor: "yellow",
        position: "relative",
        left: `${mapOffset.X}px`,
        top: `${mapOffset.Y}px`
      }}
    >
      <div
        style={{
          height: `${50 * zoom}px`,
          display: "flex"
        }}
      >
        {army1.map((unit) =>
          unit.map((model) => (
            <GameFigurine
              zoom={zoom}
              size={model.baseSize}
              X={model.X}
              Y={model.Y}
              isSelected={model.isSelected}
            />
          ))
        )}
      </div>
      <div
        style={{
          width: `${440 * zoom}px`,
          height: `${600 * zoom}px`,
          backgroundColor: "black",
          position: "relative",
          zIndex: 0
        }}
      ></div>
      <div
        style={{
          height: `${50 * zoom}px`,
          display: "flex"
        }}
      ></div>
    </div>
  );
}

export default GameMap;
