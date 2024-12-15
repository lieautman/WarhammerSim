import GameModel from "./GameModel";
import { useSelector } from "react-redux";
import { selectMap, selectArmy1 } from "../GameState/GameStateSlice"; //selectArmy2

function GameMap({ zoom }) {
  const army1 = useSelector(selectArmy1);
  const map = useSelector(selectMap);
  //const army2 = useSelector(selectArmy2);

  return (
    <div
      style={{
        width: `${440 * zoom}px`,
        height: `${700 * zoom}px`,
        backgroundColor: "yellow",
        position: "relative",
        left: `${map.X}px`,
        top: `${map.Y}px`
      }}
    >
      <div
        style={{
          height: `${50 * zoom}px`,
          display: "flex"
        }}
      >
        {army1.units.map((unit) =>
          unit.models.map((model) => (
            <GameModel
              key={model.modelId}
              modelId={model.modelId}
              zoom={zoom}
              X={model.X}
              Y={model.Y}
              unitId={unit.unitId}
              isSelected={model.isSelected}
              name={model.name}
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
