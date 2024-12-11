import { useState } from "react";
import GameFigurine from "./GameFigurine";

function GameMap({ zoom, mapOffset }) {
  const [figurineOffset, setFigurinepOffset] = useState({ X: 0, Y: 0 });
  const [startMouseOffset, setStartMouseOffset] = useState({ X: 0, Y: 0 });
  const [endMouseOffset, setEndMouseOffset] = useState({ X: 0, Y: 0 });
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
      onMouseMove={(event) => {
        event.preventDefault();
        if (event.altKey) {
          setFigurinepOffset({
            X: event.clientX - startMouseOffset.X + endMouseOffset.X,
            Y: event.clientY - startMouseOffset.Y + endMouseOffset.Y
          });
        }
      }}
    >
      <div
        style={{
          height: `${5 * zoom}vh`,
          display: "flex"
        }}
      >
        <GameFigurine zoom={zoom} size={25} figurineOffset={figurineOffset} />
        <GameFigurine zoom={zoom} size={28} figurineOffset={figurineOffset} />
        <GameFigurine zoom={zoom} size={32} figurineOffset={figurineOffset} />
        <GameFigurine zoom={zoom} size={40} figurineOffset={figurineOffset} />
      </div>

      <div
        style={{
          width: `${44 * zoom}vh`,
          height: `${60 * zoom}vh`,
          backgroundColor: "black",
          position: "relative"
        }}
      ></div>
      <div
        style={{
          height: `${5 * zoom}vh`,
          display: "flex"
        }}
      >
        <GameFigurine zoom={zoom} size={25} figurineOffset={figurineOffset} />
        <GameFigurine zoom={zoom} size={28} figurineOffset={figurineOffset} />
        <GameFigurine zoom={zoom} size={32} figurineOffset={figurineOffset} />
        <GameFigurine zoom={zoom} size={40} figurineOffset={figurineOffset} />
      </div>
    </div>
  );
}

export default GameMap;
