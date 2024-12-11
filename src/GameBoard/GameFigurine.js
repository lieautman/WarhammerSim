function GameFigurine({
  zoom,
  size,
  setStartMouseOffset,
  figurineState,
  setFigurinepState
}) {
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
        left: `${figurineState.X}px`,
        top: `${figurineState.Y}px`,
        border: `${figurineState.isSelected ? "solid blue" : "none"}`,
        zIndex: 100
      }}
      onClick={(event) => {
        event.preventDefault();
        setStartMouseOffset({ X: event.clientX, Y: event.clientY });
        setFigurinepState({
          ...figurineState,
          isSelected: !figurineState.isSelected
        });
        event.stopPropagation();
      }}
    ></div>
  );
}

export default GameFigurine;
