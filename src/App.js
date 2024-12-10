import LeftOptionsContainer from "./LeftOptions/LeftOptionsContainer";
import GameBoard from "./GameBoard/GameBoard";
import RightOptionsContainer from "./RightOptions/RightOptionsContainer";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <LeftOptionsContainer></LeftOptionsContainer>
      <GameBoard></GameBoard>
      <RightOptionsContainer></RightOptionsContainer>
    </div>
  );
}

export default App;
