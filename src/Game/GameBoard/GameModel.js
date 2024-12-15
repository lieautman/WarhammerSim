import { useSelector } from "react-redux";
import { selectModelData } from "../GameState/GameStateSlice";
import { useEffect } from "react";

function GameModel({ modelId, unitId, zoom, size, X, Y, isSelected, name }) {
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

  //for each model, look in the modelData and retrive info based on the name

  return (
    <div
      style={{
        width: `${sizeDict.get(size) * 10 * zoom}px`,
        height: `${sizeDict.get(size) * 10 * zoom}px`,
        borderRadius: "100%",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: `${X * zoom}px`,
        top: `${Y * zoom}px`,
        border: `${isSelected ? "1px solid blue" : "none"}`,
        zIndex: 100,
        transform: "translate(-50%, -50%)"
      }}
    ></div>
  );
}

export default GameModel;
