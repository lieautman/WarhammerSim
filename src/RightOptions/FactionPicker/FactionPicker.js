import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFactionData } from "../../Game/GameState/ArmyPickerSlice";
import { Grid2, Select } from "@mui/material";

function FactionPicker() {
  const dispatch = useDispatch();
  const listOfFactions = useSelector(selectFactionData);
  console.log("ceva", listOfFactions);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        Faction Picker
      </AccordionSummary>
      <AccordionDetails>
        <Grid2 container>
          <Grid2
            size={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ID
          </Grid2>
          <Grid2
            size={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Name
          </Grid2>
          <Grid2
            size={4}
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

export default FactionPicker;
