import GameModel from "./Figurines/GameModel";
import GameBuilding from "./Figurines/GameBuilding";
import { useDispatch, useSelector } from "react-redux";
import { selectMap, selectBuildings } from "../GameState/BoardSlice";
import {
  selectLastSelectedModelData,
  selectArmys,
  moveSelectedModels
} from "../GameState/ArmyPickerSlice";
import { useState } from "react";
function GameMap({ zoom }) {
  const armys = useSelector(selectArmys);
  const buildings = useSelector(selectBuildings);
  const map = useSelector(selectMap);
  const lastSelectedModelData = useSelector(selectLastSelectedModelData);
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
            lastSelectedModelData.X;
          const Y =
            (event.clientY - startMouseOffset.Y) / zoom +
            lastSelectedModelData.Y;
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
            movement={model.movement}
            baseWidth={model.baseWidth}
            baseHeight={model.baseHeight}
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
            movement={model.movement}
            baseWidth={model.baseWidth}
            baseHeight={model.baseHeight}
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
            Math.pow(currentMouseCoords.X - lastSelectedModelData.X, 2) +
              Math.pow(currentMouseCoords.Y - lastSelectedModelData.Y, 2)
          ) / 10}
          '
        </text>
        <line
          style={{ display: !isMovingModels ? "none" : "block" }}
          x1={`${lastSelectedModelData.X * zoom}px`}
          y1={`${lastSelectedModelData.Y * zoom}px`}
          x2={`${
            (currentMouseCoords.X +
              (lastSelectedModelData.baseHeight / 2) * 10) *
            zoom
          }px`}
          y2={`${
            (currentMouseCoords.Y +
              (lastSelectedModelData.baseWidth / 2) * 10) *
            zoom
          }px`}
          stroke={
            lastSelectedModelData.movement >
            Math.sqrt(
              Math.pow(currentMouseCoords.X - lastSelectedModelData.X, 2) +
                Math.pow(currentMouseCoords.Y - lastSelectedModelData.Y, 2)
            ) /
              10
              ? "yellow"
              : "red"
          }
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

export default GameMap;
