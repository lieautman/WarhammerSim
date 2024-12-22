import BuildingSOptions from "./BuildingsOptions/BuildingsOptions";

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
    </div>
  );
}

export default LeftOptionsContainer;
