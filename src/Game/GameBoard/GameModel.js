function GameModel({ modelId, unitId, zoom, size, X, Y, isSelected, name }) {
  const sizeDict = new Map([
    [25, 0.984251969],
    [28, 1.1023622],
    [32, 1.25984252],
    [40, 1.57480315]
  ]);
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