import { selectBuildings } from "../../Game/GameState/GameStateSlice";
import { useSelector } from "react-redux";
import { Grid2 } from "@mui/material";

function ListOfBuildings() {
  const listOfBuildings = useSelector(selectBuildings);
  console.log("ceva", listOfBuildings);
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
    </div>
  );
}

export default ListOfBuildings;
