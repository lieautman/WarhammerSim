import { useDispatch } from "react-redux";
import GameBoard from "./GameBoard/GameBoard";
import { loadModelData } from "./GameState/GameStateSlice";
import { useEffect, useState } from "react";

function Game() {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(false);
  //loadModelData
  useEffect(() => {
    if (!dataLoaded) {
      fetch("./modelData.json")
        .then((response) => response.json())
        .then((json) => dispatch(loadModelData(json)));
      setDataLoaded(true);
    }
  }, [dispatch, dataLoaded]);

  return <GameBoard />;
}

export default Game;
