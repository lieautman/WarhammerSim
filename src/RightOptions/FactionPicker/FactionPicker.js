import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFactionData } from "../../Game/GameState/ArmyPickerSlice";

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
      <AccordionDetails></AccordionDetails>
    </Accordion>
  );
}

export default FactionPicker;
