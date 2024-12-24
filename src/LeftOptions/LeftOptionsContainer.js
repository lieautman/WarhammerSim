import BuildingSOptions from "./BuildingsOptions/BuildingsOptions";
import FactionPickerArmy1 from "./FactionPicker/FactionPickerArmy1";
import FactionPickerArmy2 from "./FactionPicker/FactionPickerArmy2";

function LeftOptionsContainer() {
  return (
    <div
      style={{
        width: "20vw",
        height: "100vh",
        backgroundColor: "rgb(190, 190, 190)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "18vw",
          margin: "1vw"
        }}
      >
        <BuildingSOptions />
      </div>
      <div
        style={{
          width: "18vw",
          margin: "1vw"
        }}
      >
        <FactionPickerArmy1 />
        <FactionPickerArmy2 />
      </div>
    </div>
  );
}

export default LeftOptionsContainer;
