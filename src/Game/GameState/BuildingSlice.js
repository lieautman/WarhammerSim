import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buildings: []
};

export const BuildingSlice = createSlice({
  name: "BuildingState",
  initialState,
  reducers: {
    addBuilding: (state, action) => {
      let buildings = [...state.buildings];
      let newBuilding = { ...action.payload };
      if (buildings.length !== 0)
        newBuilding.buildingId = buildings[buildings.length - 1].buildingId + 1;
      else newBuilding.buildingId = 0;
      buildings.push(newBuilding);
      return {
        ...state,
        buildings: buildings
      };
    },
    removeBuilding: (state, action) => {
      let buildings = [...state.buildings];
      buildings = buildings.filter(
        (building) => building.buildingId !== action.payload
      );
      return {
        ...state,
        buildings: buildings
      };
    }
  }
});

export const { addBuilding, removeBuilding } = BuildingSlice.actions;

export const selectBuildings = (state) => state.BuildingReducer.buildings;

export default BuildingSlice.reducer;
