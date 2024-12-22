import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { Button, Grid2, TextField, Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";

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
