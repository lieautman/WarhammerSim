import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { Button, Grid2, TextField } from "@mui/material";

function BuildingSOptions() {
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
          <Grid2 size={12}>Add new building</Grid2>
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
            <Button variant="contained" fullWidth>
              Add
            </Button>
          </Grid2>
        </Grid2>
        <div>List of buildings</div>
      </AccordionDetails>
    </Accordion>
  );
}

export default BuildingSOptions;
