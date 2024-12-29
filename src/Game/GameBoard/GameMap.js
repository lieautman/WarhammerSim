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
  const [currentMouseCoords, setCurrentMouseCoords] = useState({ X: 0, Y: 0 }); //can add model width to both numbers to draw line from center
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: `${44 * 10 * zoom}px`,
        height: `${70 * 10 * zoom}px`,
        position: "relative",
        left: `${map.X}px`,
        top: `${map.Y}px`,
        background: `linear-gradient( rgb(195, 195, 195) 0,  rgb(195, 195, 195) 8.33%, black 8.33%, black 91.67%,  rgb(195, 195, 195) 91.67%,  rgb(195, 195, 195) 100%)`
      }}
      onMouseMove={(event) => {
        if (event.ctrlKey && isMovingModels) {
          event.preventDefault();
          const X =
            (event.clientX - startMouseOffset.X) / zoom +
            lastSelectedModelCoords.X;
          const Y =
            (event.clientY - startMouseOffset.Y) / zoom +
            lastSelectedModelCoords.Y;
          dispatch(
            moveSelectedModels({
              X: X,
              Y: Y
            })
          );
          setCurrentMouseCoords({ X: X, Y: Y });
          event.stopPropagation();
        }
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
      <svg
        style={{
          position: "absolute"
        }}
        width={`${44 * 10 * zoom}px`}
        height={`${70 * 10 * zoom}px`}
      >
        <text
          style={{
            fill: "red",
            display: !isMovingModels ? "none" : "block"
          }}
          x={`${currentMouseCoords.X * zoom}px`}
          y={`${currentMouseCoords.Y * zoom}px`}
        >
          {Math.sqrt(
            Math.pow(currentMouseCoords.X - lastSelectedModelCoords.X, 2) +
              Math.pow(currentMouseCoords.Y - lastSelectedModelCoords.Y, 2)
          ) / 10}
          '
        </text>
        <line
          style={{ display: !isMovingModels ? "none" : "block" }}
          x1={`${lastSelectedModelCoords.X * zoom}px`}
          y1={`${lastSelectedModelCoords.Y * zoom}px`}
          x2={`${currentMouseCoords.X * zoom}px`}
          y2={`${currentMouseCoords.Y * zoom}px`}
          stroke="yellow"
          stroke-width="4"
        />
      </svg>
    </div>
  );
}

export default GameMap;
