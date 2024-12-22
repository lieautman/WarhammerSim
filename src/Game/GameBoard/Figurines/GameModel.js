import { useSelector } from "react-redux";
import { selectModelData } from "../../GameState/ArmyPickerSlice";
import { useDispatch } from "react-redux";
import { selectModel } from "../../GameState/ArmyPickerSlice"; //selectUnit

function GameModel({
  modelId,
  unitId,
  armyId,
  zoom,
  X,
  Y,
  isSelected,
  name,
  isMovingModels,
  setIsMovingModels,
  setStartMouseOffset
}) {
  const dispatch = useDispatch();
  //for each model, look in the modelData and retrive info based on the name
  const modelData = useSelector(selectModelData).find(
    (data) => data.name === name
  );
  const sizeDict = new Map([
    [25, 0.98425196],
    [28, 1.10236219],
    [32, 1.25984251],
    [40, 1.57480314],
    [50, 1.96850393],
    [60, 2.36220472],
    [70, 2.75590551],
    [80, 3.14960629],
    [90, 3.54330708],
    [100, 3.93700787],
    [130, 5.11811023],
    [160, 6.29921259]
  ]);

  return (
    <div
      style={{
        width: `${
          sizeDict.get(
            parseInt(
              modelData?.base_size.substring(0, modelData?.base_size.length - 2)
            )
          ) *
          10 *
          zoom
        }px`,
        height: `${
          sizeDict.get(
            parseInt(
              modelData?.base_size.substring(0, modelData?.base_size.length - 2)
            )
          ) *
          10 *
          zoom
        }px`,
        borderRadius: "100%",
        backgroundColor: `${
          isSelected ? "rgb(208, 132, 94)" : "rgb(211, 39, 0)"
        }`,
        position: "relative",
        left: `${X * zoom}px`,
        top: `${Y * zoom}px`,
        zIndex: 100
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
  );
}

export default GameModel;
