function GameBuilding({ XSize, YSize, zoom, X, Y, isRuin }) {
  return (
    <div
      style={{
        width: `${XSize * zoom}px`,
        height: `${YSize * zoom}px`,
        backgroundColor: `${isRuin ? "rgb(143, 143, 143)" : "rgb(62, 62, 62)"}`,
        position: "absolute",
        left: `${X * zoom}px`,
        top: `${Y * zoom}px`,
        zIndex: 100
      }}
    />
  );
}

export default GameBuilding;
