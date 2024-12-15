import BuildingSOptions from "./BuildingsOptions/BuildingsOptions";

function LeftOptionsContainer() {
  return (
    <div
      style={{
        width: "15vw",
        height: "100vh",
        backgroundColor: "rgb(190, 190, 190)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div
        style={{
          margin: "1vw"
        }}
      >
        <BuildingSOptions />
      </div>
    </div>
  );
}

export default LeftOptionsContainer;
