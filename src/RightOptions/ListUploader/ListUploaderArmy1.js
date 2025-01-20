import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { importFromNewRecruit } from "../../Game/GameState/ArmySlice";

function ListUploaderArmy1() {
  const [armyJson, setArmyJson] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "18vw",
        margin: "1vw"
      }}
    >
      Import json from new recruit:
      <div style={{ display: "flex" }}>
        <TextField
          size="small"
          style={{ width: "10vw" }}
          onChange={(event) => setArmyJson(event.target.value)}
        ></TextField>
        <Button
          variant="contained"
          onClick={() => {
            try {
              const data = JSON.parse(armyJson);
              const selections = data.roster.forces[0].selections;
              const names = selections.slice(3).map((item) => item.name);
              const factionName = data.roster.forces[0].catalogueName;
              dispatch(
                importFromNewRecruit({ factionName, units: names, armyId: 0 })
              );
            } catch (ex) {
              console.log("error", ex);
            }
          }}
        >
          Import
        </Button>
      </div>
    </div>
  );
}

export default ListUploaderArmy1;
//json->roster->forces->selections->3.....end->name
