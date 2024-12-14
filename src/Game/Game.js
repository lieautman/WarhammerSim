import { useEffect } from "react";
import GameBoard from "./GameBoard/GameBoard";

function Game() {
  const load = function () {
    fetch("./BaseSizeAndMovement.csv")
      .then((response) => response.text())
      .then((responseText) => {
        console.log("ceva", responseText);
      });
  };
  useEffect(() => {
    load();
  }, []);
  return <GameBoard />;
}

export default Game;
