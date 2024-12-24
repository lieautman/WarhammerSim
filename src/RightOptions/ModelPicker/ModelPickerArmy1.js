import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFactionData } from "../../Game/GameState/ArmyPickerSlice";
import { Button, Grid2 } from "@mui/material";

function ModelPickerArmy1() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        Model Picker Army 1
      </AccordionSummary>
      <AccordionDetails style={{ height: "50vh", overflowY: "scroll" }}>
        <Grid2 container>
          <Grid2
            size={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Name
          </Grid2>
          <Grid2
            size={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Button
          </Grid2>
        </Grid2>
      </AccordionDetails>
    </Accordion>
  );
}

export default ModelPickerArmy1;
