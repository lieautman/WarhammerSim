import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";

function FactionPicker() {
  const dispatch = useDispatch();
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
