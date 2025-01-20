import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { Button, Grid2, TextField, Checkbox } from "@mui/material";
import ListOfBuildings from "./ListOfBuildings";
import { useDispatch } from "react-redux";
import { addBuilding } from "../../Game/GameState/BuildingSlice";
import { useState } from "react";

function BuildingSOptions() {
  const dispatch = useDispatch();
  const [buildingHeight, setBuildingHeight] = useState(10);
  const [buildingWidth, setBuildingWidth] = useState(10);
  const [buildingX, setBuildingX] = useState(50);
  const [buildingY, setBuildingY] = useState(50);
  const [buildingIsRuin, setBuildingIsRuin] = useState(false);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Buildings Options
      </AccordionSummary>
      <AccordionDetails>
        <Grid2 container spacing={1}>
          <Grid2 size={6}>Add new building</Grid2>
          <Grid2 size={6}>
            <Checkbox
              checked={buildingIsRuin}
              onChange={() => {
                setBuildingIsRuin(!buildingIsRuin);
              }}
            />
            Ruin
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label={"Height"}
              type={"number"}
              defaultValue={1}
              onChange={(event) => setBuildingHeight(event.target.value * 10)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label={"Width"}
              type={"number"}
              defaultValue={1}
              onChange={(event) => setBuildingWidth(event.target.value * 10)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label={"X Coord"}
              type={"number"}
              defaultValue={5}
              onChange={(event) => setBuildingX(event.target.value * 10)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label={"Y Coord"}
              type={"number"}
              defaultValue={5}
              onChange={(event) => setBuildingY(event.target.value * 10)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
          <Grid2 size={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                dispatch(
                  addBuilding({
                    XSize: buildingWidth,
                    YSize: buildingHeight,
                    X: buildingX,
                    Y: buildingY,
                    isRuin: buildingIsRuin
                  })
                );
              }}
            >
              Add
            </Button>
          </Grid2>
        </Grid2>
        <ListOfBuildings />
      </AccordionDetails>
    </Accordion>
  );
}

export default BuildingSOptions;
