import UnitlPickerArmy1 from "./UnitPicker/UnitlPickerArmy1";
import UnitlPickerArmy2 from "./UnitPicker/UnitlPickerArmy2";

function RightOptionsContainer() {
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
        <UnitlPickerArmy1 />
        <UnitlPickerArmy2 />
      </div>
    </div>
  );
}

export default RightOptionsContainer;
