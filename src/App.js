import LeftOptionsContainer from "./LeftOptions/LeftOptionsContainer";
import RightOptionsContainer from "./RightOptions/RightOptionsContainer";
import Game from "./Game/Game";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <LeftOptionsContainer></LeftOptionsContainer>
      <Game />
      <RightOptionsContainer></RightOptionsContainer>
    </div>
  );
}

export default App;
