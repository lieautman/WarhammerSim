function GameFigurine({ zoom, size, X, Y, isSelected, name }) {
  const sizeDict = new Map([
    [25, 0.984251969],
    [28, 1.1023622],
    [32, 1.25984252],
    [40, 1.57480315]
  ]);
  return (
    <div
      style={{
        width: `${sizeDict.get(size) * zoom}vh`,
        height: `${sizeDict.get(size) * zoom}vh`,
        borderRadius: "100%",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        left: `${X}px`,
        top: `${Y}px`,
        border: `${isSelected ? "1px solid blue" : "none"}`,
        zIndex: 100
      }}
    ></div>
  );
}

export default GameFigurine;
