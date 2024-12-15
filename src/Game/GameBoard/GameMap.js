import GameModel from "./GameModel";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMap,
  selectArmys,
  selectLastSelectedModelCoords
} from "../GameState/GameStateSlice";
import { moveSelectedModels } from "../GameState/GameStateSlice";
import { useState } from "react";
function GameMap({ zoom }) {
  const armys = useSelector(selectArmys);
  const map = useSelector(selectMap);
  const lastSelectedModelCoords = useSelector(selectLastSelectedModelCoords);

  //model movement
  const [isMovingModels, setIsMovingModels] = useState(false);
  const [startMouseOffset, setStartMouseOffset] = useState({ X: 0, Y: 0 });
  const [endMouseOffset, setEndMouseOffset] = useState({ X: 0, Y: 0 });
  const dispatch = useDispatch();

  return (
    <div
      style={{
        width: `${440 * zoom}px`,
        height: `${700 * zoom}px`,
        backgroundColor: "blue",
        position: "relative",
        left: `${map.X}px`,
        top: `${map.Y}px`
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        setIsMovingModels(true);
        setStartMouseOffset({ X: event.clientX, Y: event.clientY });
      }}
      onMouseUp={(event) => {
        event.preventDefault();
        setIsMovingModels(false);
        setEndMouseOffset({ X: map.X, Y: map.Y });
      }}
      onMouseMove={(event) => {
        if (event.ctrlKey && isMovingModels) {
          event.preventDefault();

          dispatch(
            moveSelectedModels({
              X:
                event.clientX -
                startMouseOffset.X +
                lastSelectedModelCoords.X +
                endMouseOffset.X,
              Y:
                event.clientY -
                startMouseOffset.Y +
                lastSelectedModelCoords.Y +
                endMouseOffset.Y
            })
          );
          event.stopPropagation();
        }
      }}
      onMouseLeave={(event) => {
        event.preventDefault();
        setIsMovingModels(false);
        setEndMouseOffset({ X: map.X, Y: map.Y });
        event.stopPropagation();
      }}
    >
      <div
        style={{
          height: `${50 * zoom}px`,
          display: "flex",
          backgroundColor: "yellow"
        }}
      >
        {armys[0].units.map((unit) =>
          unit.models.map((model) => (
            <GameModel
              key={model.modelId}
              modelId={model.modelId}
              unitId={unit.unitId}
              armyId={armys[0].armyId}
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
          display: "flex",
          backgroundColor: "yellow"
        }}
      >
        {armys[1].units.map((unit) =>
          unit.models.map((model) => (
            <GameModel
              key={model.modelId}
              modelId={model.modelId}
              unitId={unit.unitId}
              armyId={armys[1].armyId}
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
