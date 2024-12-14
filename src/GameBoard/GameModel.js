function GameModel({ zoom, size, X, Y, isSelected, name }) {
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
        position: "relative",
        left: `${X}px`,
        top: `${Y}px`,
        border: `${isSelected ? "1px solid blue" : "none"}`,
        zIndex: 100,
        transform: "translate(-50%, -50%)"
      }}
    ></div>
  );
}

export default GameModel;
