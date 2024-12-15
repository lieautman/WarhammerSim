import GameModel from "./GameModel";
import { useSelector } from "react-redux";
import { selectMap, selectArmys } from "../GameState/GameStateSlice";

function GameMap({ zoom }) {
  const armys = useSelector(selectArmys);
  const map = useSelector(selectMap);

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
        {armys[0].units.map((unit) =>
          unit.models.map((model) => (
            <GameModel
              key={model.modelId}
              modelId={model.modelId}
              unitId={unit.unitId}
              zoom={zoom}
              X={model.X}
              Y={model.Y}
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
      >
        {armys[1].units.map((unit) =>
          unit.models.map((model) => (
            <GameModel
              key={model.modelId}
              modelId={model.modelId}
              unitId={unit.unitId}
              zoom={zoom}
              X={model.X}
              Y={model.Y}
              isSelected={model.isSelected}
              name={model.name}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default GameMap;
