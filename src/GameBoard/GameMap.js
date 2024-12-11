import GameFigurine from "./GameFigurine";

function GameMap({
  zoom,
  mapOffset,
  figurineState,
  setFigurineStartMouseOffset,
  setFigurineState
}) {
  return (
    <div
      style={{
        width: `${44 * zoom}vh`,
        height: `${70 * zoom}vh`,
        backgroundColor: "yellow",
        position: "relative",
        left: `${mapOffset.X}px`,
        top: `${mapOffset.Y}px`
      }}
    >
      <div
        style={{
          height: `${5 * zoom}vh`,
          display: "flex"
        }}
      >
        <GameFigurine
          zoom={zoom}
          size={25}
          figurineState={figurineState}
          setFigurineStartMouseOffset={setFigurineStartMouseOffset}
          setFigurineState={setFigurineState}
        />
      </div>

      <div
        style={{
          width: `${44 * zoom}vh`,
          height: `${60 * zoom}vh`,
          backgroundColor: "black",
          position: "relative",
          zIndex: 0
        }}
      ></div>
      <div
        style={{
          height: `${5 * zoom}vh`,
          display: "flex"
        }}
      ></div>
    </div>
  );
}

export default GameMap;
