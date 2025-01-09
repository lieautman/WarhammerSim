import { useDispatch } from "react-redux";
import { selectModel } from "../../GameState/ArmyPickerSlice"; //selectUnit
import { Tooltip } from "@mui/material";

function GameModel({
  modelId,
  unitId,
  armyId,
  zoom,
  movement,
  baseWidth,
  baseHeight,
  X,
  Y,
  isSelected,
  name,
  setIsMovingModels,
  setStartMouseOffset,
  color,
  selectedColor
}) {
  const dispatch = useDispatch();
  return (
    <Tooltip title={name + ` M: ` + movement + "'"} arrow>
      <div
        style={{
          width: `${baseWidth * 10 * zoom}px`,
          height: `${baseHeight * 10 * zoom}px`,
          borderRadius: "100%",
          backgroundColor: `${isSelected ? selectedColor : color}`,
          position: "absolute",
          left: `${X * zoom}px`,
          top: `${Y * zoom}px`,
          zIndex: 1
        }}
        onClick={(event) => {
          if (!isSelected) {
            setStartMouseOffset({ X: event.clientX, Y: event.clientY });
            setIsMovingModels(true);
          } else {
            setIsMovingModels(false);
          }
          //if (event.shiftKey) dispatch(selectUnit({ armyId, unitId }));
          //else
          dispatch(selectModel({ armyId, unitId, modelId }));
        }}
      />
    </Tooltip>
  );
}

export default GameModel;
