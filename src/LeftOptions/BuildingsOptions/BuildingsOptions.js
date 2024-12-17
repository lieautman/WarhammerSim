import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import {
  Button,
  FormControlLabel,
  Grid2,
  TextField,
  Checkbox
} from "@mui/material";
import ListOfBuildings from "./ListOfBuildings";
import { useDispatch } from "react-redux";
import { addBuilding } from "../../Game/GameState/GameStateSlice";

function BuildingSOptions() {
  const dispatch = useDispatch();

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
            <FormControlLabel
              control={<Checkbox checked={false} onChange={() => {}} />}
              label={"Ruin"}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label={"Height"}
              type={"number"}
              defaultValue={1}
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label={"Width"}
              type={"number"}
              defaultValue={1}
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label={"X Coord"}
              type={"number"}
              defaultValue={5}
              InputLabelProps={{ shrink: true }}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              label={"Y Coord"}
              type={"number"}
              defaultValue={5}
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
                    buildingId: 1,
                    XSize: 40,
                    YSize: 30,
                    X: 50,
                    Y: 20,
                    isRuin: false
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
