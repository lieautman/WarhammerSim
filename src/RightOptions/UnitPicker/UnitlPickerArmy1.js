import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Button, Grid2 } from "@mui/material";
import {
  selectModelData,
  selectArmys
} from "../../Game/GameState/ArmyPickerSlice";

function UnitlPickerArmy1() {
  const modelData = useSelector(selectModelData);
  const armys = useSelector(selectArmys);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        Unit Picker Army 1
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

export default UnitlPickerArmy1;
