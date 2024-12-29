import GameModel from "./Figurines/GameModel";
import GameBuilding from "./Figurines/GameBuilding";
import { useDispatch, useSelector } from "react-redux";
import { selectMap, selectBuildings } from "../GameState/GameStateSlice";
import {
  selectLastSelectedModelCoords,
  selectArmys,
  moveSelectedModels
} from "../GameState/ArmyPickerSlice";
import { useState } from "react";
function GameMap({ zoom }) {
  const armys = useSelector(selectArmys);
  const buildings = useSelector(selectBuildings);
  const map = useSelector(selectMap);
  const lastSelectedModelCoords = useSelector(selectLastSelectedModelCoords);
  //model movement
  const [isMovingModels, setIsMovingModels] = useState(false);
  const [startMouseOffset, setStartMouseOffset] = useState({ X: 0, Y: 0 });
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: `${44 * 10 * zoom}px`,
        height: `${70 * 10 * zoom}px`,
        backgroundColor: "blue",
        position: "relative",
        left: `${map.X}px`,
        top: `${map.Y}px`
      }}
      onMouseMove={(event) => {
        if (event.ctrlKey && isMovingModels) {
          event.preventDefault();
          dispatch(
            moveSelectedModels({
              X:
                (event.clientX - startMouseOffset.X) / zoom +
                lastSelectedModelCoords.X,
              Y:
                (event.clientY - startMouseOffset.Y) / zoom +
                lastSelectedModelCoords.Y
            })
          );
          event.stopPropagation();
        }
      }}
    >
      <div
        style={{
          height: `${5 * 10 * zoom}px`,
          display: "flex",
          position: "relative",
          backgroundColor: "rgb(195, 195, 195)"
        }}
      >
        {armys[0].units.map((unit) =>
          unit.models.map((model) => (
            <GameModel
              key={unit.unitId + "_" + model.modelId}
              modelId={model.modelId}
              unitId={unit.unitId}
              armyId={armys[0].armyId}
              zoom={zoom}
              X={model.X}
              Y={model.Y}
              isSelected={model.isSelected}
              name={model.name}
              setIsMovingModels={setIsMovingModels}
              setStartMouseOffset={setStartMouseOffset}
              color={"rgb(211, 39, 0)"}
              selectedColor={"rgb(211, 139, 100)"}
            />
          ))
        )}
      </div>
      <div
        style={{
          width: `${44 * 10 * zoom}px`,
          height: `${60 * 10 * zoom}px`,
          backgroundColor: "black",
          position: "relative",
          zIndex: 0
        }}
      >
        {buildings.map((building) => (
          <GameBuilding
            key={building.buildingId}
            XSize={building.XSize}
            YSize={building.YSize}
            zoom={zoom}
            X={building.X}
            Y={building.Y}
            isRuin={building.isRuin}
          />
        ))}
      </div>
      <div
        style={{
          height: `${5 * 10 * zoom}px`,
          display: "flex",
          position: "relative",
          backgroundColor: "rgb(195, 195, 195)"
        }}
      >
        {armys[1].units.map((unit) =>
          unit.models.map((model) => (
            <GameModel
              key={unit.unitId + "_" + model.modelId}
              modelId={model.modelId}
              unitId={unit.unitId}
              armyId={armys[1].armyId}
              zoom={zoom}
              X={model.X}
              Y={model.Y}
              isSelected={model.isSelected}
              name={model.name}
              setIsMovingModels={setIsMovingModels}
              setStartMouseOffset={setStartMouseOffset}
              color={"rgb(0, 60, 211)"}
              selectedColor={"rgb(100, 160, 211)"}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default GameMap;
