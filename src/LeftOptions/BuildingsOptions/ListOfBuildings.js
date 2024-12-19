import { selectBuildings } from "../../Game/GameState/GameStateSlice";
import { useSelector } from "react-redux";
import { Grid2 } from "@mui/material";

function ListOfBuildings() {
  const listOfBuildings = useSelector(selectBuildings);
  return (
    <div>
      <Grid2 container spacing={1}>
        <Grid2 size={2}>ID</Grid2>
        <Grid2 size={2}>W</Grid2>
        <Grid2 size={2}>H</Grid2>
        <Grid2 size={2}>X</Grid2>
        <Grid2 size={2}>Y</Grid2>
        <Grid2 size={2}>Ruin</Grid2>
      </Grid2>
      {listOfBuildings.map((building) => {
        return (
          <Grid2 container spacing={1} key={building.buildingId}>
            <Grid2 size={2}>{building.buildingId}</Grid2>
            <Grid2 size={2}>{building.XSize / 10}</Grid2>
            <Grid2 size={2}>{building.YSize / 10}</Grid2>
            <Grid2 size={2}>{building.X / 10}</Grid2>
            <Grid2 size={2}>{building.Y / 10}</Grid2>
            <Grid2 size={2}>{building.isRuin ? "True" : "False"}</Grid2>
          </Grid2>
        );
      })}
    </div>
  );
}

export default ListOfBuildings;
