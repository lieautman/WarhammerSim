import { useDispatch } from "react-redux";
import GameBoard from "./GameBoard/GameBoard";
import { loadFactionData, loadModelData } from "./GameState/ArmySlice";
import { useEffect, useState } from "react";

function Game() {
  const dispatch = useDispatch();
  const [modelDataLoaded, setModelDataLoaded] = useState(false);
  const [factionDataLoaded, setFactionDataLoaded] = useState(false);

  //loadFactionData
  useEffect(() => {
    if (!factionDataLoaded) {
      fetch("./factionData.json")
        .then((response) => response.json())
        .then((json) => dispatch(loadFactionData(json)));
      setFactionDataLoaded(true);
    }
  }, [dispatch, factionDataLoaded]);
  //loadModelData
  useEffect(() => {
    if (!modelDataLoaded) {
      fetch("./modelData.json")
        .then((response) => response.json())
        .then((json) => dispatch(loadModelData(json)));
      setModelDataLoaded(true);
    }
  }, [dispatch, modelDataLoaded]);

  return <GameBoard />;
}

export default Game;
