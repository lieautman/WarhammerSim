import { useSelector } from "react-redux";
import { Button, Checkbox, Grid2 } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  selectBuildings,
  removeBuilding
} from "../../Game/GameState/BuildingSlice";

function ListOfBuildings() {
  const dispatch = useDispatch();
  const listOfBuildings = useSelector(selectBuildings);
  return (
    <div>
      <Grid2 container>
        <Grid2
          size={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ID
        </Grid2>
        <Grid2
          size={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          W
        </Grid2>
        <Grid2
          size={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          H
        </Grid2>
        <Grid2
          size={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          X
        </Grid2>
        <Grid2
          size={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Y
        </Grid2>
        <Grid2
          size={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Ruin
        </Grid2>
      </Grid2>
      {listOfBuildings.map((building) => {
        return (
          <Grid2 container key={building.buildingId}>
            <Grid2
              size={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {building.buildingId}
            </Grid2>
            <Grid2
              size={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {building.XSize / 10}
            </Grid2>
            <Grid2
              size={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {building.YSize / 10}
            </Grid2>
            <Grid2
              size={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {building.X / 10}
            </Grid2>
            <Grid2
              size={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {building.Y / 10}
            </Grid2>
            <Grid2 size={2}>
              <Checkbox checked={building.isRuin} disabled={true} />
            </Grid2>
            <Grid2
              size={5}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  dispatch(removeBuilding(building.buildingId));
                }}
              >
                Del
              </Button>
            </Grid2>
          </Grid2>
        );
      })}
    </div>
  );
}

export default ListOfBuildings;
