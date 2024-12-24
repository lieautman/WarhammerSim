import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectFaction,
  selectFactionData
} from "../../Game/GameState/ArmyPickerSlice";
import { Button, Grid2 } from "@mui/material";

function FactionPickerArmy2() {
  const dispatch = useDispatch();
  const listOfFactions = useSelector(selectFactionData);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        Faction Picker Army 2
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
          {listOfFactions.map((faction) => {
            return (
              <>
                <Grid2
                  size={10}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {faction.name}
                </Grid2>
                <Grid2
                  size={2}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Button
                    onClick={() => {
                      dispatch(
                        selectFaction({
                          armyId: 1,
                          factionId: faction.id,
                          factionName: faction.name
                        })
                      );
                    }}
                  >
                    Choose
                  </Button>
                </Grid2>
              </>
            );
          })}
        </Grid2>
      </AccordionDetails>
    </Accordion>
  );
}

export default FactionPickerArmy2;
