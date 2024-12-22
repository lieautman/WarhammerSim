import FactionPicker from "./FactionPicker/FactionPicker";

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
        <FactionPicker />
      </div>
    </div>
  );
}

export default RightOptionsContainer;
