import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Grid2 } from "@mui/material";
import {
  selectModelData,
  selectArmys,
  addUnitToArmy
} from "../../Game/GameState/ArmySlice";

function UnitlPickerArmy2() {
  const modelData = useSelector(selectModelData);
  const armys = useSelector(selectArmys);
  const dispatch = useDispatch();
  //maybe filter them by el.role
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        Unit Picker Army 2
      </AccordionSummary>
      <AccordionDetails style={{ height: "50vh", overflowY: "scroll" }}>
        <Grid2 container>
          <Grid2
            size={8}
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
        {modelData
          .filter((model) => model.faction_id === armys[1].factionId)
          .map((el) => {
            return (
              <Grid2 container key={el.id}>
                <Grid2
                  size={8}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {el.name}
                </Grid2>
                <Grid2
                  size={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Button
                    onClick={() => {
                      dispatch(
                        addUnitToArmy({
                          armyId: 1,
                          newUnit: {
                            models: [
                              {
                                modelId: 1,
                                X: 0,
                                Y: 0,
                                isSelected: false,
                                name: el.name
                              }
                            ]
                          }
                        })
                      );
                    }}
                  >
                    Add unit
                  </Button>
                </Grid2>
              </Grid2>
            );
          })}
      </AccordionDetails>
    </Accordion>
  );
}

export default UnitlPickerArmy2;
